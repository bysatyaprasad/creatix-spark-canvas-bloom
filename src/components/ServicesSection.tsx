
import { Home, Palette, Lightbulb, Sofa, Building, Layout } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Luxury Residential Design',
    description: 'Complete home transformations that blend sophisticated aesthetics with unparalleled comfort, creating spaces that define luxury living.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'from-amber-400 to-orange-500'
  },
  {
    icon: Building,
    title: 'Premium Commercial Spaces',
    description: 'Sophisticated office environments and retail spaces that embody professionalism while inspiring creativity and productivity.',
    gradient: 'from-orange-500/20 to-red-500/20',
    iconColor: 'from-orange-400 to-red-500'
  },
  {
    icon: Layout,
    title: 'Space Planning Excellence',
    description: 'Masterful space optimization that maximizes functionality while maintaining aesthetic integrity and flow.',
    gradient: 'from-red-500/20 to-pink-500/20',
    iconColor: 'from-red-400 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Color Mastery',
    description: 'Expert color curation that creates harmonious palettes, setting the perfect mood and atmosphere for every space.',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'from-yellow-400 to-amber-500'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Artistry',
    description: 'Strategic lighting design that transforms spaces through carefully orchestrated illumination and ambiance.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'from-green-400 to-emerald-500'
  },
  {
    icon: Sofa,
    title: 'Bespoke Furniture',
    description: 'Custom furniture pieces crafted by master artisans, designed to complement and elevate your unique interior vision.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'from-blue-400 to-indigo-500'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-full border border-amber-700/30 backdrop-blur-sm mb-8">
            <span className="text-amber-300 font-bold text-xl tracking-wide">Our Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Comprehensive</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Design Services
            </span>
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            From conceptual vision to flawless execution, we deliver end-to-end interior design services 
            that transform spaces into extraordinary experiences.
          </p>
        </div>

        {/* Premium services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl animate-fade-in overflow-hidden relative" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Premium card background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <CardContent className="p-10 text-center relative z-10">
                {/* Premium icon */}
                <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${service.iconColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-2xl`}>
                  <service.icon className="h-12 w-12 text-white" />
                </div>
                
                {/* Premium title */}
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-amber-300 transition-colors duration-500">
                  {service.title}
                </h3>
                
                {/* Premium description */}
                <p className="text-gray-300 leading-relaxed text-lg font-light">
                  {service.description}
                </p>
              </CardContent>
              
              {/* Premium border effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-amber-500/30 rounded-xl transition-all duration-700"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
