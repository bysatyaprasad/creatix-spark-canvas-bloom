
import { Home, Palette, Lightbulb, Sofa } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Complete home transformations that reflect your personal style and functional needs.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert color schemes that create harmony and enhance the mood of your spaces.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Strategic lighting solutions that highlight your space\'s best features.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Sofa,
    title: 'Furniture Selection',
    description: 'Curated furniture pieces that combine comfort, style, and functionality.',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial concept to final installation, we provide comprehensive interior design services tailored to your unique vision and lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
