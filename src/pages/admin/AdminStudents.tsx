import { useState, useMemo } from 'react';
import { Plus, Search, Edit, Trash2, Users } from 'lucide-react';
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
  Student, studentsMockData, classOptions, packageOptions, genderOptions,
} from '@/data/studentsMockData';

const emptyStudent: Omit<Student, 'id'> = {
  name: '', age: 0, class: '', package: '', gender: 'Laki-laki', status: 'active',
};

export function AdminStudents() {
  const { toast } = useToast();
  const [students, setStudents] = useState<Student[]>(studentsMockData);
  const [search, setSearch] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [filterPackage, setFilterPackage] = useState('all');
  const [filterGender, setFilterGender] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingStudent, setEditingStudent] = useState<Omit<Student, 'id'> | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return students.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchClass = filterClass === 'all' || s.class === filterClass;
      const matchPkg = filterPackage === 'all' || s.package === filterPackage;
      const matchGender = filterGender === 'all' || s.gender === filterGender;
      const matchStatus = filterStatus === 'all' || s.status === filterStatus;
      return matchSearch && matchClass && matchPkg && matchGender && matchStatus;
    });
  }, [students, search, filterClass, filterPackage, filterGender, filterStatus]);

  const openCreate = () => {
    setEditingId(null);
    setEditingStudent({ ...emptyStudent });
    setDialogOpen(true);
  };

  const openEdit = (student: Student) => {
    setEditingId(student.id);
    const { id, ...rest } = student;
    setEditingStudent({ ...rest });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!editingStudent || !editingStudent.name || !editingStudent.class || !editingStudent.package) {
      toast({ title: 'Error', description: 'Lengkapi semua field yang diperlukan.', variant: 'destructive' });
      return;
    }
    if (editingId) {
      setStudents((prev) => prev.map((s) => s.id === editingId ? { ...editingStudent, id: editingId } : s));
      toast({ title: 'Berhasil', description: 'Data siswa berhasil diperbarui.' });
    } else {
      const newStudent: Student = { ...editingStudent, id: Date.now().toString() };
      setStudents((prev) => [...prev, newStudent]);
      toast({ title: 'Berhasil', description: 'Siswa baru berhasil ditambahkan.' });
    }
    setDialogOpen(false);
    setEditingStudent(null);
  };

  const handleDelete = () => {
    if (!deleteId) return;
    setStudents((prev) => prev.filter((s) => s.id !== deleteId));
    toast({ title: 'Berhasil', description: 'Siswa berhasil dihapus.' });
    setDeleteId(null);
  };

  const updateField = (field: keyof Omit<Student, 'id'>, value: string | number) => {
    setEditingStudent((prev) => prev ? { ...prev, [field]: value } : prev);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" /> Daftar Siswa
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Kelola data siswa les privat</p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="w-4 h-4 mr-2" /> Tambah Siswa
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Cari nama siswa..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={filterClass} onValueChange={setFilterClass}>
          <SelectTrigger><SelectValue placeholder="Semua Kelas" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kelas</SelectItem>
            {classOptions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={filterPackage} onValueChange={setFilterPackage}>
          <SelectTrigger><SelectValue placeholder="Semua Paket" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Paket</SelectItem>
            {packageOptions.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={filterGender} onValueChange={setFilterGender}>
          <SelectTrigger><SelectValue placeholder="Semua Gender" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Gender</SelectItem>
            {genderOptions.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
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

      {/* Results count */}
      <p className="text-sm text-muted-foreground">{filtered.length} siswa ditemukan</p>

      {/* Table */}
      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Umur</TableHead>
              <TableHead>Kelas</TableHead>
              <TableHead>Paket Les</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  Tidak ada siswa ditemukan.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.age} thn</TableCell>
                  <TableCell><Badge variant="outline">{student.class}</Badge></TableCell>
                  <TableCell>{student.package}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>
                    <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                      {student.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(student)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => setDeleteId(student.id)} className="text-destructive hover:text-destructive">
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
            <DialogTitle>{editingId ? 'Edit Siswa' : 'Tambah Siswa Baru'}</DialogTitle>
            <DialogDescription>
              {editingId ? 'Perbarui data siswa di bawah ini.' : 'Isi data siswa baru di bawah ini.'}
            </DialogDescription>
          </DialogHeader>
          {editingStudent && (
            <div className="grid gap-4 py-2">
              <div className="space-y-2">
                <Label>Nama</Label>
                <Input value={editingStudent.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Nama lengkap" />
              </div>
              <div className="space-y-2">
                <Label>Umur</Label>
                <Input type="number" value={editingStudent.age || ''} onChange={(e) => updateField('age', parseInt(e.target.value) || 0)} placeholder="Umur" />
              </div>
              <div className="space-y-2">
                <Label>Kelas</Label>
                <Select value={editingStudent.class} onValueChange={(v) => updateField('class', v)}>
                  <SelectTrigger><SelectValue placeholder="Pilih kelas" /></SelectTrigger>
                  <SelectContent>
                    {classOptions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Paket Les</Label>
                <Select value={editingStudent.package} onValueChange={(v) => updateField('package', v)}>
                  <SelectTrigger><SelectValue placeholder="Pilih paket" /></SelectTrigger>
                  <SelectContent>
                    {packageOptions.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <Select value={editingStudent.gender} onValueChange={(v) => updateField('gender', v)}>
                  <SelectTrigger><SelectValue placeholder="Pilih gender" /></SelectTrigger>
                  <SelectContent>
                    {genderOptions.map((g) => <SelectItem key={g} value={g}>{g}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={editingStudent.status} onValueChange={(v) => updateField('status', v)}>
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
            <AlertDialogTitle>Hapus Siswa?</AlertDialogTitle>
            <AlertDialogDescription>
              Data siswa akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.
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
