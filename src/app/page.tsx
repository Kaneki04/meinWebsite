
import Header from '@/components/ui/header/header';
import MySelf from '@/components/ui/myself/myself';
import Card from '@/components/ui/card/card';
import Services from '@/components/ui/my-services/my-services';
import Skills from '@/components/ui/skills/skills';
import Contact from '@/components/ui/contact-form/contact';

export default function Home() {
  
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center ">
      <Header title="Vicken" subtitle="ヴィッケン" />
      <MySelf />

      {/* ------------------------------------------------ */}

      <Header title="Thoughts" subtitle="考え" />
      <Card title="My Blogs" image="/images/a.jpeg" href="/blogs" />

      {/* ------------------------------------------------ */}

      <Header title="Apps" subtitle="アプリ" />
      <div className="flex justify-evenly w-full">
        <Card title="Vicksan" image="/images/vicksan.png" href="/apps/vicksan" />
        <Card title="Kanjizy" image="/images/kanjizy.png" href="/apps/kanjizy" />
      </div>

      {/* ------------------------------------------------ */}

      <Header title="Services" subtitle="奉仕" />
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <Skills />
        <Services />
        <Contact />
      </div>

    
    </div>
  );
}
