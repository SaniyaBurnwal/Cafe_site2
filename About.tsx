import { motion } from 'framer-motion';
import { Coffee, Pizza, Wifi, Heart, Sofa, Wind, Music, Star, Users, Zap } from 'lucide-react';
import cafeInterior from '@assets/cafe9_1784197561371.jpg';

const features = [
  { icon: Coffee,  title: "Fresh Coffee",         desc: "Expertly brewed espresso, cold coffee and more." },
  { icon: Pizza,   title: "Fresh Food",            desc: "Prepared to order with quality ingredients." },
  { icon: Wind,    title: "Fully Air-Conditioned", desc: "Stay cool and comfortable all day long." },
  { icon: Music,   title: "Free Guitar Play",      desc: "Pick up our guitar and play a tune — always free!" },
  { icon: Sofa,    title: "Cozy Seating",          desc: "Relaxed spaces for work, dates, or hangouts." },
  { icon: Wifi,    title: "Free Wi-Fi",            desc: "Stay connected while you sip and dine." },
  { icon: Users,   title: "Friendly Service",      desc: "Warm, welcoming staff ready to make your day." },
  { icon: Star,    title: "Boba & Specials",       desc: "Unique boba drinks and Cup Sip signature items." },
  { icon: Zap,     title: "Quick Service",         desc: "Fast, efficient kitchen — no long waits." },
  { icon: Heart,   title: "Pocket-Friendly",       desc: "Premium quality at neighbourhood-friendly prices." },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Image side — slides in from left ── */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
          >
            {/* Decorative amber glow behind */}
            <div className="absolute -inset-6 bg-amber-500/10 rounded-3xl blur-2xl -z-10" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src={cafeInterior}
                alt="Inside Cup Sip Cafe"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle warm gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 bg-amber-500 text-white rounded-2xl px-5 py-3 shadow-xl shadow-amber-500/30"
              initial={{ opacity: 0, scale: 0.7, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
            >
              <p className="text-xs font-medium opacity-80">Tagore Park, Kasba</p>
              <p className="font-serif font-bold text-base">Kolkata's Coziest Corner</p>
            </motion.div>
          </motion.div>

          {/* ── Text side ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease }}
            >
              <h2 className="font-serif text-accent text-lg font-medium mb-2 tracking-wide uppercase">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground font-bold mb-6 leading-tight">
                A Cozy Destination for{' '}
                <span className="italic text-primary">Every Moment</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Nestled in Tagore Park, Kasba, Cup Sip Cafe was born from a simple idea: to create a space where great food, exceptional coffee, and warm moments intersect.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Whether you're a student, friends catching up over boba, or families sharing a hearty meal — we offer premium quality at neighbourhood prices.
              </p>
            </motion.div>

            {/* Feature cards — staggered pop-in */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: idx * 0.07, ease }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 text-primary"
                  >
                    <feat.icon size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-serif font-bold text-foreground text-base leading-tight">{feat.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
