import { useState, useMemo } from 'react';
import { Plus, Search, Edit, Trash2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription,
} from '@/components/ui/dialog';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Admin, adminsMockData, adminRoleOptions, adminRoleLabels,
} from '@/data/adminsMockData';

const emptyAdmin: Omit<Admin, 'id' | 'createdAt'> = {
  name: '', email: '', role: 'admin', status: 'active',
};

export function AdminList() {
  const { toast } = useToast();
  const [admins, setAdmins] = useState<Admin[]>(adminsMockData);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingAdmin, setEditingAdmin] = useState<Omit<Admin, 'id' | 'createdAt'> | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return admins.filter((a) => {
      const matchSearch =
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase());
      const matchRole = filterRole === 'all' || a.role === filterRole;
      const matchStatus = filterStatus === 'all' || a.status === filterStatus;
      return matchSearch && matchRole && matchStatus;
    });
  }, [admins, search, filterRole, filterStatus]);

  const openCreate = () => {
    setEditingId(null);
    setEditingAdmin({ ...emptyAdmin });
    setDialogOpen(true);
  };

  const openEdit = (admin: Admin) => {
    setEditingId(admin.id);
    const { id, createdAt, ...rest } = admin;
    setEditingAdmin({ ...rest });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!editingAdmin || !editingAdmin.name || !editingAdmin.email) {
      toast({ title: 'Error', description: 'Lengkapi semua field yang diperlukan.', variant: 'destructive' });
      return;
    }
    if (editingId) {
      setAdmins((prev) =>
        prev.map((a) =>
          a.id === editingId ? { ...a, ...editingAdmin } : a
        )
      );
      toast({ title: 'Berhasil', description: 'Data admin berhasil diperbarui.' });
    } else {
      const newAdmin: Admin = {
        ...editingAdmin,
        id: Date.now().toString(),
        createdAt: new Date().toISOString().split('T')[0],
      };
      setAdmins((prev) => [...prev, newAdmin]);
      toast({ title: 'Berhasil', description: 'Admin baru berhasil ditambahkan.' });
    }
    setDialogOpen(false);
    setEditingAdmin(null);
  };

  const handleDelete = () => {
    if (!deleteId) return;
    setAdmins((prev) => prev.filter((a) => a.id !== deleteId));
    toast({ title: 'Berhasil', description: 'Admin berhasil dihapus.' });
    setDeleteId(null);
  };

  const updateField = (field: keyof Omit<Admin, 'id' | 'createdAt'>, value: string) => {
    setEditingAdmin((prev) => prev ? { ...prev, [field]: value } : prev);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" /> Daftar Admin
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Kelola akun administrator sistem</p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="w-4 h-4 mr-2" /> Tambah Admin
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Cari nama atau email..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={filterRole} onValueChange={setFilterRole}>
          <SelectTrigger><SelectValue placeholder="Semua Role" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Role</SelectItem>
            {adminRoleOptions.map((r) => (
              <SelectItem key={r} value={r}>{adminRoleLabels[r]}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger><SelectValue placeholder="Semua Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="text-sm text-muted-foreground">{filtered.length} admin ditemukan</p>

      {/* Table */}
      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tanggal Dibuat</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  Tidak ada admin ditemukan.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell className="font-medium">{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>
                    <Badge variant={admin.role === 'super_admin' ? 'default' : 'outline'}>
                      {adminRoleLabels[admin.role]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={admin.status === 'active' ? 'default' : 'secondary'}>
                      {admin.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>{admin.createdAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(admin)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => setDeleteId(admin.id)} className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? 'Edit Admin' : 'Tambah Admin Baru'}</DialogTitle>
            <DialogDescription>
              {editingId ? 'Perbarui data admin di bawah ini.' : 'Isi data admin baru di bawah ini.'}
            </DialogDescription>
          </DialogHeader>
          {editingAdmin && (
            <div className="grid gap-4 py-2">
              <div className="space-y-2">
                <Label>Nama</Label>
                <Input value={editingAdmin.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Nama lengkap" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" value={editingAdmin.email} onChange={(e) => updateField('email', e.target.value)} placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select value={editingAdmin.role} onValueChange={(v) => updateField('role', v)}>
                  <SelectTrigger><SelectValue placeholder="Pilih role" /></SelectTrigger>
                  <SelectContent>
                    {adminRoleOptions.map((r) => (
                      <SelectItem key={r} value={r}>{adminRoleLabels[r]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={editingAdmin.status} onValueChange={(v) => updateField('status', v)}>
                  <SelectTrigger><SelectValue placeholder="Pilih status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
            <Button onClick={handleSave}>{editingId ? 'Simpan' : 'Tambah'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Admin?</AlertDialogTitle>
            <AlertDialogDescription>
              Akun admin akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
