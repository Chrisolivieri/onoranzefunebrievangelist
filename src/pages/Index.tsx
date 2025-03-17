
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, Clock, MapPin, Users, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Carousel opts={{ loop: true, duration: 60, watchDrag: false }} className="w-full h-full" autoplay interval={5000}>
            <CarouselContent className="h-full">
              <CarouselItem className="h-full">
                <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png')" }}>
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full">
                <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80')" }}>
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              </CarouselItem>
              <CarouselItem className="h-full">
                <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1400&q=80')" }}>
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
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
                <p className="text-xl font-bold">800-123-456</p>
              </div>
            </div>
            <Button className="bg-white text-gray-800 hover:bg-gray-200">
              <Link to="/contatti">Richiedi Informazioni</Link>
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
              Da oltre 30 anni, la nostra azienda a conduzione familiare offre servizi funebri completi con dignità, rispetto e compassione. Comprendiamo che ogni persona è unica, e ci impegniamo a personalizzare ogni servizio per onorare al meglio la memoria del vostro caro.
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
                  Profonda conoscenza del territorio e delle tradizioni locali di Castelraimondo.
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
            Contattaci in qualsiasi momento per qualsiasi necessità. Il nostro team è pronto ad assisterti con compassione e professionalità.
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
