import { Home, Palette, Lightbulb, Sofa, Building, Layout, Shield, DollarSign, Award, Star, Users, Clock, ArrowRight } from 'lucide-react';
import { useContactModal } from '@/components/ui/contact-modal';

const services = [
  {
    icon: Home,
    title: 'Luxury Residential Design',
    description: 'Transform your home with carefully curated premium materials sourced through our trusted supplier network. Experience quality that lasts decades without the typical designer markups.',
    color: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    accentColor: 'amber'
  },
  {
    icon: Building,
    title: 'Premium Commercial Spaces',
    description: 'Create impressive offices and retail spaces using commercial-grade materials at fair prices. Your business deserves quality that reflects its professional values.',
    color: 'from-blue-400 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    accentColor: 'blue'
  },
  {
    icon: Layout,
    title: 'Smart Space Planning',
    description: 'Maximize every square foot with intelligent design solutions. We optimize layouts using premium fixtures and fittings—all at transparent, honest pricing.',
    color: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    accentColor: 'emerald'
  },
  {
    icon: Palette,
    title: 'Premium Paint & Finishes',
    description: 'Access high-end paints, wallpapers, and finishes through our supplier partnerships. Quality finishes without the typical retail markup inflation.',
    color: 'from-purple-400 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    accentColor: 'purple'
  },
  {
    icon: Lightbulb,
    title: 'Designer Lighting Solutions',
    description: 'Illuminate your space with premium lighting fixtures sourced through our network. Luxury lighting without paying designer-inflated prices.',
    color: 'from-yellow-400 to-amber-500',
    bgGradient: 'from-yellow-50 to-amber-50',
    accentColor: 'yellow'
  },
  {
    icon: Sofa,
    title: 'Custom Premium Furniture',
    description: 'Handcrafted furniture using the finest materials—solid wood, genuine leather, premium fabrics. Exceptional quality without the excessive markup other designers charge.',
    color: 'from-rose-400 to-red-500',
    bgGradient: 'from-rose-50 to-red-50',
    accentColor: 'rose'
  }
];

const trustPoints = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every material is vetted for quality and durability. We stand behind what we source.',
    color: 'from-green-500 to-emerald-600',
    stats: '500+ Projects'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'See exactly what materials cost. No hidden fees, no inflated prices—just honest value.',
    color: 'from-blue-500 to-cyan-600',
    stats: 'Save 40-60%'
  },
  {
    icon: Award,
    title: 'Trusted Network',
    description: 'Established relationships with quality suppliers. Same materials, better prices.',
    color: 'from-purple-500 to-violet-600',
    stats: '50+ Suppliers'
  }
];

const testimonialHighlight = {
  quote: "I saved over ₹2 lakhs compared to other designers, and the quality is exactly what they promised. No hidden costs, no surprises.",
  author: "Priya Sharma",
  location: "Mumbai",
  project: "3BHK Apartment"
};

export default function ServicesSection() {
  const { openModal, ContactModal } = useContactModal();
  
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Problem/Solution Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-red-50 border border-red-200 rounded-full text-red-700 mb-8">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-sm">STOP Overpaying for Interior Materials</span>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block text-gray-800">Why Pay</span>
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              200-300%
            </span>
            <span className="block text-gray-800">for the Same Quality?</span>
          </h2>
          
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Most interior designers mark up materials by <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold">200-300%</span>. 
              We source premium materials through our trusted supplier network and pass the savings to you. 
              <span className="text-emerald-600 font-semibold block mt-2">Same quality, honest pricing.</span>
            </p>

            {/* Testimonial highlight */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{testimonialHighlight.quote}"
              </blockquote>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{testimonialHighlight.author}</span> • {testimonialHighlight.location} • {testimonialHighlight.project}
              </div>
            </div>
          </div>

          {/* Enhanced trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {trustPoints.map((point, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{point.stats}</div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full text-gray-600 mb-8">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Premium Materials, Fair Prices</span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Comprehensive</span>
            <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Design Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From premium tiles to designer furniture—we source everything through our trusted network. 
            <span className="text-emerald-600 font-semibold">No inflated markups, no compromises, just exceptional quality at honest value.</span>
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-gray-100 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with enhanced styling */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-gray-800 transition-colors leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-base">
                  {service.description}
                </p>
              </div>

              {/* Enhanced decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-full blur-xl`}></div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-full blur-lg`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="text-center animate-fade-in">
          <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl p-16 border border-amber-200 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Users className="w-6 h-6 text-amber-600" />
                <span className="text-amber-700 font-semibold">500+ Happy Customers</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair leading-tight">
                Ready to Save 40-60% on 
                <span className="block text-amber-600">Premium Materials?</span>
              </h3>
              
              <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                Get a detailed, transparent quote showing exactly what premium materials cost—no inflated prices, 
                no hidden fees, no surprises. Experience the difference honest pricing makes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <button 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25"
                  onClick={openModal}
                >
                  Get Your Transparent Quote
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <button 
                  className="inline-flex items-center gap-3 border-2 border-amber-500 text-amber-600 bg-amber-50 hover:bg-amber-100 px-8 py-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={openModal}
                >
                  Schedule Free Consultation
                </button>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Free consultation • No obligation</span>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-sm text-gray-600 italic mb-2">
                  "Finally, an interior designer who doesn't overcharge for materials! The transparency is refreshing."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
                  <span className="text-xs text-gray-500">Verified Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal triggerText="Get Your Transparent Quote" />
    </section>
  );
}
