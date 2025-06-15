
import { Home, Palette, Lightbulb, Sofa, Building, Compass } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Luxury Residential',
    description: 'Bespoke home designs that reflect your lifestyle and aspirations with uncompromising attention to detail.',
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-50 to-pink-50'
  },
  {
    icon: Building,
    title: 'Commercial Spaces',
    description: 'Innovative commercial environments that inspire productivity and leave lasting impressions.',
    color: 'from-cyan-500 to-blue-500',
    gradient: 'from-cyan-50 to-blue-50'
  },
  {
    icon: Palette,
    title: 'Color Psychology',
    description: 'Strategic color palettes that influence mood, enhance well-being, and create emotional connections.',
    color: 'from-yellow-500 to-orange-500',
    gradient: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Lightbulb,
    title: 'Smart Lighting',
    description: 'Intelligent lighting systems that adapt to your lifestyle and transform spaces throughout the day.',
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-50 to-emerald-50'
  },
  {
    icon: Sofa,
    title: 'Custom Furniture',
    description: 'Exclusive furniture pieces crafted by master artisans to perfectly complement your unique space.',
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-50 to-purple-50'
  },
  {
    icon: Compass,
    title: 'Space Planning',
    description: 'Optimized layouts that maximize functionality while maintaining aesthetic harmony and flow.',
    color: 'from-rose-500 to-pink-500',
    gradient: 'from-rose-50 to-pink-50'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-purple-600 font-semibold text-lg">Our Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Comprehensive Design
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            From concept to completion, we deliver end-to-end design services that transform your vision into extraordinary reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm animate-fade-in overflow-hidden relative" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg font-light">
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
