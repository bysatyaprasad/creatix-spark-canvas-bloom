import { ArrowRight, MapPin, Phone, Mail, Clock, Award, Users, Star, CheckCircle, Sparkles, Shield, TrendingDown, Home, Building2, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function VizianagramInteriors() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Header with Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Creatix Interiors Vizianagaram",
          "image": "https://creatixinteriors.com/vizianagaram-interior-design.jpg",
          "description": "Premier interior design services in Vizianagaram. Specializing in residential, commercial, and office interiors with transparent pricing and exceptional quality.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vizianagaram",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.1167,
            "longitude": 83.4167
          },
          "serviceArea": {
            "@type": "City",
            "name": "Vizianagaram",
            "containedIn": "Andhra Pradesh, India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Interior Design Vizianagaram"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Interior Design Vizianagaram"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          },
          "priceRange": "₹₹₹"
        })}
      </script>

      {/* Enhanced Hero Section - Similar to Homepage */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-16 pb-8 sm:pt-28 sm:pb-16"
        style={{ 
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.85) 100%),
            url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1974&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-400/15 to-orange-500/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Local trust badge */}
            <div className="inline-flex flex-col xs:flex-row items-center gap-2 xs:gap-4 px-6 xs:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-lg rounded-full border border-white/30 mb-6 sm:mb-10 animate-fade-in shadow-2xl hover:bg-white/20 transition-all duration-500">
              <MapPin className="w-6 h-6 text-amber-400 animate-pulse" />
              <span className="text-base font-semibold tracking-wide">Vizianagaram's #1 Interior Design Studio</span>
              <div className="flex -space-x-2 xs:-space-x-3 mt-2 xs:mt-0">
                <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>

            {/* Enhanced headline */}
            <h1 className="font-playfair text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[1] mb-6 sm:mb-10 animate-fade-in">
              <span className="block text-white/95 drop-shadow-2xl">Transform Vizianagaram</span>
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent animate-pulse-glow drop-shadow-2xl text-2xl xs:text-3xl sm:text-5xl md:text-7xl">
                Spaces with Style.
              </span>
              <span className="block text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 font-light mt-4 sm:mt-6 drop-shadow-xl">
                Local Expertise. Global Standards.
              </span>
            </h1>
            
            {/* Enhanced description */}
            <p className="text-base xs:text-lg md:text-2xl lg:text-3xl text-gray-100 mb-10 sm:mb-16 font-light max-w-2xl sm:max-w-5xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Vizianagaram's premier interior design studio bringing world-class design to your 
              <span className="text-amber-300 font-semibold bg-amber-900/20 px-2 py-1 rounded-lg"> homes, offices, and commercial spaces</span>. 
              Complete transparency in pricing, process, and timeline—experience the difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-2xl sm:max-w-6xl mx-auto">
              {/* Local Expertise Card */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Local Vizianagaram Expertise</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Deep understanding of Vizianagaram's architectural heritage and modern lifestyle needs.</p>
              </div>
              
              {/* Same transparent pricing and quality cards from homepage */}
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Transparent Pricing</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Clear breakdowns of costs, timelines, and processes. Know exactly what you're investing in.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.5s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Quality Guaranteed</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Premium materials and expert craftsmanship with comprehensive warranties on all work.</p>
              </div>
            </div>

            {/* CTA with local contact */}
            <div className="animate-fade-in flex flex-col items-center w-full" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="w-full xs:w-auto max-w-[340px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-20 py-5 sm:py-10 text-lg xs:text-xl sm:text-2xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0 mb-6 sm:mb-8"
              >
                Get Free Vizianagaram Consultation
                <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              {/* Local testimonial */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 xs:p-8 max-w-full xs:max-w-2xl mx-auto border border-white/20 shadow-2xl">
                <p className="text-base xs:text-lg text-white/90 mb-4 xs:mb-6 italic leading-relaxed">
                  "Exceptional work in our Vizianagaram home! The team understood our local preferences perfectly while delivering modern design."
                </p>
                
                <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6 text-xs xs:text-sm text-white/70">
                  <div className="flex items-center gap-1 xs:gap-2 mb-2 xs:mb-0">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-amber-400 text-sm xs:text-lg fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <span className="hidden xs:inline">•</span>
                  <span>150+ Vizianagaram projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-40 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Services Section with Beautiful Design */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Interior Design Services in Vizianagaram
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From traditional homes to modern commercial spaces, we bring Vizianagaram's unique character into every design while embracing contemporary aesthetics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Residential Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Residential Interiors</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete home transformations that honor Vizianagaram's heritage while embracing modern living. From traditional courtyard homes to contemporary apartments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Modular Kitchen Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Living & Bedroom Interiors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Traditional-Modern Fusion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Commercial Spaces</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional office designs, retail spaces, and commercial establishments that reflect Vizianagaram's business culture and growth potential.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Office Interior Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Retail & Showroom Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Business Consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospitality Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Hospitality & Retail</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Restaurants, hotels, and retail spaces that capture Vizianagaram's welcoming spirit while creating memorable customer experiences.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Restaurant Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Hotel & Guest House</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Cultural Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Local Projects */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vizianagaram Portfolio Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our recent projects across Vizianagaram - from heritage home renovations to modern commercial spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
                title: "Traditional Vizianagaram Villa"
              },
              {
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
                title: "Modern Commercial Office"
              },
              {
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
                title: "Luxury Restaurant Design"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <div 
                  className="aspect-[4/3] bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">Vizianagaram, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Ready to Transform Your Vizianagaram Space?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join 150+ satisfied clients in Vizianagaram who trusted us with their dream spaces. Get your free consultation today.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <Phone className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Call Directly</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50">
                <Mail className="w-8 h-8 text-emerald-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600">vizag@creatixinteriors.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50">
                <MapPin className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Visit Our Studio</p>
                  <p className="text-gray-600">Vizianagaram, AP</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 text-xl rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Your Free Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Free consultation • No obligation • Quick response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}