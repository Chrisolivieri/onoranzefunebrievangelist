
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, Clock, MapPin, Users, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section with YouTube Video */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative">
            <iframe 
              src="https://www.youtube.com/embed/Vql6Qb03_70?autoplay=1&mute=1&loop=1&playlist=Vql6Qb03_70&controls=0&rel=0&showinfo=0&modestbranding=1" 
              title="Onoranze Funebri Evangelisti" 
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: '100%', 
                pointerEvents: 'none',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '100%',
                minHeight: '100%'
              }}
            ></iframe>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Onoranze Funebri Evangelisti
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Accompagniamo i vostri cari con dignità e rispetto in ogni momento del loro ultimo viaggio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gray-800 hover:bg-gray-700">
              <Link to="/servizi">I Nostri Servizi</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 border-white text-white hover:bg-white/20">
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
                <p className="text-xl font-bold">338 362 2055 | 346 5114548</p>
              </div>
            </div>
            <Button className="bg-white text-gray-800 hover:bg-gray-200">
              <a href="tel:+393465114548">Chiama Ora</a>
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

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">Siamo Qui Per Aiutarti</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contattaci in qualsiasi momento per qualsiasi necessità. Luca e Andrea sono pronti ad assistervi con professionalità e con passione.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gray-800 hover:bg-gray-700">
              <Link to="/contatti">Contattaci</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
