
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-6">Informativa sulla Privacy</h1>
        <Separator className="mb-8" />
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Introduzione</h2>
            <p className="mb-4">
              Onoranze Funebri Evangelisti si impegna a proteggere la privacy dei propri clienti e visitatori del sito web. 
              La presente Informativa sulla Privacy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le informazioni personali.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Dati che raccogliamo</h2>
            <p className="mb-4">Possiamo raccogliere i seguenti tipi di informazioni:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Informazioni di contatto (nome, indirizzo email, numero di telefono, indirizzo postale)</li>
              <li>Informazioni demografiche</li>
              <li>Informazioni relative al servizio richiesto</li>
              <li>Informazioni di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
              <li>Cookie e tecnologie simili</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Come utilizziamo i dati</h2>
            <p className="mb-4">Utilizziamo le informazioni raccolte per:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Fornire i servizi richiesti</li>
              <li>Rispondere alle richieste di informazioni</li>
              <li>Migliorare il nostro sito web e i nostri servizi</li>
              <li>Inviare comunicazioni rilevanti (con consenso)</li>
              <li>Adempiere agli obblighi legali</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Condivisione dei dati</h2>
            <p className="mb-4">
              Non vendiamo, affittiamo o scambiamo le informazioni personali degli utenti con terze parti per scopi promozionali.
              Possiamo condividere le informazioni con:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Fornitori di servizi che ci assistono nella gestione del sito e nell'erogazione dei servizi</li>
              <li>Autorità pubbliche, quando richiesto dalla legge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Sicurezza dei dati</h2>
            <p className="mb-4">
              Adottiamo misure di sicurezza appropriate per proteggere le informazioni personali contro l'accesso, 
              l'alterazione, la divulgazione o la distruzione non autorizzati.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">I tuoi diritti</h2>
            <p className="mb-4">Ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR), hai diritto a:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Accedere alle tue informazioni personali</li>
              <li>Rettificare i dati inesatti</li>
              <li>Richiedere la cancellazione dei dati</li>
              <li>Limitare o opporti al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Conservazione dei dati</h2>
            <p className="mb-4">
              Conserviamo i dati personali solo per il tempo necessario agli scopi per cui sono stati raccolti, 
              o per adempiere agli obblighi legali.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Contattaci</h2>
            <p className="mb-4">
              Per qualsiasi domanda sulla presente Informativa sulla Privacy o per esercitare i tuoi diritti, 
              puoi contattarci ai seguenti recapiti:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@evangelisti.it<br />
              <strong>Telefono:</strong> 338 362 2055<br />
              <strong>Indirizzo:</strong> Zona Industriale Cluana, Corridonia (MC)
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-4">Modifiche alla Privacy Policy</h2>
            <p className="mb-4">
              Possiamo aggiornare periodicamente la nostra Informativa sulla Privacy. Ti invitiamo a rivedere 
              questa pagina regolarmente per eventuali modifiche. La data dell'ultima modifica è indicata in fondo.
            </p>
          </section>

          <p className="text-sm text-gray-600 mt-10">Ultimo aggiornamento: 04 Aprile 2025</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
