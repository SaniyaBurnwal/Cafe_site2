import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { MenuSection } from '@/components/sections/Menu';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';
import { FloatingButtons } from '@/components/ui/FloatingButtons';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Page Content */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Contact />
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
