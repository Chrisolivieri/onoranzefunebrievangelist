
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                Da oltre 30 anni al servizio delle famiglie con dignità e rispetto
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p>
                  Onoranze Funebri Serenità nasce nel 1985 con l'obiettivo di offrire un servizio funebre completo, 
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
                  La nostra sede principale si trova a Milano, ma operiamo in tutta la Lombardia per essere 
                  vicini alle famiglie ovunque si trovino.
                </p>

                <h3 className="font-serif mt-8">La Nostra Storia</h3>
                <p>
                  Fondati dalla famiglia Bianchi nel 1985, abbiamo mantenuto nel tempo i valori di un'azienda familiare 
                  combinandoli con un servizio di elevata professionalità. In oltre tre decenni abbiamo evoluto i 
                  nostri servizi per rispondere alle esigenze di una società in cambiamento, mantenendo sempre al 
                  centro il rispetto e la dignità delle persone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
