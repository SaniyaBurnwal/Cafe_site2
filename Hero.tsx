import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '@/config/site';
import { MessageCircle, Utensils } from 'lucide-react';
import logoImg from '@assets/image_1784195549392.png';

import slide1 from '@assets/489823663_3099534823558195_3389099971366225854_n_1784198757650.jpg';
import slide2 from '@assets/485783436_505775569266671_5601143029282379324_n_1784198757652.jpg';
import slide3 from '@assets/unnamed_(12)_1784198240334.webp';
import slide4 from '@assets/cafe9_1784197561371.jpg';
import slide5 from '@assets/unnamed_(14)_1784198240331.webp';
import slide6 from '@assets/unnamed_(15)_1784198240330.webp';

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        setPrev(c);
        setFading(true);
        setTimeout(() => {
          setPrev(null);
          setFading(false);
        }, 1200);
        return next;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setPrev(current);
    setFading(true);
    setTimeout(() => { setPrev(null); setFading(false); }, 1200);
    setCurrent(i);
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">

      {/* ── Slideshow — one photo at a time, pure CSS crossfade ── */}
      <div className="absolute inset-0 z-0">
        {/* Outgoing photo fades OUT */}
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={slides[prev]}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: fading ? 0 : 1,
              transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
              zIndex: 1,
            }}
          />
        )}
        {/* Incoming photo fades IN */}
        <img
          key={`curr-${current}`}
          src={slides[current]}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 1,
            zIndex: 0,
          }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[2]" style={{ background: 'rgba(8,3,1,0.60)' }} />

      {/* Warm amber radial tint */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(120,55,10,0.28) 0%, transparent 75%)',
        }}
      />

      {/* Logo watermark */}
      <div className="absolute inset-0 z-[4] flex items-center justify-center pointer-events-none select-none">
        <img
          src={logoImg}
          aria-hidden="true"
          className="w-full opacity-[0.05]"
          style={{ mixBlendMode: 'luminosity', filter: 'grayscale(1) contrast(1.4)' }}
        />
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-500 ${
              i === current ? 'w-7 h-2.5 bg-amber-400' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-44 z-[5] bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-amber-400/10 text-amber-200/80 border border-amber-400/20 text-xs font-medium tracking-[0.22em] uppercase mb-8 backdrop-blur-sm">
            Welcome to Kolkata's Coziest Corner
          </span>
        </motion.div>

        {/* Word-by-word animated heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white/95 max-w-4xl leading-[1.1] drop-shadow-xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Where Every Sip Feels Like{' '}
            <span className="italic" style={{ color: '#d4933a' }}>Home</span>
          </motion.h1>
        </div>

        <motion.p
          className="text-base md:text-lg text-white/60 max-w-xl mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          Freshly brewed coffee, delicious food, cozy ambience, and unforgettable moments in the heart of Tagore Park, Kasba.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={scrollToMenu}
            className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-medium text-base transition-all transform hover:-translate-y-1 shadow-lg active:scale-95"
            style={{ background: 'linear-gradient(135deg,#b8621a 0%,#d4833a 100%)' }}
          >
            <Utensils size={18} />
            Explore Menu
          </button>
          <a
            href={getWhatsAppLink("Hi! I'd like to book a slot at Cup Sip Cafe.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 text-white/90 border border-white/20 px-8 py-4 rounded-full font-medium text-base transition-all transform hover:-translate-y-1 backdrop-blur-sm active:scale-95"
          >
            <MessageCircle size={18} className="text-green-400/80" />
            Book Your Slot
          </a>
        </motion.div>

      </div>
    </section>
  );
}
