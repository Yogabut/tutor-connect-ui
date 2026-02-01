import { useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Mock documentation data
const documentations = [
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
  {
    id: '4',
    title: 'Olimpiade Sains',
    description: 'Pelatihan intensif untuk olimpiade sains nasional',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
    date: '2024-02-10',
  },
  {
    id: '5',
    title: 'Les Fisika Praktikum',
    description: 'Eksperimen fisika dengan peralatan lab modern',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
    date: '2024-02-15',
  },
  {
    id: '6',
    title: 'Study Group Session',
    description: 'Belajar kelompok untuk meningkatkan kolaborasi',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
    date: '2024-02-20',
  },
];

export function DocumentationPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              Dokumentasi
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Galeri Kegiatan Kami
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Lihat berbagai kegiatan pembelajaran dan acara yang telah kami selenggarakan bersama siswa-siswa kami.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentations.map((doc) => (
              <Card
                key={doc.id}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(doc.image)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{doc.title}</h3>
                    <p className="text-sm text-primary-foreground/80">{doc.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
