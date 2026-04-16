export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  rating: number;
  year: number;
  pages: number;
  description: string;
  cover: string;
  tags: string[];
  recommended?: number[];
}

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    genre: "Классика",
    price: 890,
    rating: 4.9,
    year: 1967,
    pages: 480,
    description: "Роман о добре и зле, любви и предательстве, художнике и власти. Действие разворачивается в двух временных пластах.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["мистика", "сатира", "философия"],
    recommended: [2, 4],
  },
  {
    id: 2,
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    genre: "Классика",
    price: 750,
    rating: 4.8,
    year: 1866,
    pages: 608,
    description: "Психологический роман о студенте, совершившем убийство, и его внутренней борьбе с совестью.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["психология", "драма", "философия"],
    recommended: [1, 5],
  },
  {
    id: 3,
    title: "Дюна",
    author: "Фрэнк Герберт",
    genre: "Фантастика",
    price: 1200,
    rating: 4.9,
    year: 1965,
    pages: 688,
    description: "Эпическая сага о пустынной планете Арракис, пряности и судьбе человечества.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["sci-fi", "политика", "экология"],
    recommended: [6, 7],
  },
  {
    id: 4,
    title: "Сто лет одиночества",
    author: "Габриэль Гарсиа Маркес",
    genre: "Магический реализм",
    price: 980,
    rating: 4.7,
    year: 1967,
    pages: 432,
    description: "История семьи Буэндиа на протяжении семи поколений в вымышленном городе Макондо.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["магия", "семья", "латинская проза"],
    recommended: [1, 2],
  },
  {
    id: 5,
    title: "Идиот",
    author: "Фёдор Достоевский",
    genre: "Классика",
    price: 720,
    rating: 4.6,
    year: 1869,
    pages: 640,
    description: "История князя Мышкина — человека с чистой душой в жестоком обществе.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["психология", "драма", "общество"],
    recommended: [2, 4],
  },
  {
    id: 6,
    title: "1984",
    author: "Джордж Оруэлл",
    genre: "Антиутопия",
    price: 860,
    rating: 4.8,
    year: 1949,
    pages: 352,
    description: "Роман о тоталитарном обществе, где Большой Брат следит за каждым.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["политика", "dystopia", "власть"],
    recommended: [3, 7],
  },
  {
    id: 7,
    title: "Автостопом по галактике",
    author: "Дуглас Адамс",
    genre: "Фантастика",
    price: 790,
    rating: 4.7,
    year: 1979,
    pages: 224,
    description: "Комедийный sci-fi о приключениях Артура Дента после уничтожения Земли.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["юмор", "sci-fi", "приключения"],
    recommended: [3, 6],
  },
  {
    id: 8,
    title: "Война и мир",
    author: "Лев Толстой",
    genre: "Классика",
    price: 1100,
    rating: 4.8,
    year: 1869,
    pages: 1274,
    description: "Великий роман-эпопея об эпохе Наполеоновских войн и судьбах русского общества.",
    cover: "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/fcf9491b-f570-4bf0-b8a5-9b1150a95e9a.jpg",
    tags: ["история", "война", "философия"],
    recommended: [1, 5],
  },
];

export const GENRES = ["Все", "Классика", "Фантастика", "Антиутопия", "Магический реализм"];

export const PERSONALIZED_PICKS = {
  "Любители классики": [1, 2, 5, 8],
  "Поклонники фантастики": [3, 6, 7],
  "Философы и мыслители": [2, 4, 6],
};
