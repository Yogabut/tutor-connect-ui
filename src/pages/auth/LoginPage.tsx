import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      toast.success('Login berhasil!');
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.message || 'Login gagal');
    }
  };

  return (
    <div className="space-y-8">
      <div className="lg:hidden flex items-center gap-2 justify-center mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-hero">
          <GraduationCap className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">LesPrivat</span>
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          Selamat Datang Kembali
        </h1>
        <p className="text-muted-foreground">
          Masuk ke akun Anda untuk melanjutkan
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Masukkan password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-primary hover:underline">
              Lupa password?
            </Link>
          </div>

          <Button type="submit" size="lg" variant="hero" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Memproses...
              </span>
            ) : (
              'Masuk'
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center">
        <p className="text-muted-foreground">
          Belum punya akun?{' '}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>

      <div className="bg-muted p-4 rounded-lg text-sm">
        <p className="font-medium text-foreground mb-2">Demo Admin Login:</p>
        <p className="text-muted-foreground">Email: admin@lesprivat.com</p>
        <p className="text-muted-foreground">Password: admin123</p>
      </div>
    </div>
  );
}
