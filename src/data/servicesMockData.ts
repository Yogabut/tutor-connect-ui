// servicesMockData.ts
import {
  Calculator,
  FlaskConical,
  Languages,
  Atom,
  Leaf,
  BookOpen,
  Monitor,
  Users,
  Palette,
  Music,
  BookAIcon,
  BookCheckIcon,
  FileQuestion,
  EqualApproximatelyIcon,
  Lamp,
  LampCeiling,
  LampIcon,
  LucideLamp,
  LampWallUpIcon,
  Lightbulb,
  Book,
  LanguagesIcon,
} from 'lucide-react';

export const servicesByLevel = {
  tk: [
    {
      icon: BookAIcon,
      title: 'Paket CALISTUNG',
      description: 'Mengembangkan kemampuan membaca, menulis, dan berhitung dasar.',
      price: 'Rp 50.000',
      features: ['1 Jam/Ses', 'Free Konsultasi', 'Materi Calistung TK', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
    {
      icon: Languages,
      title: 'Paket Bilingual 2 Bahasa',
      description: 'Pengenalan bahasa Inggris dan Indonesia dengan metode interaktif dan menyenangkan.',
      price: 'Rp 65.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bilingual TK 2 Bahasa', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
    {
      icon: BookCheckIcon,
      title: 'Paket Baca Tulis',
      description: 'Membantu anak mengenal huruf, fonetik, dan keterampilan menulis dasar.',
      price: 'Rp 50.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Baca Tulis TK', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
  ],


  sd: [
    {
      icon: Lightbulb,
      title: 'Paket Persiapan Ujian Nasional',
      description: 'Latihan soal dan strategi menghadapi ujian nasional SD.',
      price: 'Rp 60.000',
      features: ['1 Jam/Sesi', 'Free Latihan Soal', 'Pembahasan Materi UN', 'Free Konsultasi ke Pengajar', '1 Tutor 1 Siswa'],
    },
    {
      icon: Atom,
      title: 'Paket Matematika IPA',
      description: 'Konsep dasar matematika dan IPA untuk meningkatkan pemahaman siswa.',
      price: 'Rp 55.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Modul Lengkap Matematika & IPA', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
    {
      icon: BookOpen,
      title: 'Paket Semua Mata Pelajaran',
      description: 'Pendampingan belajar untuk semua mata pelajaran SD.',
      price: 'Rp 60.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Modul Lengkap Semua Mapel', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
  ],


  smp: [
    {
      icon: Calculator,
      title: 'Paket Matematika IPA',
      description: 'Materi matematika dasar hingga sulit serta konsep IPA untuk SMP.',
      price: 'Rp 65.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Pembahasan materi sesuai yang didapatkan di Sekolah', 'Tutor Berpengalaman', 'Pembahasan latihan soal', '1 Tutor 1 Siswa'],
    },
    {
      icon: BookOpen,
      title: 'Paket Mata Pelajaran',
      description: 'Menawarkan bimbingan untuk mata pelajaran yang ada di tingkat SMP.',
      price: 'Rp 60.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Membahas materi mengenai Bahasa Indonesia, Agama, Bahasa Bali, PPKN, IPS, Informatika', 'Tutor Berpengalaman', 'Pembahasan latihan soal', '1 Tutor 1 Siswa'],
      popular: true,
    },
    {
      icon: Leaf,
      title: 'Paket Ujian Nasional / Ujian Sekolah',
      description: 'Persiapan intensif menghadapi Ujian Nasional dan Ujian Sekolah SMP.',
      price: 'Rp 65.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Pembahasan materi sesuai yang didapatkan di Sekolah', 'Tutor Berpengalaman', 'Pembahasan latihan soal', '1 Tutor 1 Siswa'],
    }
  ],

  
  sma: [
    {
      icon: Calculator,
      title: 'Matematika',
      description: 'Kalkulus, trigonometri, dan persiapan UTBK SNBT.',
      price: 'Rp 175.000',
      features: ['2 Jam/Sesi', 'Online & Offline', 'Soal UTBK', 'Try Out Berkala'],
    },
    {
      icon: FlaskConical,
      title: 'Fisika',
      description: 'Mekanika lanjut, termodinamika, dan fisika modern.',
      price: 'Rp 200.000',
      features: ['2 Jam/Sesi', 'Online & Offline', 'Praktikum Virtual', 'Persiapan Olimpiade'],
      popular: true,
    },
    {
      icon: Atom,
      title: 'Kimia',
      description: 'Kimia organik, anorganik, dan fisika kimia tingkat lanjut.',
      price: 'Rp 200.000',
      features: ['2 Jam/Sesi', 'Online & Offline', 'Lab Virtual', 'Soal UTBK'],
    },
    {
      icon: Leaf,
      title: 'Biologi',
      description: 'Genetika, evolusi, dan biologi molekuler.',
      price: 'Rp 175.000',
      features: ['2 Jam/Sesi', 'Online & Offline', 'Visual Learning', 'Soal UTBK'],
    },
    {
      icon: Languages,
      title: 'Bahasa Inggris',
      description: 'Advanced grammar, essay writing, dan persiapan TOEFL/IELTS.',
      price: 'Rp 175.000',
      features: ['2 Jam/Sesi', 'Online & Offline', 'TOEFL/IELTS Prep', 'Academic Writing'],
    },
  ],
  
  
  olimpiade: [
    {
      icon: Atom,
      title: 'Olimpiade SD',
      description: 'Persiapan olimpiade sains tingkat SD yang dilakukan secara interaktif dan menyenangkan namun tetap fokus pada materi.',
      price: 'Hubungi kami untuk harga terbaik.',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Olimpiade SD', 'Pembahasan Soal Olimpiade', 'Tutor Berpengalaman', '1 Tutor 1 Siswa', 'Orang tua dapat menyediakan soal tambahan untuk dibahas'],
    },
  ],


  bahasajepang: [
    {
      icon: LanguagesIcon,
      title: 'Bahasa Jepang Basic',
      description: 'Memulai dari pengenalan huruf Hiragana, Katakana, dan kosakata dasar.',
      price: 'Rp 65.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Jepang Basic', 'Praktek bahasa Jepang langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
    {
      icon: LanguagesIcon,
      title: 'Bahasa Jepang Intermediate',
      description: 'Memperdalam tata bahasa, kosakata, dan percakapan tingkat menengah.',
      price: 'Rp 75.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Jepang Intermediate', 'Praktek bahasa Jepang langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
      popular: true,
    },
    {
      icon: LanguagesIcon,
      title: 'Bahasa Jepang Advanced',
      description: 'Lebih fokus pada persiapan JLPT N3-N1 dan kemampuan komunikasi lanjutan.',
      price: 'Rp 85.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Jepang Advanced', 'Praktek bahasa Jepang langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    }
  ],

  englishbasic: [
    {
      icon: LanguagesIcon,
      title: 'Bahasa Inggris Basic',
      description: 'Memulai dari pengenalan kosakata dasar, tata bahasa, dan percakapan sehari-hari.',
      price: 'Rp 60.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Inggris Basic', 'Praktek bahasa Inggris langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
    {
      icon: LanguagesIcon,
      title: 'Bahasa Inggris Intermediate',
      description: 'Memperdalam tata bahasa, kosakata, dan percakapan tingkat menengah.',
      price: 'Rp 70.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Inggris Intermediate', 'Praktek bahasa Inggris langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
      popular: true,
    },
    {
      icon: LanguagesIcon,
      title: 'Bahasa Inggris Advanced',
      description: 'Lebih fokus pada persiapan TOEFL/IELTS dan kemampuan komunikasi lanjutan.',
      price: 'Rp 90.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Inggris Advanced', 'Praktek bahasa Inggris langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    }
  ],
  
  
  mandarin: [
    {
      icon: LanguagesIcon,
      title: 'Bahasa Mandarin Basic',
      description: 'Memulai dari pengenalan huruf Pinyin, karakter dasar, dan kosakata sehari-hari.',
      price: 'Rp 65.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Mandarin Basic', 'Praktek bahasa Mandarin langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    },
    {
      icon: LanguagesIcon,
      title: 'Bahasa Mandarin Intermediate',
      description: 'Memperdalam tata bahasa, kosakata, dan percakapan tingkat menengah.',
      price: 'Rp 75.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Mandarin Intermediate', 'Praktek bahasa Mandarin langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
      popular: true,
    },
    {
      icon: LanguagesIcon,
      title: 'Bahasa Mandarin Advanced',
      description: 'Lebih fokus pada persiapan HSK dan kemampuan komunikasi lanjutan.',
      price: 'Rp 85.000',
      features: ['1 Jam/Sesi', 'Free Konsultasi', 'Materi Bahasa Mandarin Advanced', 'Praktek bahasa Mandarin langsung', 'Tutor Berpengalaman', '1 Tutor 1 Siswa'],
    }
  ],
};

export const levelLabels = {
  tk: 'TK',
  sd: 'SD',
  smp: 'SMP',
  sma: 'SMA/SMK',
  olimpiade: 'Olimpiade',
  bahasajepang: 'Bahasa Jepang',
  englishbasic: 'Bahasa Inggris',
  mandarin: 'Bahasa Mandarin',
};

export const modes = [
  {
    icon: Monitor,
    title: 'Les Online',
    description: 'Belajar dari mana saja dengan platform video call interaktif.',
    features: ['Video Call HD', 'Whiteboard Digital', 'Rekaman Sesi', 'Chat 24/7'],
  },
  {
    icon: Users,
    title: 'Les Offline',
    description: 'Pembelajaran tatap muka di rumah atau lokasi pilihan Anda.',
    features: ['Tutor ke Rumah', 'Jadwal Fleksibel', 'Praktikum Langsung', 'Area Jabodetabek'],
  },
];

// Helper untuk get all services (jika masih diperlukan)
export const getAllServices = () => {
  return Object.entries(servicesByLevel).flatMap(([level, services]) =>
    services.map(service => ({ ...service, level }))
  );
};