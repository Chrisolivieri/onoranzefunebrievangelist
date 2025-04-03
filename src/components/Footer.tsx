
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/e2982a56-429d-42c0-8906-c0b0e41b2b9b.png" 
                alt="Evangelisti Logo" 
                className="h-20 w-auto mr-3"
              />
            </div>
            <p className="mb-4 text-gray-400">
              Offriamo servizi funebri completi con dignità e rispetto, accompagnando le famiglie in ogni fase del lutto con passione.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/onoranzefunebrievangelisti" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <div>
                  <span>Sede legale: Viale Europa, 30, 62022 Castelraimondo (MC)</span><br />
                  <span>Sala del Commiato: Località Piani di Lanciano, 7, 62025 Pioraco (MC)</span>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-400" />
                <div>
                  <span>338 362 2055</span><br />
                  <span>346 5145484</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <span>onoranze.evangelisti@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span>Disponibili 24 ore al giorno, 7 giorni su 7</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chi-siamo" className="text-gray-400 hover:text-white">Chi Siamo</Link>
              </li>
              <li>
                <Link to="/servizi" className="text-gray-400 hover:text-white">I Nostri Servizi</Link>
              </li>
              <li>
                <Link to="/casa-del-commiato" className="text-gray-400 hover:text-white">Casa del Commiato</Link>
              </li>
              <li>
                <Link to="/contatti" className="text-gray-400 hover:text-white">Contattaci</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Onoranze Funebri Evangelisti. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
