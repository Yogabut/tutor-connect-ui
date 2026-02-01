import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import { PublicLayout } from "@/layouts/PublicLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { AdminLayout } from "@/layouts/AdminLayout";

// Public Pages
import { HomePage } from "@/pages/public/HomePage";
import { AboutPage } from "@/pages/public/AboutPage";
import { ServicesPage } from "@/pages/public/ServicesPage";
import { PortfolioPage } from "@/pages/public/PortfolioPage";
import { DocumentationPage } from "@/pages/public/DocumentationPage";
import { FeedbackPage } from "@/pages/public/FeedbackPage";

// Auth Pages
import { LoginPage } from "@/pages/auth/LoginPage";
import { RegisterPage } from "@/pages/auth/RegisterPage";

// Admin Pages
import { AdminDashboard } from "@/pages/admin/AdminDashboard";
import { AdminDocumentation } from "@/pages/admin/AdminDocumentation";
import { AdminFeedback } from "@/pages/admin/AdminFeedback";
import { AdminProfile } from "@/pages/admin/AdminProfile";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
            </Route>

            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="documentation" element={<AdminDocumentation />} />
              <Route path="feedback" element={<AdminFeedback />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
