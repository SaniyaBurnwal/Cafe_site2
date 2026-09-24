import { motion } from 'framer-motion';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import { MapPin, Phone, Clock, MessageCircle, Navigation } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const infoItems = [
  {
    icon: MapPin,
    title: 'Our Location',
    value: () => siteConfig.address,
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    value: () => siteConfig.hours,
  },
  {
    icon: Phone,
    title: 'Contact',
    value: () => siteConfig.phone,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Section header ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="font-serif text-accent text-lg font-medium mb-2 tracking-wide uppercase">Visit Us</p>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground font-bold">
            We'd love to <span className="italic text-primary">see you</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* ── Info side — staggered slide from left ── */}
          <div>
            {infoItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 mb-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: i * 0.12, ease }}
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0"
                >
                  <item.icon size={24} />
                </motion.div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">{item.value()}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA Buttons — pop in together */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: 0.4, ease }}
            >
              <motion.a
                href={`tel:${siteConfig.phoneRaw}`}
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(185,98,26,0.35)' }}
                whileTap={{ scale: 0.96 }}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl font-medium transition-colors"
              >
                <Phone size={20} />
                Call Us
              </motion.a>
              <motion.a
                href={getWhatsAppLink("Hi, I want to inquire about...")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(37,211,102,0.35)' }}
                whileTap={{ scale: 0.96 }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-medium transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.a>
              <motion.a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(0,0,0,0.18)' }}
                whileTap={{ scale: 0.96 }}
                className="flex-1 flex items-center justify-center gap-2 bg-foreground hover:bg-foreground/90 text-white px-6 py-4 rounded-xl font-medium transition-colors"
              >
                <Navigation size={20} />
                Directions
              </motion.a>
            </motion.div>
          </div>

          {/* ── Map — scale in from right ── */}
          <motion.div
            className="w-full h-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            initial={{ opacity: 0, x: 70, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            <iframe
              src={siteConfig.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cup Sip Cafe Location Map"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
