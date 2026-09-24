import { siteConfig, getWhatsAppLink } from '@/config/site';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import logo from '@assets/image_1784195549392.png';

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4 inline-block bg-white rounded-xl overflow-hidden px-3 py-2 shadow-sm">
              <img
                src={logo}
                alt="Cup Sip Cafe"
                className="h-14 w-auto block"
              />
            </div>
            <p className="text-white/60 mb-6 font-serif italic text-lg">
              "{siteConfig.tagline}"
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.social.facebook} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-serif text-xl font-semibold text-white mb-6">Find Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-accent transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-accent shrink-0 mt-1" size={20} />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
