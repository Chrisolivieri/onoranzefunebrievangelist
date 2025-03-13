
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  nome: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  telefono: z.string().min(5, "Inserisci un numero di telefono valido"),
  messaggio: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri")
});

type FormValues = z.infer<typeof formSchema>;

const Contatti = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      messaggio: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    // Qui andrebbe l'integrazione con un sistema di invio email
    console.log(data);
    toast({
      title: "Messaggio inviato",
      description: "Ti contatteremo al più presto. Grazie per averci scritto.",
    });
    form.reset();
  };

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
      
      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Informazioni di Contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-gray-700" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">Indirizzo</h3>
                    <p className="text-gray-600">Via Roma 123</p>
                    <p className="text-gray-600">Milano, 20121</p>
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
                    <p className="text-gray-600">info@serenitafunebri.it</p>
                    <p className="text-gray-600">assistenza@serenitafunebri.it</p>
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
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Assistenza Immediata</h3>
                <p className="text-gray-600 mb-4">
                  In caso di necessità immediate, vi invitiamo a chiamare il nostro numero di emergenza disponibile 24/7.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-700" />
                  <span className="text-xl font-medium">800-123-456</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Inviaci un Messaggio</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome e Cognome</FormLabel>
                        <FormControl>
                          <Input placeholder="Inserisci il tuo nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="La tua email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefono</FormLabel>
                        <FormControl>
                          <Input placeholder="Il tuo numero di telefono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="messaggio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Messaggio</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descrivi come possiamo aiutarti..." 
                            className="min-h-[150px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
                    Invia Messaggio
                  </Button>
                </form>
              </Form>
              
              <p className="text-gray-500 text-sm mt-4">
                Rispettiamo la tua privacy. Le informazioni fornite saranno utilizzate solo per rispondere alla tua richiesta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
