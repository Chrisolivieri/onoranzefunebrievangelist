
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="flex justify-center">
              <div className="w-full">
                <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Informazioni di Contatto</h2>
                
                <div className="space-y-8 mt-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 text-gray-700 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Indirizzo</h3>
                      <p className="text-gray-600"><strong>Sede legale:</strong> Viale Europa, 30</p>
                      <p className="text-gray-600">62022 Castelraimondo (MC)</p>
                      <p className="text-gray-600 mt-2"><strong>Sala del Commiato:</strong> Località Piani di Lanciano, 7</p>
                      <p className="text-gray-600">62025 Pioraco (MC)</p>
                      <p className="text-gray-600 mt-2">Italia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 text-gray-700 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Telefono</h3>
                      <p className="text-gray-600">338 362 2055</p>
                      <p className="text-gray-600">346 5145484</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-gray-700 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email</h3>
                      <p className="text-gray-600">onoranze.evangelisti@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
                  <h3 className="font-medium text-lg mb-2">Assistenza Immediata</h3>
                  <p className="text-gray-600 mb-4">
                    In caso di necessità immediate, vi invitiamo a chiamare il nostro numero di emergenza disponibile 24/7.
                  </p>
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-gray-700" />
                      <span className="text-xl font-medium">346 5145484</span>
                    </div>
                    <Button className="bg-gray-800 hover:bg-gray-700">
                      <a href="tel:+393465145484" className="flex items-center">
                        <Phone className="h-5 w-5 mr-2" />
                        Chiama Ora
                      </a>
                    </Button>
                  </div>
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
