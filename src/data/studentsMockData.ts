export interface Student {
  id: string;
  name: string;
  age: number;
  class: string;
  package: string;
  gender: 'Laki-laki' | 'Perempuan';
  status: 'active' | 'inactive';
}

export const studentsMockData: Student[] = [
  { id: '1', name: 'Ahmad Rizki', age: 15, class: 'SMP', package: 'Matematika IPA', gender: 'Laki-laki', status: 'active' },
  { id: '2', name: 'Siti Nurhaliza', age: 17, class: 'SMA/SMK', package: 'Fisika', gender: 'Perempuan', status: 'active' },
  { id: '3', name: 'Budi Santoso', age: 12, class: 'SD', package: 'Semua Mata Pelajaran', gender: 'Laki-laki', status: 'inactive' },
  { id: '4', name: 'Dewi Lestari', age: 6, class: 'TK', package: 'CALISTUNG', gender: 'Perempuan', status: 'active' },
  { id: '5', name: 'Fajar Nugroho', age: 16, class: 'SMA/SMK', package: 'Kimia', gender: 'Laki-laki', status: 'active' },
  { id: '6', name: 'Galuh Pratiwi', age: 14, class: 'SMP', package: 'Bahasa Inggris Basic', gender: 'Perempuan', status: 'active' },
  { id: '7', name: 'Hendra Wijaya', age: 11, class: 'SD', package: 'Persiapan Ujian Nasional', gender: 'Laki-laki', status: 'inactive' },
  { id: '8', name: 'Indah Permata', age: 16, class: 'SMA/SMK', package: 'Bahasa Jepang Intermediate', gender: 'Perempuan', status: 'active' },
  { id: '9', name: 'Joko Susilo', age: 13, class: 'SMP', package: 'Mata Pelajaran', gender: 'Laki-laki', status: 'active' },
  { id: '10', name: 'Kartika Sari', age: 5, class: 'TK', package: 'Bilingual 2 Bahasa', gender: 'Perempuan', status: 'inactive' },
  { id: '11', name: 'Lukman Hakim', age: 17, class: 'SMA/SMK', package: 'Matematika', gender: 'Laki-laki', status: 'active' },
  { id: '12', name: 'Maya Anggraini', age: 14, class: 'SMP', package: 'Ujian Nasional', gender: 'Perempuan', status: 'active' },
];

export const classOptions = ['TK', 'SD', 'SMP', 'SMA/SMK'];
export const packageOptions = [
  'CALISTUNG', 'Bilingual 2 Bahasa', 'Baca Tulis',
  'Persiapan Ujian Nasional', 'Matematika IPA', 'Semua Mata Pelajaran',
  'Mata Pelajaran', 'Ujian Nasional',
  'Matematika', 'Fisika', 'Kimia', 'Biologi', 'Bahasa Inggris',
  'Bahasa Jepang Basic', 'Bahasa Jepang Intermediate', 'Bahasa Jepang Advanced',
  'Bahasa Inggris Basic', 'Bahasa Inggris Intermediate', 'Bahasa Inggris Advanced',
  'Bahasa Mandarin Basic', 'Bahasa Mandarin Intermediate', 'Bahasa Mandarin Advanced',
  'Olimpiade SD',
];
export const genderOptions = ['Laki-laki', 'Perempuan'];
export const statusOptions = ['active', 'inactive'];
