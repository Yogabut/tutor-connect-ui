// API Service Abstraction Layer
// Ready to connect to Express REST API

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

class ApiService {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.token = localStorage.getItem('authToken');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return { data, success: true };
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async register(name: string, email: string, password: string) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  }

  async logout() {
    this.clearToken();
    return { success: true, data: null };
  }

  // Feedback endpoints
  async getFeedbacks() {
    return this.request('/feedbacks');
  }

  async submitFeedback(data: { name: string; message: string; rating: number }) {
    return this.request('/feedbacks', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async replyToFeedback(id: string, reply: string) {
    return this.request(`/feedbacks/${id}/reply`, {
      method: 'POST',
      body: JSON.stringify({ reply }),
    });
  }

  // Documentation endpoints
  async getDocumentations() {
    return this.request('/documentations');
  }

  async createDocumentation(data: { title: string; description: string; image?: string }) {
    return this.request('/documentations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateDocumentation(id: string, data: { title: string; description: string; image?: string }) {
    return this.request(`/documentations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteDocumentation(id: string) {
    return this.request(`/documentations/${id}`, {
      method: 'DELETE',
    });
  }

  // Profile endpoints
  async getProfile() {
    return this.request('/profile');
  }

  async updateProfile(data: { name: string; email: string }) {
    return this.request('/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async changePassword(data: { currentPassword: string; newPassword: string }) {
    return this.request('/profile/password', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiService(API_BASE_URL);
export default api;
