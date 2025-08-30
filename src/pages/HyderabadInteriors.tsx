import { ArrowRight, MapPin, Phone, Clock, Award, Users, Star, CheckCircle, Sparkles, Shield, TrendingDown, Home, Building2, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useContactModal } from '@/components/ui/contact-modal';

export default function HyderabadInteriors() {
  const { openModal, ContactModal } = useContactModal();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Header with Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Best Interior Designers in Hyderabad - Creatix Interiors",
          "image": "https://creatixinteriors.com/hyderabad-interior-design.jpg",
          "description": "Top-rated interior design company in Hyderabad offering residential, commercial, and office interior design services. Transform your space with Hyderabad's leading interior designers.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.3850,
            "longitude": 78.4867
          },
          "serviceArea": [
            {
              "@type": "City",
              "name": "Hyderabad",
              "containedIn": "Telangana, India"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Hyderabad Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Interior Design Hyderabad",
                  "description": "Complete home interior design services in Hyderabad including luxury apartments, villas, and independent houses"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Interior Design Hyderabad",
                  "description": "Corporate office, IT company, and commercial space interior design in Hyderabad"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "650",
            "bestRating": "5"
          },
          "telephone": "+91-7842640744",
          "url": "https://creatixinteriors.com/interior-design-hyderabad"
        })}
      </script>

      {/* Hero Section - Premium Design */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-16 pb-8 sm:pt-28 sm:pb-16"
        style={{ 
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.85) 100%),
            url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1974&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-400/15 to-orange-500/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/15 to-teal-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Trust badge */}
            <div className="inline-flex flex-col xs:flex-row items-center gap-2 xs:gap-4 px-6 xs:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-lg rounded-full border border-white/30 mb-6 sm:mb-10 animate-fade-in shadow-2xl hover:bg-white/20 transition-all duration-500">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              <span className="text-base font-semibold tracking-wide">Trusted by 500+ Happy Clients in Hyderabad</span>
              <div className="flex -space-x-2 xs:-space-x-3 mt-2 xs:mt-0">
                <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>

            {/* SEO-optimized headline */}
            <h1 className="font-playfair text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[1] mb-6 sm:mb-10 animate-fade-in">
              <span className="block text-white/95 drop-shadow-2xl">Best Interior Designers</span>
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent animate-pulse-glow drop-shadow-2xl text-2xl xs:text-3xl sm:text-5xl md:text-7xl">
                in Hyderabad
              </span>
              <span className="block text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 font-light mt-4 sm:mt-6 drop-shadow-xl">
                Transform Your Space, Transparent Process, Exceptional Results
              </span>
            </h1>
            
            {/* Enhanced local description */}
            <p className="text-base xs:text-lg md:text-2xl lg:text-3xl text-gray-100 mb-10 sm:mb-16 font-light max-w-2xl sm:max-w-6xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Experience complete interior transformation in Hyderabad with our end-to-end design and build services for homes, offices, and commercial spaces. 
              From concept to completion, we deliver <span className="text-amber-300 font-semibold bg-amber-900/20 px-2 py-1 rounded-lg">stunning interiors</span> with 
              full transparency in pricing, process, and timeline—no surprises, just results.
            </p>

            {/* Value proposition cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-2xl sm:max-w-6xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">End-to-End Service</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Complete design and execution from concept to final installation. One team, seamless process.</p>
              </div>
              
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

            {/* Enhanced CTA with Call/WhatsApp */}
            <div className="animate-fade-in flex flex-col items-center w-full gap-4" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="w-full xs:w-auto max-w-[340px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0"
                  onClick={() => window.open('tel:+917842640744')}
                >
                  Call +91 7842640744
                  <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                
                <Button 
                  size="lg" 
                  className="w-full xs:w-auto max-w-[340px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0"
                  onClick={() => window.open('tel:+916304746801')}
                >
                  Call +91 6304746801
                  <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full xs:w-auto max-w-[340px] sm:max-w-none border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl backdrop-blur-lg"
                  onClick={() => window.open('https://wa.me/917842640744', '_blank')}
                >
                  WhatsApp +91 7842640744
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full xs:w-auto max-w-[340px] sm:max-w-none border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 px-8 xs:px-12 sm:px-16 py-5 sm:py-8 text-lg xs:text-xl sm:text-xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl backdrop-blur-lg"
                  onClick={() => window.open('https://wa.me/916304746801', '_blank')}
                >
                  WhatsApp +91 6304746801
                </Button>
              </div>
              
              {/* Enhanced testimonial */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 xs:p-8 max-w-full xs:max-w-2xl mx-auto border border-white/20 shadow-2xl">
                <p className="text-base xs:text-lg text-white/90 mb-4 xs:mb-6 italic leading-relaxed">
                  "Finally, a design service that delivers exactly what they promise. The transparency throughout was refreshing!"
                </p>
                
                <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6 text-xs xs:text-sm text-white/70">
                  <div className="flex items-center gap-1 xs:gap-2 mb-2 xs:mb-0">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm xs:text-lg">★</span>
                      ))}
                    </div>
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <span className="hidden xs:inline">•</span>
                  <span>500+ verified reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-40 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Complete Interior Design Services in Hyderabad
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From concept to completion, we deliver complete interior design solutions for homes, apartments, and commercial spaces across Hyderabad. Our team travels to your location with transparent pricing and premium materials.
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Residential Services */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Residential Interior Design</h3>
                  <p className="text-gray-200">Complete home transformation services</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Transform your Hyderabad home with our proven interior design process. From 3D visualization to final installation, we ensure every detail meets your vision with our transparent workflow and quality guarantee.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Modular Kitchen Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Living Room Interiors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Master Bedroom Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Children's Room</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Pooja Room Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Bathroom Renovation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Services */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Commercial Interior Design</h3>
                  <p className="text-gray-200">Professional workspace solutions</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Professional commercial interior design services in Hyderabad. We create functional, impressive business spaces that enhance productivity and leave lasting impressions on clients and employees.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Office Interior Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Retail Space Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Restaurant Interiors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Healthcare Spaces</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Educational Facilities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Hospitality Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Services Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 group hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Residential Experts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Specialized in transforming homes with modern designs that reflect your personality while maintaining functionality and comfort.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 group hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Commercial Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Creating professional environments that boost productivity, enhance brand image, and provide exceptional experiences for employees and clients.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 group hover:shadow-xl transition-all duration-500 border-0 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Retail & Hospitality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Designing spaces that attract customers, enhance experiences, and drive business success through strategic layout and aesthetic appeal.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Transparent Process
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From initial consultation to final installation, every step is clearly defined with transparent pricing and regular updates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "We visit your space in Hyderabad, understand your needs, and provide honest advice with transparent pricing.",
                icon: Phone
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Create detailed 3D designs, material selection, and comprehensive project timeline with fixed costs.",
                icon: Sparkles
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional execution with quality materials, regular updates, and adherence to agreed timelines.",
                icon: Users
              },
              {
                step: "04",
                title: "Final Handover",
                description: "Complete installation, quality check, and handover with warranty and maintenance guidelines.",
                icon: Award
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 group hover:shadow-xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-amber-100 transition-colors duration-500">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Us for Your Hyderabad Interior Project?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "Transparent Pricing",
                    description: "No hidden costs, no surprise charges. Every expense is clearly outlined before we begin.",
                    icon: TrendingDown
                  },
                  {
                    title: "Quality Guarantee", 
                    description: "Premium materials and expert craftsmanship backed by comprehensive warranties.",
                    icon: Shield
                  },
                  {
                    title: "End-to-End Service",
                    description: "From design to installation, we handle everything so you don't have to coordinate with multiple vendors.",
                    icon: CheckCircle
                  },
                  {
                    title: "Proven Track Record",
                    description: "500+ successful projects with 4.9/5 customer satisfaction rating across all service areas.",
                    icon: Star
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Join hundreds of satisfied customers in Hyderabad who have transformed their spaces with our transparent process and quality guarantee.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Free consultation and site visit",
                    "Detailed project quote with timeline", 
                    "3D design visualization",
                    "Premium materials at transparent prices",
                    "5-year comprehensive warranty"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 py-6 text-xl rounded-2xl font-bold group transition-all duration-500 transform hover:scale-105 shadow-xl"
                    onClick={openModal}
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-orange-500 text-orange-600 bg-orange-50 hover:bg-orange-100 px-8 py-6 text-xl rounded-2xl font-bold group transition-all duration-500 transform hover:scale-105 shadow-xl"
                    onClick={openModal}
                  >
                    Get Transparent Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-playfair">
              Transform Your Space Today
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Ready to experience the difference of transparent pricing and quality craftsmanship? Let's discuss your project.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/15 backdrop-blur-xl border-white/30 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <Phone className="h-16 w-16 text-white mx-auto mb-8" />
                <h3 className="text-4xl font-bold text-white mb-6 font-playfair">Call Us Now</h3>
                <p className="text-white/90 text-2xl font-medium mb-2">+91 7842640744</p>
                <p className="text-white/90 text-2xl font-medium mb-4">+91 6304746801</p>
                <p className="text-white/70 text-lg">Available 9 AM - 8 PM | Free Consultation</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 text-lg italic mb-2">"Exceptional quality, honest pricing, and transparent service."</p>
              <p className="text-white/70 text-sm">4.9/5 from 500+ verified customers</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactModal triggerText="Get Free Consultation" />
    </div>
  );
}