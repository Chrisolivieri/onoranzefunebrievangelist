
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

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
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=1200&h=800" 
                  alt="Esterno della Casa del Commiato" 
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-600 mb-6">
                La nostra Casa del Commiato è situata in una zona tranquilla e facilmente 
                raggiungibile, circondata da un ampio giardino che offre uno spazio di 
                riflessione e raccoglimento. La struttura è stata progettata con cura 
                per offrire un ambiente confortevole e rispettoso.
              </p>
              <p className="text-gray-600">
                Ogni dettaglio è stato pensato per creare un'atmosfera di serenità e 
                dignità, dove le famiglie possono riunirsi per dare l'ultimo saluto 
                ai propri cari in un contesto intimo e riservato.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Le Nostre Sale</h2>
              <Tabs defaultValue="sala-principale" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="sala-principale">Sala Principale</TabsTrigger>
                  <TabsTrigger value="sala-intima">Sala Intima</TabsTrigger>
                  <TabsTrigger value="spazi-comuni">Spazi Comuni</TabsTrigger>
                </TabsList>
                <TabsContent value="sala-principale" className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1200&h=800" 
                      alt="Sala principale della Casa del Commiato" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Sala Principale</h3>
                  <p className="text-gray-600">
                    La sala principale può accogliere fino a 100 persone ed è dotata di 
                    un sistema audio per le cerimonie, illuminazione soffusa regolabile 
                    e un'eccellente acustica. Gli arredi sono eleganti e confortevoli, 
                    creando un ambiente di rispetto e dignità.
                  </p>
                </TabsContent>
                <TabsContent value="sala-intima" className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1200&h=800" 
                      alt="Sala intima della Casa del Commiato" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Sala Intima</h3>
                  <p className="text-gray-600">
                    Per chi desidera un ambiente più raccolto, la sala intima offre uno 
                    spazio accogliente per piccoli gruppi fino a 30 persone. È l'ideale 
                    per veglie più private e momenti di raccoglimento familiare.
                  </p>
                </TabsContent>
                <TabsContent value="spazi-comuni" className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1200&h=800" 
                      alt="Spazi comuni della Casa del Commiato" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium">Spazi Comuni</h3>
                  <p className="text-gray-600">
                    La struttura dispone di aree comuni dove i visitatori possono 
                    ritrovarsi per un momento di pausa. Una piccola caffetteria offre 
                    bevande e piccoli ristori. Il giardino esterno è accessibile per 
                    chi desidera un momento di riflessione all'aria aperta.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-semibold mb-8 text-center">Servizi Disponibili</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Assistenza Continua</h3>
                  <p className="text-gray-600 mb-4">
                    Il nostro personale è presente 24 ore su 24 per offrire supporto e 
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
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-3">Ristorazione</h3>
                  <p className="text-gray-600 mb-4">
                    Su richiesta, possiamo organizzare un servizio di catering per offrire 
                    un piccolo rinfresco ai visitatori durante le ore di visita.
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
                  <li><strong>Indirizzo:</strong> Via della Serenità 123, Milano</li>
                  <li><strong>Orari di apertura:</strong> 24 ore su 24, tutti i giorni</li>
                  <li><strong>Parcheggio:</strong> Ampio parcheggio gratuito disponibile</li>
                  <li><strong>Accessibilità:</strong> La struttura è completamente accessibile alle persone con disabilità</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Prenotazioni</h3>
                <p className="text-gray-600 mb-4">
                  Per prenotare l'utilizzo della Casa del Commiato o ricevere maggiori 
                  informazioni, vi invitiamo a contattarci telefonicamente o tramite il 
                  modulo di contatto sul nostro sito.
                </p>
                <Button asChild className="bg-gray-800 hover:bg-gray-700">
                  <Link to="/contatti">Contattaci</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasaDelCommiato;
