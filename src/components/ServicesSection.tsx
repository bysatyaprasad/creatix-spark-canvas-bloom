
import { Home, Palette, Lightbulb, Sofa, Building, Layout } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Luxury Residential Design',
    description: 'Complete home transformations that blend sophisticated aesthetics with unparalleled comfort, creating spaces that define luxury living.',
    color: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50'
  },
  {
    icon: Building,
    title: 'Premium Commercial Spaces',
    description: 'Sophisticated office environments and retail spaces that embody professionalism while inspiring creativity and productivity.',
    color: 'from-blue-400 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50'
  },
  {
    icon: Layout,
    title: 'Space Planning Excellence',
    description: 'Masterful space optimization that maximizes functionality while maintaining aesthetic integrity and flow.',
    color: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  {
    icon: Palette,
    title: 'Color Mastery',
    description: 'Expert color curation that creates harmonious palettes, setting the perfect mood and atmosphere for every space.',
    color: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Artistry',
    description: 'Strategic lighting design that transforms spaces through carefully orchestrated illumination and ambiance.',
    color: 'from-yellow-400 to-amber-500',
    bgGradient: 'from-yellow-50 to-amber-50'
  },
  {
    icon: Sofa,
    title: 'Bespoke Furniture',
    description: 'Custom furniture pieces crafted by master artisans, designed to complement and elevate your unique interior vision.',
    color: 'from-rose-400 to-red-500',
    bgGradient: 'from-rose-50 to-red-50'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Our Expertise
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive
            <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Design Services
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From conceptual vision to flawless execution, we deliver end-to-end interior design services 
            that transform spaces into extraordinary experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-3xl rounded-tr-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your space with our expertise?
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
