
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Navigation } from "lucide-react";
import Map from "@/components/Map";

const CasaDelCommiato = () => {
  // Image categories for gallery
  const imageCategories = {
    esterno: [
      "/lovable-uploads/d88f7f63-0711-49a5-bfa9-4ccbca588d5a.png",
      "/lovable-uploads/3c1d88b1-3537-46ad-ad20-9daa6a951ed2.png",
      "/lovable-uploads/57f32f1a-5409-4d89-8134-5028250b8608.png",
      "/lovable-uploads/a806b36e-8a8e-4af8-83e4-0b5eac4ea8c2.png",
    ],
    atrio: [
      "/lovable-uploads/c05e4d4f-f0ef-43f6-ba69-2221e6c23522.png",
      "/lovable-uploads/74692c14-6384-4e21-a1cd-174473467e69.png",
      "/lovable-uploads/1209807a-2307-472b-8113-ea2bc2da0952.png",
    ],
    sale: [
      "/lovable-uploads/06de6d51-c2f5-4bab-b3b6-339bd6f0370e.png",
      "/lovable-uploads/b02f7efe-69c8-48f6-bff1-60d86f9e334a.png",
      "/lovable-uploads/14fb8009-aa54-40f7-8022-462b44d2ca79.png",
      "/lovable-uploads/886e5813-abe5-4a5e-9c86-6e907c7cdb95.png",
      "/lovable-uploads/db0820e7-7307-45dc-9e3e-13ef5a7f33ac.png",
    ]
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
              <div className="aspect-w-16 aspect-h-9 mb-8 overflow-hidden rounded-lg">
                <img 
                  src={imageCategories.esterno[0]}
                  alt="Esterno della Casa del Commiato Evangelisti" 
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
              <h2 className="text-2xl font-serif font-semibold mb-6">La Nostra Struttura</h2>
              <Tabs defaultValue="esterno" className="mb-8">
                <TabsList className="mb-4 w-full justify-start">
                  <TabsTrigger value="esterno">Esterno</TabsTrigger>
                  <TabsTrigger value="atrio">Atrio</TabsTrigger>
                  <TabsTrigger value="sale">Sale</TabsTrigger>
                </TabsList>
                
                <TabsContent value="esterno" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {imageCategories.esterno.map((img, index) => (
                      <div key={`esterno-${index}`} className="aspect-w-16 aspect-h-12 overflow-hidden rounded-lg">
                        <img 
                          src={img} 
                          alt={`Esterno della Casa del Commiato ${index + 1}`} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium pt-2">Esterno</h3>
                  <p className="text-gray-600">
                    L'esterno della struttura presenta un design moderno con elementi in pietra e ampie vetrate, 
                    in un contesto curato e accogliente che trasmette serenità.
                  </p>
                </TabsContent>
                
                <TabsContent value="atrio" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {imageCategories.atrio.map((img, index) => (
                      <div key={`atrio-${index}`} className="aspect-w-16 aspect-h-12 overflow-hidden rounded-lg">
                        <img 
                          src={img} 
                          alt={`Atrio della Casa del Commiato ${index + 1}`} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium pt-2">Atrio</h3>
                  <p className="text-gray-600">
                    L'atrio luminoso e spazioso accoglie i visitatori con un'atmosfera di pace e tranquillità, 
                    con ambienti ben curati e confortevoli.
                  </p>
                </TabsContent>
                
                <TabsContent value="sale" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {imageCategories.sale.map((img, index) => (
                      <div key={`sale-${index}`} className="aspect-w-16 aspect-h-12 overflow-hidden rounded-lg">
                        <img 
                          src={img} 
                          alt={`Sale della Casa del Commiato ${index + 1}`} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium pt-2">Sale</h3>
                  <p className="text-gray-600">
                    Le sale per l'osservazione e la cappellina offrono un ambiente raccolto, elegante e rispettoso 
                    dove i familiari possono tributare l'ultimo saluto ai propri cari.
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
