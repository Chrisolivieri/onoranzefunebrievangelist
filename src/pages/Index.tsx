
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, Clock, MapPin, Users, Heart, Home, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import Map from "@/components/Map";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section with Local Video */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ objectPosition: "center", objectFit: isMobile ? "cover" : "cover" }}
          >
            <source src="/mix.mp4" type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-6">
            Onoranze Funebri Evangelisti
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6 md:mb-8 max-w-3xl mx-auto">
            Accompagniamo i vostri cari con dignità e rispetto in ogni momento del loro ultimo viaggio
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild className="bg-gray-800 hover:bg-gray-700">
              <Link to="/servizi">I Nostri Servizi</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white text-white hover:bg-white/20 mt-3 sm:mt-0">
              <Link to="/contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Phone className="mr-3 h-6 w-6" />
              <div>
                <p className="text-sm text-gray-300">Assistenza 24/7</p>
                <p className="text-xl font-bold">338 362 2055 | 346 5145484</p>
              </div>
            </div>
            <Button className="bg-white text-gray-800 hover:bg-gray-200">
              <a href="tel:+393465145484">Chiama Ora</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Chi Siamo</h2>
            <p className="text-gray-600 mb-6">
              Da oltre 40 anni, la nostra azienda a conduzione familiare offre servizi funebri completi con dignità, rispetto e con passione. Comprendiamo che ogni persona è unica, e ci impegniamo a personalizzare ogni servizio per onorare al meglio la memoria del vostro caro.
            </p>
            <Button variant="outline" asChild className="border-gray-300">
              <Link to="/chi-siamo" className="flex items-center">
                Scopri di più <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <Clock className="h-10 w-10 mb-4 text-gray-700 mx-auto" />
                <h3 className="text-xl font-medium text-center mb-2">Disponibilità 24/7</h3>
                <p className="text-gray-600 text-center">
                  Siamo disponibili in qualsiasi momento per supportarvi nei momenti più difficili.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <MapPin className="h-10 w-10 mb-4 text-gray-700 mx-auto" />
                <h3 className="text-xl font-medium text-center mb-2">Presenza Locale</h3>
                <p className="text-gray-600 text-center">
                  Profonda conoscenza del territorio e delle tradizioni locali di Castelraimondo e paesi limitrofi.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <Heart className="h-10 w-10 mb-4 text-gray-700 mx-auto" />
                <h3 className="text-xl font-medium text-center mb-2">Cura e Rispetto</h3>
                <p className="text-gray-600 text-center">
                  Ogni dettaglio è curato con la massima attenzione e rispetto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casa del Commiato Section - Moved after About Us section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Casa del Commiato</h2>
            <p className="text-gray-600 mb-6">
              La nostra Casa del Commiato è uno spazio accogliente dove potrete dare l'ultimo saluto ai vostri cari in un ambiente intimo e confortevole.
            </p>
            <Button variant="outline" asChild className="border-gray-300">
              <Link to="/casa-del-commiato" className="flex items-center">
                Visita la Casa del Commiato <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Card className="border-none shadow-lg overflow-hidden max-w-lg w-full">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png" 
                  alt="Casa del Commiato" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Un Ambiente Accogliente</h3>
                <p className="text-gray-600">
                  La nostra Casa del Commiato a Pioraco offre uno spazio sereno e accogliente per ricordare e onorare i propri cari.
                </p>
                <div className="flex items-center mt-4 text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Località Piani di Lanciano, 7, 62025 Pioraco (MC)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map Section */}
          <div className="mt-8 mx-auto max-w-lg">
            <h3 className="text-xl font-medium mb-4 text-center">Come Raggiungerci</h3>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <Map location="Località Piani di Lanciano, 7, 62025 Pioraco (MC)" />
            </div>
            <div className="mt-4 flex justify-center">
              <Button className="bg-gray-800 hover:bg-gray-700 flex items-center" asChild>
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
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">Siamo Qui Per Aiutarti</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contattaci in qualsiasi momento per qualsiasi necessità. Luca e Andrea sono pronti ad assistervi con professionalità e con passione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gray-800 hover:bg-gray-700">
              <Link to="/contatti">Contattaci</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="mt-3 sm:mt-0">
              <Link to="/servizi">Esplora i Servizi</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
