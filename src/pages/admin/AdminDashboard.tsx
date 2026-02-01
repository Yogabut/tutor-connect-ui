import { Users, FileImage, MessageSquare, TrendingUp, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const stats = [
  { title: 'Total Siswa', value: '524', icon: Users, change: '+12%', color: 'text-primary' },
  { title: 'Dokumentasi', value: '45', icon: FileImage, change: '+3', color: 'text-success' },
  { title: 'Feedback', value: '128', icon: MessageSquare, change: '+8', color: 'text-warning' },
  { title: 'Rating Rata-rata', value: '4.8', icon: Star, change: '+0.2', color: 'text-accent' },
];

const recentActivities = [
  { message: 'Feedback baru dari Siti Rahma', time: '2 menit lalu', type: 'feedback' },
  { message: 'Dokumentasi "Workshop UTBK" ditambahkan', time: '1 jam lalu', type: 'doc' },
  { message: 'Siswa baru mendaftar: Ahmad Rizky', time: '3 jam lalu', type: 'user' },
  { message: 'Feedback dibalas untuk Dewi Lestari', time: '5 jam lalu', type: 'feedback' },
  { message: 'Dokumentasi "Les Matematika" diperbarui', time: '1 hari lalu', type: 'doc' },
];

export function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
          Selamat Datang, {user?.name}! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Berikut adalah ringkasan aktivitas terbaru di platform Anda.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                {stat.change} dari bulan lalu
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Aktivitas Terbaru
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === 'feedback'
                        ? 'bg-warning'
                        : activity.type === 'doc'
                        ? 'bg-primary'
                        : 'bg-success'
                    }`}
                  />
                  <span className="text-sm text-card-foreground">{activity.message}</span>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <FileImage className="h-10 w-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-card-foreground">Tambah Dokumentasi</h3>
            <p className="text-sm text-muted-foreground mt-1">Upload foto kegiatan terbaru</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageSquare className="h-10 w-10 text-warning mx-auto mb-3" />
            <h3 className="font-semibold text-card-foreground">Kelola Feedback</h3>
            <p className="text-sm text-muted-foreground mt-1">3 feedback menunggu balasan</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="h-10 w-10 text-success mx-auto mb-3" />
            <h3 className="font-semibold text-card-foreground">Lihat Siswa</h3>
            <p className="text-sm text-muted-foreground mt-1">Kelola data siswa terdaftar</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
