
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navigation } from "lucide-react";
import Map from "@/components/Map";
import { useIsMobile } from "@/hooks/use-mobile";
import VideoModal from "@/components/VideoModal";

const CasaDelCommiato = () => {
  const isMobile = useIsMobile();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const backgroundVideoRef = useRef<HTMLVideoElement | null>(null);
  
  // All images for gallery
  const galleryImages = [
    "/lovable-uploads/d88f7f63-0711-49a5-bfa9-4ccbca588d5a.png",
    "/lovable-uploads/3c1d88b1-3537-46ad-ad20-9daa6a951ed2.png",
    "/lovable-uploads/57f32f1a-5409-4d89-8134-5028250b8608.png",
    "/lovable-uploads/a806b36e-8a8e-4af8-83e4-0b5eac4ea8c2.png",
    "/lovable-uploads/9281b308-9104-43f0-aa5e-dc01d01cda3d.png",
    "/lovable-uploads/3dc4e403-7163-41f9-95cd-43fd2279d390.png",
    "/lovable-uploads/c05e4d4f-f0ef-43f6-ba69-2221e6c23522.png",
    "/lovable-uploads/74692c14-6384-4e21-a1cd-174473467e69.png",
    "/lovable-uploads/1209807a-2307-472b-8113-ea2bc2da0952.png",
    "/lovable-uploads/ac520f1c-0731-41ce-a349-e54c243c76cf.png",
    "/lovable-uploads/e5535111-b6b5-4273-b47f-9176e213fb0a.png",
    "/lovable-uploads/f57d40e4-a6a8-4432-9d7c-5a44a0b7ab74.png",
    "/lovable-uploads/06de6d51-c2f5-4bab-b3b6-339bd6f0370e.png",
    "/lovable-uploads/b02f7efe-69c8-48f6-bff1-60d86f9e334a.png",
    "/lovable-uploads/14fb8009-aa54-40f7-8022-462b44d2ca79.png",
    "/lovable-uploads/886e5813-abe5-4a5e-9c86-6e907c7cdb95.png",
    "/lovable-uploads/db0820e7-7307-45dc-9e3e-13ef5a7f33ac.png",
    "/lovable-uploads/21447724-05d0-4077-af90-ebd967501046.png",
    "/lovable-uploads/e4e341c4-baa7-4502-9513-f6bf3f534d72.png",
    "/lovable-uploads/b208b52c-6daa-4764-8362-8e199da7b42f.png",
    "/lovable-uploads/6cc5fddf-265b-44bb-be90-aa03bd672d18.png",
    "/lovable-uploads/c634aa01-cef8-415f-8ffa-e1d5134571e4.png",
  ];

  const handleVideoClick = () => {
    // When clicking on the preview video, open modal and pause background video
    setVideoModalOpen(true);
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.pause();
    }
  };

  const handleCloseVideoModal = () => {
    // When closing the modal, resume background video (muted)
    setVideoModalOpen(false);
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play();
      backgroundVideoRef.current.muted = true;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Casa del Commiato</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un luogo sereno e accogliente per dare l'ultimo saluto ai vostri cari
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div>
              <p className="text-gray-600 mb-6">
                La Casa del Commiato Evangelisti situata in Loc. Piani di Lanciano, 7 nel comune di Pioraco, è una 
                struttura composta da 3 stanze per l'osservazione delle salme e da una cappellina per tributare 
                l'ultimo saluto dei defunti anche di altre religioni. È a disposizione della propria clientela in modo 
                totalmente gratuito, e con orari flessibili a seconda delle esigenze dei familiari dei defunti.
              </p>
            </div>
            
            <div className="relative h-full">
              {/* Video in posizione prominente, cliccabile per aprire modal */}
              <div 
                onClick={handleVideoClick} 
                className="aspect-w-16 aspect-h-9 h-full max-h-96 w-full rounded-lg overflow-hidden shadow-lg cursor-pointer relative group"
              >
                <video
                  ref={backgroundVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center" }}
                >
                  <source src="/mix.mp4" type="video/mp4" />
                  Il tuo browser non supporta i video HTML5.
                </video>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-gray-800 border-b-[10px] border-b-transparent ml-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-6">La Nostra Struttura</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((img, index) => (
                  <div key={`gallery-${index}`} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={img} 
                      alt={`Casa del Commiato ${index + 1}`} 
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                La nostra struttura offre un ambiente sereno, elegante e accogliente, progettato per offrire conforto nei momenti più difficili.
              </p>
            </div>
          </div>
          
          {/* Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-semibold mb-8 text-center">Servizi Disponibili</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Assistenza Continua</h3>
                  <p className="text-gray-600 mb-4">
                    Il nostro personale è presente per offrire supporto e 
                    assistenza alle famiglie durante la permanenza nella casa del commiato.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Personalizzazione</h3>
                  <p className="text-gray-600 mb-4">
                    Offriamo la possibilità di personalizzare la camera ardente con fiori, 
                    fotografie, musica e altri elementi significativi per il defunto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Information and Contact */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Informazioni Pratiche</h3>
                <ul className="space-y-3 text-gray-600">
                  <li><strong>Indirizzo:</strong> Località Piani di Lanciano, 7, 62025 Pioraco (MC)</li>
                  <li><strong>Servizio:</strong> Gratuito per i nostri clienti</li>
                  <li><strong>Orari:</strong> Flessibili secondo le esigenze dei familiari</li>
                  <li><strong>Accessibilità:</strong> La struttura è accessibile alle persone con disabilità</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Come Raggiungerci</h3>
                <div className="h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                  <Map location="Località Piani di Lanciano, 7, 62025 Pioraco (MC)" />
                </div>
                <div className="flex justify-center mt-4">
                  <Button asChild className="bg-gray-800 hover:bg-gray-700 flex items-center">
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Località+Piani+di+Lanciano+7+Pioraco+MC+Italy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-5 w-5 mr-2" />
                      Indicazioni Stradali
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button asChild className="bg-gray-800 hover:bg-gray-700">
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={handleCloseVideoModal} 
        videoSrc="/mix.mp4" 
      />

      <Footer />
    </div>
  );
};

export default CasaDelCommiato;
