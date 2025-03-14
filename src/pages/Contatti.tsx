
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contatti = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Contattaci</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siamo qui per rispondere a tutte le tue domande e offrirti supporto in questo momento difficile
          </p>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Informazioni di Contatto</h2>
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Indirizzo</h3>
                    <p className="text-gray-600">Via Nazionale 43</p>
                    <p className="text-gray-600">Castelraimondo (MC), 62022</p>
                    <p className="text-gray-600">Italia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Telefono</h3>
                    <p className="text-gray-600">Numero Verde: 800-123-456</p>
                    <p className="text-gray-600">Ufficio: +39 02 1234567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@evangelistifunebri.it</p>
                    <p className="text-gray-600">assistenza@evangelistifunebri.it</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Orari</h3>
                    <p className="text-gray-600">Lunedì - Venerdì: 08:00 - 20:00</p>
                    <p className="text-gray-600">Sabato: 09:00 - 18:00</p>
                    <p className="text-gray-600">Domenica: 10:00 - 16:00</p>
                    <p className="font-medium mt-2">Servizio di emergenza disponibile 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
                <h3 className="font-medium text-lg mb-2">Assistenza Immediata</h3>
                <p className="text-gray-600 mb-4">
                  In caso di necessità immediate, vi invitiamo a chiamare il nostro numero di emergenza disponibile 24/7.
                </p>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-700" />
                  <span className="text-xl font-medium">800-123-456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
