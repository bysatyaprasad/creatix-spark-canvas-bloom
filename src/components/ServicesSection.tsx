
import { Home, Palette, Lightbulb, Sofa, Building, Layout, Shield, DollarSign, Award } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Luxury Residential Design',
    description: 'Transform your home with premium materials sourced directly from manufacturers. No middleman markups—just honest pricing for exceptional quality that lasts decades.',
    color: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50'
  },
  {
    icon: Building,
    title: 'Premium Commercial Spaces',
    description: 'Create impressive offices and retail spaces using commercial-grade materials at wholesale prices. Your business deserves quality that reflects its values.',
    color: 'from-blue-400 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50'
  },
  {
    icon: Layout,
    title: 'Smart Space Planning',
    description: 'Maximize every square foot with intelligent design. We optimize layouts using premium fixtures and fittings—all at transparent, factory-direct pricing.',
    color: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50'
  },
  {
    icon: Palette,
    title: 'Premium Paint & Finishes',
    description: 'Access high-end paints, wallpapers, and finishes at wholesale rates. Why pay retail when you can get the same quality for 40% less?',
    color: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    icon: Lightbulb,
    title: 'Designer Lighting Solutions',
    description: 'Illuminate your space with premium lighting fixtures sourced directly from manufacturers. Luxury lighting without the luxury markup.',
    color: 'from-yellow-400 to-amber-500',
    bgGradient: 'from-yellow-50 to-amber-50'
  },
  {
    icon: Sofa,
    title: 'Custom Premium Furniture',
    description: 'Handcrafted furniture using the finest materials—solid wood, genuine leather, premium fabrics. Quality that other designers charge double for.',
    color: 'from-rose-400 to-red-500',
    bgGradient: 'from-rose-50 to-red-50'
  }
];

const trustPoints = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Every material comes with manufacturer warranty. We stand behind what we source.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'See exactly what materials cost. No hidden fees, no inflated prices—just honest value.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Award,
    title: 'Premium Sources',
    description: 'Direct partnerships with top manufacturers. Same materials, better prices.',
    color: 'from-purple-500 to-violet-600'
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
        {/* Value Proposition Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 rounded-full text-sm font-bold text-red-700 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Stop Overpaying for Materials
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Pay More for
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              The Same Quality?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Other interior designers mark up materials by <strong className="text-red-600">200-300%</strong>. 
            We source premium materials directly from manufacturers and pass the savings to you. 
            <span className="text-green-600 font-semibold">Same quality, honest prices.</span>
          </p>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {trustPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 mx-auto`}>
                  <point.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Premium Materials, Fair Prices
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive
            <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Design Services
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From premium tiles to designer furniture—we source everything at wholesale prices. 
            No markups, no compromises, just exceptional quality at honest value.
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

        {/* Bottom CTA with Strong Value Prop */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 border border-amber-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
              Ready to Save 40-60% on Premium Materials?
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Get a detailed quote showing exactly what premium materials cost—no inflated prices, 
              no hidden fees. See the difference transparent pricing makes.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Your Transparent Quote
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="text-sm text-gray-500 mt-4 italic">
              "Finally, an interior designer who doesn't overcharge for materials!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
