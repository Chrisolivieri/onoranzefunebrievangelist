
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Cross, Home } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Servizi Funebri Completi",
      description: "Offriamo servizi funebri completi che includono la preparazione del defunto, l'allestimento della camera ardente, il trasporto funebre e il coordinamento di tutti gli aspetti della cerimonia secondo le vostre esigenze.",
      icon: <Cross className="h-10 w-10 mb-4 text-gray-700" />,
      link: "/servizi/funebri"
    },
    {
      title: "Casa del Commiato",
      description: "Un luogo sereno e accogliente dove riunirsi per dare l'ultimo saluto ai propri cari in un ambiente confortevole e rispettoso.",
      icon: <Home className="h-10 w-10 mb-4 text-gray-700" />,
      link: "/casa-del-commiato"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4">I Nostri Servizi</h2>
          <p className="text-gray-600 mb-6">
            Offriamo una gamma completa di servizi per supportare le famiglie in ogni fase del processo funebre, 
            con la massima professionalità e rispetto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="ghost" asChild className="mt-auto">
                  <Link to={service.link} className="flex items-center text-gray-600">
                    Scopri di più <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-gray-800 hover:bg-gray-700">
            <Link to="/servizi">Tutti i Servizi</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
