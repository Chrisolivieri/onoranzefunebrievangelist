
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      // Short delay to prevent it from appearing immediately on load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-medium mb-2">Informativa sui Cookie</h3>
            <p className="text-gray-600 text-sm">
              Questo sito utilizza cookie tecnici e di profilazione per migliorare la tua esperienza di navigazione. 
              Puoi accettare tutti i cookie o scegliere quali attivare. Per maggiori informazioni, consulta la nostra 
              <a href="/privacy-policy" className="text-gray-700 underline ml-1">Privacy Policy</a>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={acceptEssential}
              className="text-sm"
            >
              Solo Essenziali
            </Button>
            <Button 
              size="sm" 
              onClick={acceptAll}
              className="bg-gray-800 hover:bg-gray-700 text-sm"
            >
              Accetta Tutti
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={acceptEssential}
              className="ml-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
