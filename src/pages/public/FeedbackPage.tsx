import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Star, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
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

const contactInfo = [
  {
    icon: Phone,
    title: 'Telepon',
    value: '+62 812-3456-7890',
    href: 'tel:+6281234567890',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@lesprivat.com',
    href: 'mailto:info@lesprivat.com',
  },
  {
    icon: MapPin,
    title: 'Alamat',
    value: 'Jl. Pendidikan No. 123, Jakarta Selatan',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    value: 'Senin - Sabtu, 08:00 - 21:00',
    href: '#',
  },
];

export function FeedbackPage() {
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
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
              Hubungi Kami
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Kami Siap Membantu Anda
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Punya pertanyaan atau ingin memberikan feedback? Jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
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
    </div>
  );
}
