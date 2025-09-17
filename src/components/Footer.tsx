import { Heart, Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Pastor", href: "/pastor" },
    { name: "Ministries", href: "/ministries" },
    { name: "Schedule", href: "/schedule" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceInfo = [
    { day: "Sunday Service", time: "9:30 AM - 11:30 AM" },
    { day: "Bible Study", time: "Tuesdays 7:00 PM" },
    { day: "Daily Prayer", time: "8:00 PM Daily" },
    { day: "Facebook Live", time: "Wed & Thu 10:00 PM" }
  ];

  return (
    <footer className="relative bg-gradient-celestial text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ethereal opacity-30 animate-spirit-flow"></div>
      
      {/* Floating particles */}
      <div className="absolute top-8 left-8 w-4 h-4 bg-secondary-glow rounded-full animate-celestial-dance opacity-60"></div>
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary-glow rounded-full animate-heavenly-orbit opacity-70"></div>
      <div className="absolute bottom-8 right-8 w-2 h-2 bg-secondary rounded-full animate-glory-wave opacity-80"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="./src/assets/wohem-logo.png" 
                alt="WOHEM Church Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">WOHEM</h3>
                <p className="text-sm opacity-90">The Way of Holiness Endtime Ministry</p>
                <p className="text-sm opacity-90">House of Praise</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed opacity-90 mb-6 max-w-md">
              A community-based, multicultural Christian church in Stratford, London, 
              dedicated to empowering people to empower others and raising future leaders 
              through the love of Christ.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 opacity-75" />
                <span className="text-sm">Bryant Street, Stratford, London E15 4RU</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 opacity-75" />
                <span className="text-sm">07908 463710 / 07961 718754</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 opacity-75" />
                <span className="text-sm">Wohem_admin@btinternet.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="h-4 w-4 opacity-75" />
                <span className="text-sm">Emmanuel Dare Olafisoye</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <div className="space-y-3">
              {serviceInfo.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Clock className="h-4 w-4 opacity-75 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">{service.day}</p>
                    <p className="opacity-75">{service.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h5 className="font-semibold mb-2 text-secondary-glow">New Visitors</h5>
              <p className="text-sm opacity-90">
                Warmly welcomed! Come as you are and discover the love and 
                community that awaits you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-black/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-lg italic mb-4 opacity-90">
            "And a highway shall be there, and a way, and it shall be called 
            The way of holiness" - Isaiah 35:8
          </blockquote>
          <p className="text-sm opacity-75">
            Empowering people to empower others • Raising future leaders • 
            Rebuilding families and refining society
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              © 2025 WOHEM Church - The Way of Holiness Endtime Ministry. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-75">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for God's Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;