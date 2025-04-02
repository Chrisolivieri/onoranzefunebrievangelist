
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Navigation, MapPin } from "lucide-react";
import Map from "@/components/Map";

const CasaDelCommiato = () => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="aspect-w-16 aspect-h-9 mb-8 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png" 
                  alt="Casa del Commiato Evangelisti" 
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 mb-6">
                La Casa del Commiato Evangelisti situata in Loc. Piani di Lanciano, 7 nel comune di Pioraco, è una 
                struttura composta da 3 stanze per l'osservazione delle salme e da una cappellina per tributare 
                l'ultimo saluto dei defunti anche di altre religioni. È a disposizione della propria clientela in modo 
                totalmente gratuito, e con orari flessibili a seconda delle esigenze dei familiari dei defunti.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Le Nostre Sale</h2>
              <Tabs defaultValue="sala-principale" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="sala-principale">Sala Principale</TabsTrigger>
                  <TabsTrigger value="sala-osservazione">Sale Osservazione</TabsTrigger>
                  <TabsTrigger value="cappellina">Cappellina</TabsTrigger>
                </TabsList>
                <TabsContent value="sala-principale" className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png" 
                      alt="Sala principale della Casa del Commiato" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Sala Principale</h3>
                  <p className="text-gray-600">
                    La sala principale è un ambiente spazioso e luminoso dove le famiglie possono 
                    riunirsi per dare l'ultimo saluto ai propri cari, in un contesto di rispetto e dignità.
                  </p>
                </TabsContent>
                <TabsContent value="sala-osservazione" className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png" 
                      alt="Sale osservazione della Casa del Commiato" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Sale Osservazione</h3>
                  <p className="text-gray-600">
                    Le tre sale per l'osservazione delle salme offrono un ambiente intimo e confortevole 
                    dove i familiari possono prendersi il tempo necessario per un ultimo momento di raccoglimento.
                  </p>
                </TabsContent>
                <TabsContent value="cappellina" className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/6741931b-c9e8-43e9-a642-0988a2a5150b.png" 
                      alt="Cappellina della Casa del Commiato" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Cappellina</h3>
                  <p className="text-gray-600">
                    La cappellina è uno spazio dedicato per le cerimonie di commiato, accogliendo 
                    funzioni religiose di ogni credo in un'atmosfera di rispetto e solennità.
                  </p>
                </TabsContent>
              </Tabs>
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

      <Footer />
    </div>
  );
};

export default CasaDelCommiato;
