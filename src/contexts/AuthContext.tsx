import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for demo purposes
const MOCK_ADMIN: User = {
  id: '1',
  name: 'Admin User',
  email: 'admin@lesprivat.com',
  role: 'admin',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock login - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'admin@lesprivat.com' && password === 'admin123') {
        setUser(MOCK_ADMIN);
        localStorage.setItem('user', JSON.stringify(MOCK_ADMIN));
        localStorage.setItem('authToken', 'mock-jwt-token');
      } else {
        throw new Error('Email atau password salah');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock register - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        role: 'user',
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('authToken', 'mock-jwt-token');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
