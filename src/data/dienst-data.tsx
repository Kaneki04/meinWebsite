export interface Dienst {
  name: string;
  imageUrl: string;
  info: string;
  skills: string[];
}

export const dictionary: Dienst[] = [
  {
    name: "Flutter",
    imageUrl: "/images/flutter.png",
    info: "Flutter is my framework of choice for developing high-performance, cross-platform mobile applications. With its single codebase, I can create visually stunning and highly responsive apps for both iOS and Android, significantly reducing development time and costs. Flutter's powerful features, such as its rich set of pre-designed widgets and seamless integration with native code, empower me to build custom, performant apps that deliver an exceptional user experience. Its fast development cycle with hot reload allows me to iterate quickly, ensuring that I can deliver your project with speed and precision. Whether it's for a startup or a large-scale enterprise app, Flutter provides the tools and flexibility I need to bring your vision to life.",
    skills: [
      "Dart Language Proficiency",
      "API Implementation",
      "Responsiveness",
      "Beautiful Designs",
      "Logistics and State Management",
      "Asynchronous Programming",
      "UI/UX Design Principles",
      "Testing and Debugging"
    ]
  },
  {
    name: "Web Development",
    imageUrl: "/images/react.png",
    info: "For web development, I rely on a combination of modern technologies that allow me to create dynamic, interactive, and highly responsive websites. React empowers me to build fast and scalable user interfaces with its component-based architecture, making it ideal for both small and large applications. Leveraging JavaScript ensures that the user experience is seamless, with rich interactivity and smooth functionality. HTML and CSS are fundamental in creating well-structured, accessible, and visually appealing pages, ensuring that the website looks great and functions perfectly across all devices. On the backend, Node.js provides a powerful environment for building scalable, high-performance server-side applications, enabling real-time data processing and efficient handling of requests. This combination of technologies allows me to deliver a seamless full-stack solution, where both front-end and back-end components work together to create fast, reliable, and user-friendly web applications.",
    skills: [
      "API Implementation",
      "JavaScript/React/Node.js",
      "Responsiveness",
      "Beautiful Designs",
      "Logistics (State Management & Routing)",
      "Version Control (Git)",
      "CSS Frameworks (Bootstrap, Tailwind)",
      "Frontend Frameworks (React, Vue, Angular)"
    ]
  }
];
