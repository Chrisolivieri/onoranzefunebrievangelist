
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-center">Chi Siamo</h1>
              <p className="text-gray-600 mb-8 text-center">
                Da oltre 40 anni al servizio delle famiglie con dignità e rispetto
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p>
                  Onoranze Funebri Evangelisti nasce negli anni '70 a Castelraimondo con l'obiettivo di offrire un servizio funebre completo, 
                  caratterizzato da professionalità, discrezione e rispetto per il dolore delle famiglie in lutto.
                </p>
                
                <p>
                  In questi anni abbiamo accompagnato migliaia di famiglie nel momento più difficile, 
                  guidandole con empatia e competenza attraverso tutte le fasi del commiato.
                </p>

                <h3 className="font-serif mt-8">La Nostra Missione</h3>
                <p>
                  La nostra missione è offrire un supporto completo alle famiglie in lutto, permettendo loro 
                  di concentrarsi sul ricordo del proprio caro mentre noi ci occupiamo di tutti gli aspetti 
                  organizzativi e burocratici.
                </p>

                <h3 className="font-serif mt-8">I Nostri Valori</h3>
                <ul>
                  <li><strong>Rispetto</strong> - Trattiamo ogni persona e famiglia con la massima dignità e rispetto</li>
                  <li><strong>Professionalità</strong> - Garantiamo la massima cura in ogni dettaglio del servizio</li>
                  <li><strong>Empatia</strong> - Comprendiamo il dolore delle famiglie e offriamo un supporto emotivo genuino</li>
                  <li><strong>Trasparenza</strong> - Manteniamo la massima chiarezza nei costi e nelle procedure</li>
                </ul>

                <h3 className="font-serif mt-8">Il Nostro Team</h3>
                <p>
                  Il nostro personale è formato da professionisti esperti e qualificati, costantemente aggiornati 
                  sulle normative del settore e pronti ad offrire il supporto necessario in ogni momento.
                </p>

                <p>
                  La nostra sede principale si trova a Castelraimondo, ma operiamo in tutta la provincia di Macerata e su tutto il territorio nazionale per essere 
                  vicini alle famiglie ovunque si trovino.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-center">La Storia dell'Azienda</h2>
              <Card className="border-0 shadow-md overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="prose prose-lg mx-auto">
                    <p>
                      L'Agenzia Funebre Evangelisti, situata a Castelraimondo (MC), è una realtà consolidata nel settore delle onoranze funebri con oltre cinquant' anni di esperienza. Rilevata nel 2005 dai fratelli Andrea e Luca Mariotti, dal fondatore Mario Evangelisti di cui ha mantenuto il nome, l'Agenzia si è sempre distinta per la professionalità, la discrezione e la capacità di offrire un supporto completo e umano alle famiglie nel momento del lutto.
                    </p>
                    
                    <Separator className="my-6" />
                    
                    <p>
                      La storia dell'agenzia inizia con un'idea semplice ma ambiziosa: creare un servizio funebre che non fosse solo un aiuto tecnico, ma anche un sostegno morale per chi affronta la perdita di una persona cara. Con questa visione, Andrea e Luca hanno investito tempo e risorse nella formazione e nell'acquisto di attrezzature moderne, riuscendo a offrire servizi personalizzati e di alta qualità.
                    </p>
                    
                    <p>
                      Nel corso degli anni, l'agenzia si è evoluta per rispondere alle diverse esigenze culturali e religiose della comunità. Oltre ai tradizionali funerali cristiani, Evangelisti organizza riti funebri laici e per diverse confessioni religiose. Questo approccio inclusivo e rispettoso ha consolidato la reputazione dell'agenzia come punto di riferimento locale.
                    </p>
                    
                    <Separator className="my-6" />
                    
                    <p>
                      Un momento importante nella storia dell'agenzia è stata l'apertura della Casa del Commiato, una struttura moderna e accogliente situata in località Piani di Lanciano, 7 nel comune di Pioraco. Questo spazio è stato progettato per permettere alle famiglie di salutare i propri cari in un ambiente intimo e sereno, lontano dal caos e dalla formalità delle strutture ospedaliere.
                    </p>
                    
                    <p>
                      Oggi, Onoranze Funebri Evangelisti continua a essere guidata dai valori di rispetto, empatia e innovazione, mantenendo saldo il legame con il territorio e con la comunità di Castelraimondo e dei comuni limitrofi. Con un team dedicato e un'ampia gamma di servizi, l'agenzia si impegna a trasformare un momento di dolore in un tributo dignitoso e significativo alla vita del defunto.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
