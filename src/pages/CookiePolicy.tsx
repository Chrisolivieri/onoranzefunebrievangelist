
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const CookiePolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-6">Informativa sui Cookie</h1>
        <Separator className="mb-8" />
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Cosa sono i cookie</h2>
            <p className="mb-4">
              I cookie sono piccoli file di testo che i siti web visitati salvano sul dispositivo dell'utente. 
              Questi file contengono informazioni che vengono utilizzate per migliorare la navigazione e personalizzare 
              l'esperienza dell'utente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Tipi di cookie utilizzati</h2>
            <p className="mb-4">Il nostro sito utilizza diversi tipi di cookie, che possono essere classificati come segue:</p>
            
            <h3 className="text-xl font-medium mb-2">Cookie tecnici</h3>
            <p className="mb-4">
              Sono essenziali per il funzionamento del sito e consentono di utilizzare funzionalità specifiche. 
              Senza questi cookie, il sito non potrebbe funzionare correttamente.
            </p>
            
            <h3 className="text-xl font-medium mb-2">Cookie analitici</h3>
            <p className="mb-4">
              Ci permettono di raccogliere informazioni in forma anonima sull'utilizzo del sito, come le pagine visitate 
              e il tempo trascorso su ciascuna di esse. Questi dati ci aiutano a migliorare il sito e l'esperienza dell'utente.
            </p>
            
            <h3 className="text-xl font-medium mb-2">Cookie di profilazione</h3>
            <p className="mb-4">
              Vengono utilizzati per creare profili relativi all'utente e fornire contenuti in linea con le preferenze manifestate 
              durante la navigazione. Il nostro sito potrebbe utilizzare cookie di profilazione di terze parti.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Cookie di terze parti</h2>
            <p className="mb-4">
              Il nostro sito potrebbe contenere cookie provenienti da servizi di terze parti, come:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Google Analytics (per l'analisi del traffico)</li>
              <li>Servizi di social media (per la condivisione dei contenuti)</li>
              <li>Servizi di mappe (per mostrare la nostra posizione)</li>
            </ul>
            <p className="mb-4">
              Per informazioni su come questi servizi utilizzano i cookie, ti invitiamo a consultare le rispettive 
              politiche sulla privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Durata dei cookie</h2>
            <p className="mb-4">I cookie possono essere classificati in base alla loro durata:</p>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Cookie di sessione:</strong> Vengono eliminati automaticamente alla chiusura del browser</li>
              <li><strong>Cookie persistenti:</strong> Rimangono memorizzati sul dispositivo fino alla loro scadenza o 
              fino a quando l'utente li cancella manualmente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Gestione dei cookie</h2>
            <p className="mb-4">
              Puoi decidere se accettare o rifiutare i cookie modificando le impostazioni del tuo browser. 
              Tieni presente che la disabilitazione di alcuni cookie potrebbe compromettere la funzionalità del sito.
            </p>
            <p className="mb-4">
              Di seguito i link alle istruzioni per gestire i cookie nei principali browser:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Banner dei cookie</h2>
            <p className="mb-4">
              Quando visiti il nostro sito per la prima volta, ti verrà mostrato un banner che ti informa sull'uso 
              dei cookie e ti offre la possibilità di accettarli tutti o solo quelli essenziali.
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-10">Ultimo aggiornamento: 04 Aprile 2025</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
