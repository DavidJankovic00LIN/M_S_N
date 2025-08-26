import Hero from '@/components/Hero';
import About from '@/components/About';
import Certification from '@/components/Certification';
import Products from '@/components/Products';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Parallax from '@/components/Paralax';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Certification />
      <Products />
      <Parallax />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
