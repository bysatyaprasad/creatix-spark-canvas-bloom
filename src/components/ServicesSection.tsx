
import { Home, Palette, Lightbulb, Sofa, Building, Layout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Luxury Residential Design',
    description: 'Complete home makeovers that blend traditional Indian aesthetics with contemporary comfort. From sprawling bungalows to modern apartments.',
    color: 'from-amber-500 to-orange-500',
    gradient: 'from-amber-50 to-orange-50'
  },
  {
    icon: Building,
    title: 'Commercial Interiors',
    description: 'Sophisticated office spaces, retail outlets, and hospitality venues that create lasting impressions and drive business success.',
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-50 to-red-50'
  },
  {
    icon: Layout,
    title: 'Space Planning & Vastu',
    description: 'Optimized layouts that honor Vastu principles while maximizing functionality and creating harmonious living environments.',
    color: 'from-red-500 to-pink-500',
    gradient: 'from-red-50 to-pink-50'
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert color schemes that reflect Indian culture and personal taste, creating spaces that feel both authentic and contemporary.',
    color: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-50 to-amber-50'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Strategic lighting solutions from traditional brass fixtures to modern LED systems that enhance both ambiance and functionality.',
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-50 to-emerald-50'
  },
  {
    icon: Sofa,
    title: 'Custom Furniture',
    description: 'Bespoke furniture crafted by skilled Indian artisans, blending traditional craftsmanship with contemporary design sensibilities.',
    color: 'from-blue-500 to-indigo-500',
    gradient: 'from-blue-50 to-indigo-50'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6 border border-amber-200">
            <span className="text-amber-700 font-semibold text-lg">Our Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Interior
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Design Services
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From concept to completion, we deliver end-to-end interior design services that honor Indian heritage while embracing modern luxury and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm animate-fade-in overflow-hidden relative" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
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
