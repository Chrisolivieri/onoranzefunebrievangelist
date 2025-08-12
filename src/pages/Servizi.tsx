
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Cross, Flag, Book, MessageCircleHeart, Clock, MapPin, Heart } from "lucide-react";
import qrCodePlaceholder from "@/assets/qr-code-placeholder.png";

const ServiceCard = ({ icon, title, description, isNew }: { icon: React.ReactNode, title: string, description: string, isNew?: boolean }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:space-x-4">
          <div className="mb-4 md:mb-0">
            {icon}
          </div>
          <div>
            {isNew && (
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full mb-2 inline-block">
                NOVITÀ
              </span>
            )}
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Servizi = () => {
  const services = [
    {
      icon: <Cross className="h-10 w-10 text-gray-700" />,
      title: "Servizi Funebri Completi",
      description: "Offriamo servizi funebri completi che includono la preparazione del defunto, l'allestimento della camera ardente, il trasporto funebre e il coordinamento di tutti gli aspetti della cerimonia secondo le vostre esigenze."
    },
    {
      icon: <Flag className="h-10 w-10 text-gray-700" />,
      title: "Cerimonie Commemorative",
      description: "Organizziamo cerimonie commemorative personalizzate che celebrano la vita del vostro caro in modo significativo e rispettoso, secondo le vostre preferenze e tradizioni."
    },
    {
      icon: <Book className="h-10 w-10 text-gray-700" />,
      title: "Assistenza Documentale",
      description: "Vi guidiamo attraverso tutte le procedure burocratiche necessarie, gestendo i certificati di morte, i permessi di sepoltura, e tutta la documentazione richiesta in questo momento."
    },
    {
      icon: <MessageCircleHeart className="h-10 w-10 text-gray-700" />,
      title: "Supporto Pre-Pianificazione",
      description: "Offriamo servizi di pre-pianificazione funebre per coloro che desiderano organizzare in anticipo i propri funerali, alleviando così il peso emotivo e finanziario sui propri cari."
    },
    {
      icon: <Heart className="h-10 w-10 text-gray-700" />,
      title: "Articoli Commemorativi",
      description: "Forniamo una selezione di articoli commemorativi di alta qualità, tra cui lapidi, urne, gioielli commemorativi e altri oggetti che aiutano a mantenere vivo il ricordo del vostro caro."
    },
    {
      icon: <Clock className="h-10 w-10 text-gray-700" />,
      title: "Assistenza 24/7",
      description: "Il nostro servizio di assistenza è disponibile 24 ore al giorno, 7 giorni su 7, per rispondere a qualsiasi emergenza o necessità in qualsiasi momento."
    },
    {
      icon: <MapPin className="h-10 w-10 text-gray-700" />,
      title: "Trasporto Nazionale e Internazionale",
      description: "Gestiamo il trasporto del defunto sia a livello nazionale che internazionale, occupandoci di tutte le pratiche burocratiche necessarie per garantire un trasferimento sicuro e rispettoso."
    },
    {
      icon: <img src={qrCodePlaceholder} alt="QR Code" className="h-10 w-10" />,
      title: "QR Code Watching Stars",
      description: "Da oggi nella nostra agenzia hai una soluzione unica per ricordare e tramandare la storia di chi non è più tra noi. Con i QR Code di Watching Stars potrai custodire la memoria dei tuoi cari, condividere la loro storia, foto e video, lasciare una dedica, far recapitare un fiore e molto altro. La vera eredità dei nostri cari sono i ricordi che ci lasciano: conservali e tramandali di generazione in generazione. Chiedi maggiori informazioni presso la nostra agenzia.",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">I Nostri Servizi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi funebri con la massima cura, rispetto e professionalità
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                isNew={service.isNew}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Info */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">Approccio Personalizzato</h2>
            <p className="text-gray-600 mb-8">
              Comprendiamo che ogni persona è unica, e per questo offriamo servizi completamente personalizzabili 
              in base alle vostre esigenze, credenze e desideri. Il nostro team è dedicato a creare esperienze 
              commemorative significative che riflettano la vita e la personalità del vostro caro.
            </p>
            <p className="text-gray-600">
              Per maggiori informazioni sui nostri servizi o per una consulenza personale, 
              non esitate a contattarci. Siamo qui per supportarvi in ogni passo di questo difficile percorso.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servizi;
