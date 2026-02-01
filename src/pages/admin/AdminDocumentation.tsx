import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plus, Edit, Trash2, X, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

const docSchema = z.object({
  title: z.string().min(1, 'Judul wajib diisi'),
  description: z.string().min(1, 'Deskripsi wajib diisi'),
  image: z.string().optional(),
});

type DocFormData = z.infer<typeof docSchema>;

interface Documentation {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

// Mock data
const initialDocs: Documentation[] = [
  {
    id: '1',
    title: 'Sesi Les Matematika',
    description: 'Pembelajaran matematika interaktif dengan whiteboard digital',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
    date: '2024-01-15',
  },
  {
    id: '2',
    title: 'Workshop Persiapan UTBK',
    description: 'Workshop intensif untuk persiapan UTBK SNBT',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
    date: '2024-01-20',
  },
  {
    id: '3',
    title: 'Les Bahasa Inggris',
    description: 'Praktik conversation dengan tutor native speaker',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600',
    date: '2024-02-05',
  },
];

export function AdminDocumentation() {
  const [docs, setDocs] = useState<Documentation[]>(initialDocs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoc, setEditingDoc] = useState<Documentation | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DocFormData>({
    resolver: zodResolver(docSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
    },
  });

  const openModal = (doc?: Documentation) => {
    if (doc) {
      setEditingDoc(doc);
      form.reset({
        title: doc.title,
        description: doc.description,
        image: doc.image,
      });
    } else {
      setEditingDoc(null);
      form.reset({ title: '', description: '', image: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingDoc(null);
    form.reset();
  };

  const onSubmit = async (data: DocFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (editingDoc) {
        setDocs((prev) =>
          prev.map((doc) =>
            doc.id === editingDoc.id
              ? { ...doc, title: data.title, description: data.description, image: data.image || doc.image }
              : doc
          )
        );
        toast.success('Dokumentasi berhasil diperbarui');
      } else {
        const newDoc: Documentation = {
          id: Date.now().toString(),
          title: data.title,
          description: data.description,
          image: data.image || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
          date: new Date().toISOString().split('T')[0],
        };
        setDocs((prev) => [newDoc, ...prev]);
        toast.success('Dokumentasi berhasil ditambahkan');
      }
      closeModal();
    } catch (error) {
      toast.error('Gagal menyimpan dokumentasi');
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteDoc = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus dokumentasi ini?')) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setDocs((prev) => prev.filter((doc) => doc.id !== id));
      toast.success('Dokumentasi berhasil dihapus');
    } catch (error) {
      toast.error('Gagal menghapus dokumentasi');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Manajemen Dokumentasi
          </h1>
          <p className="text-muted-foreground mt-1">
            Kelola galeri foto kegiatan les privat
          </p>
        </div>
        <Button variant="hero" onClick={() => openModal()}>
          <Plus className="w-4 h-4 mr-2" />
          Tambah Dokumentasi
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Gambar</TableHead>
                <TableHead>Judul</TableHead>
                <TableHead className="hidden md:table-cell">Deskripsi</TableHead>
                <TableHead className="hidden sm:table-cell">Tanggal</TableHead>
                <TableHead className="w-[100px]">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {docs.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-16 h-12 object-cover rounded-lg"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {doc.description.length > 50
                      ? `${doc.description.slice(0, 50)}...`
                      : doc.description}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    {new Date(doc.date).toLocaleDateString('id-ID')}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => openModal(doc)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteDoc(doc.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingDoc ? 'Edit Dokumentasi' : 'Tambah Dokumentasi'}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul</FormLabel>
                    <FormControl>
                      <Input placeholder="Judul dokumentasi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Deskripsi singkat tentang kegiatan"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Gambar (Opsional)</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input placeholder="https://..." {...field} />
                        <Button type="button" variant="outline" size="icon">
                          <Upload className="w-4 h-4" />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeModal}>
                  Batal
                </Button>
                <Button type="submit" variant="hero" disabled={isSubmitting}>
                  {isSubmitting ? 'Menyimpan...' : 'Simpan'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
