import { useState } from 'react';
import { Star, MessageCircle, Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  date: string;
  status: 'pending' | 'replied';
  reply?: string;
}

const initialFeedbacks: Feedback[] = [
  {
    id: '1',
    name: 'Siti Rahma',
    email: 'siti@email.com',
    message: 'Nilai matematika anak saya naik drastis dari 65 menjadi 90 hanya dalam 2 bulan. Tutor sangat sabar dan metode pengajarannya mudah dipahami.',
    rating: 5,
    date: '2024-02-01',
    status: 'replied',
    reply: 'Terima kasih atas feedback positifnya, Bu Siti! Kami senang dapat membantu perkembangan akademik putra Ibu.',
  },
  {
    id: '2',
    name: 'Ahmad Rizky',
    email: 'ahmad@email.com',
    message: 'Berkat bimbingan dari LesPrivat, saya berhasil lolos SNBP di jurusan Teknik Informatika ITB. Terima kasih banyak!',
    rating: 5,
    date: '2024-02-03',
    status: 'pending',
  },
  {
    id: '3',
    name: 'Dewi Lestari',
    email: 'dewi@email.com',
    message: 'Anak saya jadi lebih percaya diri dalam belajar bahasa Inggris. Sekarang sudah bisa percakapan dasar dengan lancar.',
    rating: 4,
    date: '2024-02-05',
    status: 'pending',
  },
  {
    id: '4',
    name: 'Budi Santoso',
    email: 'budi@email.com',
    message: 'Pelayanan sangat baik dan harga terjangkau. Hanya saja jadwal terkadang kurang fleksibel di akhir pekan.',
    rating: 4,
    date: '2024-02-07',
    status: 'pending',
  },
];

export function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(initialFeedbacks);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pendingCount = feedbacks.filter((f) => f.status === 'pending').length;

  const handleReply = async () => {
    if (!selectedFeedback || !replyText.trim()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFeedbacks((prev) =>
        prev.map((f) =>
          f.id === selectedFeedback.id
            ? { ...f, status: 'replied' as const, reply: replyText }
            : f
        )
      );

      toast.success('Balasan berhasil dikirim');
      setSelectedFeedback(null);
      setReplyText('');
    } catch (error) {
      toast.error('Gagal mengirim balasan');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Manajemen Feedback
          </h1>
          <p className="text-muted-foreground mt-1">
            Kelola dan balas feedback dari siswa dan orang tua
          </p>
        </div>
        {pendingCount > 0 && (
          <Badge variant="secondary" className="bg-warning/10 text-warning">
            {pendingCount} menunggu balasan
          </Badge>
        )}
      </div>

      <div className="grid gap-4">
        {feedbacks.map((feedback) => (
          <Card
            key={feedback.id}
            className={cn(
              'transition-all',
              feedback.status === 'pending' && 'border-warning/50'
            )}
          >
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {feedback.name.split(' ').map((n) => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">
                          {feedback.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feedback.email}</p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={cn(
                        feedback.status === 'replied'
                          ? 'bg-success/10 text-success'
                          : 'bg-warning/10 text-warning'
                      )}
                    >
                      {feedback.status === 'replied' ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          Dibalas
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          Menunggu
                        </>
                      )}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-4 h-4',
                          i < feedback.rating
                            ? 'text-warning fill-warning'
                            : 'text-muted'
                        )}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {new Date(feedback.date).toLocaleDateString('id-ID')}
                    </span>
                  </div>

                  <p className="text-card-foreground">{feedback.message}</p>

                  {feedback.reply && (
                    <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm font-medium text-primary mb-1">Balasan Admin:</p>
                      <p className="text-sm text-muted-foreground">{feedback.reply}</p>
                    </div>
                  )}
                </div>

                <div className="flex lg:flex-col gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedFeedback(feedback);
                      setReplyText(feedback.reply || '');
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {feedback.status === 'replied' ? 'Edit Balasan' : 'Balas'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reply Modal */}
      <Dialog
        open={!!selectedFeedback}
        onOpenChange={() => setSelectedFeedback(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Balas Feedback dari {selectedFeedback?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm text-muted-foreground mb-2">Pesan:</p>
              <p className="text-foreground">{selectedFeedback?.message}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Balasan Anda
              </label>
              <Textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Tulis balasan Anda..."
                className="min-h-[120px]"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSelectedFeedback(null)}
            >
              Batal
            </Button>
            <Button
              variant="hero"
              onClick={handleReply}
              disabled={!replyText.trim() || isSubmitting}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Balasan'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
