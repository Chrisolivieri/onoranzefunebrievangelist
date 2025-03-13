
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "In un momento così difficile, il team di Onoranze Funebri Serenità è stato incredibilmente comprensivo e professionale. Hanno curato ogni dettaglio con rispetto e dignità.",
      author: "Maria Rossi",
      relation: "Cliente"
    },
    {
      quote: "Non posso che ringraziare il personale per la loro sensibilità e l'attenzione ai dettagli. Hanno reso un momento doloroso un po' più sopportabile.",
      author: "Antonio Bianchi",
      relation: "Cliente"
    },
    {
      quote: "La loro guida esperta e il supporto emotivo sono stati fondamentali per la nostra famiglia. Hanno onorato la memoria di nostro padre in modo bellissimo.",
      author: "Famiglia Esposito",
      relation: "Clienti"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-gray-600">
            Leggi alcune delle testimonianze delle famiglie che abbiamo avuto l'onore di servire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 text-gray-400">
                  <path d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 13.9333 4.93333 12.2667 6.13333 10.7333C7.33333 9.2 9 8 11.1333 7.13333L12.6667 9.33333C11.0667 9.93333 9.86667 10.6 9.06667 11.3333C8.26667 12.0667 7.86667 12.8667 7.86667 13.7333C7.86667 14.2 8 14.6 8.26667 14.9333C8.53333 15.2667 8.93333 15.4667 9.46667 15.5333C10.6 15.6667 11.5333 16.1333 12.2667 16.9333C13 17.7333 13.3333 18.7333 13.3333 19.9333C13.3333 20.6 13.0667 21.1333 12.5333 21.5333C12 21.9333 11.3333 22.1333 10.5333 22.1333C10.1333 22.1333 9.73333 22 9.33333 21.7333V21.3333ZM22 21.3333C20.5333 21.3333 19.3333 20.8 18.4 19.7333C17.4667 18.6667 17 17.3333 17 15.7333C17 13.9333 17.6 12.2667 18.8 10.7333C20 9.2 21.6667 8 23.8 7.13333L25.3333 9.33333C23.7333 9.93333 22.5333 10.6 21.7333 11.3333C20.9333 12.0667 20.5333 12.8667 20.5333 13.7333C20.5333 14.2 20.6667 14.6 20.9333 14.9333C21.2 15.2667 21.6 15.4667 22.1333 15.5333C23.2667 15.6667 24.2 16.1333 24.9333 16.9333C25.6667 17.7333 26 18.7333 26 19.9333C26 20.6 25.7333 21.1333 25.2 21.5333C24.6667 21.9333 24 22.1333 23.2 22.1333C22.8 22.1333 22.4 22 22 21.7333V21.3333Z" fill="currentColor"/>
                </svg>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.relation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
