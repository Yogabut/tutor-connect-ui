import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const feedbackSchema = z.object({
  name: z.string().trim().min(1, 'Nama wajib diisi').max(100, 'Nama maksimal 100 karakter'),
  email: z.string().trim().email('Email tidak valid').max(255, 'Email maksimal 255 karakter'),
  message: z.string().trim().min(10, 'Pesan minimal 10 karakter').max(1000, 'Pesan maksimal 1000 karakter'),
  rating: z.number().min(1, 'Rating wajib dipilih').max(5),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export function FeedbackFormSection() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      rating: 0,
    },
  });

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success('Terima kasih! Feedback Anda telah dikirim.');
      form.reset();
      setSelectedRating(0);
    } catch (error) {
      toast.error('Gagal mengirim feedback. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              badge="Feedback"
              title="Berikan Masukan Anda"
              subtitle="Masukan Anda sangat berarti untuk meningkatkan kualitas layanan kami."
              centered={false}
            />

            <div className="mt-8 space-y-4 text-muted-foreground">
              <p>
                Kami menghargai setiap feedback yang Anda berikan. Apakah Anda puas dengan layanan kami atau memiliki saran untuk perbaikan, kami ingin mendengarnya.
              </p>
              <p>
                Tim kami akan merespons feedback Anda dalam waktu 1x24 jam kerja.
              </p>
            </div>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama Anda" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="nama@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rating</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => {
                                  setSelectedRating(star);
                                  field.onChange(star);
                                }}
                                className="p-1 transition-transform hover:scale-110"
                              >
                                <Star
                                  className={cn(
                                    'w-8 h-8 transition-colors',
                                    star <= selectedRating
                                      ? 'text-warning fill-warning'
                                      : 'text-muted hover:text-warning'
                                  )}
                                />
                              </button>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pesan</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tulis pesan atau feedback Anda..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    variant="hero"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Mengirim...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Kirim Feedback
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}