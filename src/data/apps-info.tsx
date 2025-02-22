// apps-info.tsx
export interface AppInfo {
  name: string;
  date: string;
  href: string;
  imageUrl: string;
  intro: string;
  conclusion: string;
  images: string[];
}

export const dictionary: AppInfo[] = [
  {
    name: "Vicksan",
    date: "2024-11-28",
    href: "https://play.google.com/store/apps/details?id=com.vicksan.vicken&hl=en-GB",
    imageUrl: "/images/vicksan.png",
    intro: "VickSan is a dynamic language learning app designed to help you quickly and effectively master useful vocabulary through the power of flashcards. Whether you're a beginner or looking to expand your language skills, VickSan offers an engaging, interactive experience tailored to your learning pace. With its intuitive interface and expertly curated vocabulary sets, the app makes it easy to practice and retain essential words for everyday conversation. Say goodbye to rote memorization and hello to a smarter, more fun way of learning a new language with VickSan!",
    conclusion: "VickSan was built using Flutter, a powerful and versatile framework for cross-platform app development. Flutter's single codebase allowed me to design and implement a seamless experience across both Android and iOS devices, ensuring a wide reach for users. The app's dynamic flashcard functionality was created using Flutter's stateful widgets to handle real-time updates and user interactions. For the backend, I integrated a lightweight database (such as SQLite or Firebase) to store curated vocabulary sets and user progress data. Flutter's rich set of pre-built widgets made it easier to craft an intuitive, visually appealing interface, while the framework's hot-reload feature streamlined the development process by allowing rapid testing of new features and design tweaks. This combination of Flutter's performance and flexibility enabled me to build a responsive, user-friendly app that makes language learning both effective and enjoyable.",
    images: [
      "/images/vicksan1.png",
      "/images/vicksan2.png",
      "/images/vicksan3.png",
    ],
  },
  {
    name: "Kanjizy",
    date: "2021-04-04",
    href: "https://play.google.com/store/apps/details?id=com.vickenpool.japanese&hl=en-GB",
    imageUrl: "/images/kanjizy.png",
    intro: "If you're captivated by the rich history and beauty of the Japanese language and culture, then **Kanjizy** is the perfect app for you. This innovative educational tool is designed to guide you through an immersive journey into the heart of the Japanese language. With Kanjizy, you'll master not only **Hiragana** and **Katakana**, but also a diverse array of **kanji characters**, all while building the foundation for fluency in Japanese. Whether you're just starting or looking to deepen your knowledge, Kanjizy offers a comprehensive and engaging experience to accelerate your learning. Start your language adventure today and unlock the fascinating world of Japanese with Kanjizy!",
    conclusion: "With Kanjizy, I aimed to fill this gap by designing an app that not only makes learning these essential components of Japanese easier but also more enjoyable. I wanted to create a tool that supports learners at all levels, from beginners to advanced students, offering a seamless learning experience with features that make memorization and practice both effective and fun.Ultimately, my goal was to help others unlock the fascinating world of the Japanese language, much like how I felt when I began my own language learning journey. By developing Kanjizy, I hope to inspire and empower learners to gain fluency in Japanese and fully embrace its rich cultural and linguistic heritage.",
    images: [
      "/images/kanjizy1.png",
      "/images/kanjizy2.png",
      "/images/kanjizy3.png",
    ],
  },
];
