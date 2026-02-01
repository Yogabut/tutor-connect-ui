import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AuthLayout() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-hero p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <Link to="/" className="flex items-center gap-3 relative z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">LesPrivat</span>
        </Link>
        
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Raih Prestasi<br />Terbaik Bersama<br />Kami
          </h1>
          <p className="text-white/80 text-lg max-w-md">
            Bergabunglah dengan ribuan siswa yang telah meraih sukses akademik melalui program les privat berkualitas kami.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-white/70 text-sm">Siswa Aktif</p>
          </div>
          <div className="h-12 w-px bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-white/70 text-sm">Tutor Berpengalaman</p>
          </div>
          <div className="h-12 w-px bg-white/20" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white">95%</p>
            <p className="text-white/70 text-sm">Tingkat Kepuasan</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-background">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
