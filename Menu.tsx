import { motion } from 'framer-motion';

import imgCafe1 from '@assets/cafe1_1784196147551.webp';
import imgCafe2 from '@assets/cafe2_1784196147550.webp';
import imgCafe3 from '@assets/cafe3_1784196147549.webp';
import imgCafe4 from '@assets/cafe4_1784196147548.webp';
import imgCafe5 from '@assets/cafe5_1784196147547.webp';
import imgCafe6 from '@assets/cafe6_1784196147546.webp';
import imgCafe7 from '@assets/cafe7_1784196147544.webp';

const menuImages = [imgCafe6, imgCafe5, imgCafe3, imgCafe4, imgCafe2, imgCafe1, imgCafe7];

const ease = [0.16, 1, 0.3, 1] as const;

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.p
            className="font-serif text-accent text-lg font-medium mb-2 tracking-wide uppercase"
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.1em' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Menu
          </motion.p>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground font-bold mb-6">
            Crafted for <span className="italic text-primary">Your Cravings</span>
          </h3>
          <motion.div
            className="h-1 bg-secondary rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          />
        </motion.div>

        {/* ── Masonry cards — alternate drop directions ── */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {menuImages.map((src, i) => {
            // Alternate: odd from left, even from right, first from top
            const xFrom = i === 0 ? 0 : i % 2 === 0 ? 60 : -60;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, x: xFrom, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.18)' }}
                className="break-inside-avoid overflow-hidden rounded-2xl shadow-md cursor-pointer"
              >
                <motion.img
                  src={src}
                  alt={`Cup Sip Cafe menu ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.45, ease }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
