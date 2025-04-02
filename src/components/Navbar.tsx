
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const links = [
    { name: "Home", href: "/" },
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Servizi", href: "/servizi" },
    { name: "Contatti", href: "/contatti" },
    { name: "Casa del Commiato", href: "/casa-del-commiato" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png" 
                alt="Onoranze Funebri Evangelisti Logo" 
                className="h-12 w-auto"
              />
              <span className="text-base md:text-xl font-serif font-bold text-gray-900 truncate max-w-[180px] md:max-w-none">
                Onoranze Funebri Evangelisti
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium">338 362 2055 | 346 5145484</span>
            </div>
            <Button size="sm" className="bg-gray-800 hover:bg-gray-700">
              <Link to="/contatti">Assistenza</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <img 
                        src="/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png" 
                        alt="Evangelisti Logo" 
                        className="h-12 w-auto"
                      />
                      <span className="text-lg font-serif font-bold">Menu</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-4">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="text-gray-600 hover:text-gray-900 font-medium py-2 border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8 border-t border-gray-100">
                    <div className="flex items-center mb-4">
                      <Phone className="h-5 w-5 mr-3 text-gray-600" />
                      <div>
                        <p className="text-sm text-gray-500">Assistenza 24/7</p>
                        <div>
                          <p className="text-base font-bold">338 362 2055</p>
                          <p className="text-base font-bold">346 5145484</p>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gray-800 hover:bg-gray-700">
                      <a href="tel:+393465145484">Chiama Ora</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
