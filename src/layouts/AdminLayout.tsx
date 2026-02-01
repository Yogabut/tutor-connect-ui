import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard,
  FileImage,
  MessageSquare,
  User,
  LogOut,
  GraduationCap,
  Menu,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/documentation', label: 'Dokumentasi', icon: FileImage },
  { href: '/admin/feedback', label: 'Feedback', icon: MessageSquare },
  { href: '/admin/profile', label: 'Profil', icon: User },
];

function AdminSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const { logout, user } = useAuth();

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar" collapsible="icon">
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-hero">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-sidebar-foreground">Admin</span>
          </Link>
        )}
        <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent rounded-lg p-2">
          {collapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </SidebarTrigger>
      </div>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs uppercase tracking-wider mb-2">
            {!collapsed && 'Menu'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={link.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                          isActive
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                        )}
                      >
                        <link.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && <span className="font-medium">{link.label}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="mt-auto p-3 border-t border-sidebar-border">
        {!collapsed && user && (
          <div className="mb-3 px-3 py-2">
            <p className="text-sm font-medium text-sidebar-foreground truncate">{user.name}</p>
            <p className="text-xs text-sidebar-foreground/60 truncate">{user.email}</p>
          </div>
        )}
        <Button
          variant="ghost"
          onClick={logout}
          className={cn(
            "w-full justify-start text-sidebar-foreground/80 hover:text-destructive hover:bg-destructive/10",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-2">Keluar</span>}
        </Button>
      </div>
    </Sidebar>
  );
}

export function AdminLayout() {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted">
        <AdminSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
