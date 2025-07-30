import { ArrowRight, MapPin, Phone, Mail, Clock, Award, Users, Star, CheckCircle, Sparkles, Shield, TrendingDown, Home, Building2, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function VizianagramInteriors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Header with Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Best Interior Designers in Vizianagaram - Creatix Interiors",
          "image": "https://creatixinteriors.com/vizianagaram-interior-design.jpg",
          "description": "Top-rated interior design company in Vizianagaram offering residential, commercial, and office interior design services. Transform your space with Vizianagaram's leading interior designers.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vizianagaram",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "535001",
            "addressCountry": "IN",
            "streetAddress": "Interior Design Studio, Vizianagaram"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.1167,
            "longitude": 83.4167
          },
          "serviceArea": [
            {
              "@type": "City",
              "name": "Vizianagaram",
              "containedIn": "Andhra Pradesh, India"
            },
            {
              "@type": "City", 
              "name": "Visakhapatnam",
              "containedIn": "Andhra Pradesh, India"
            },
            {
              "@type": "City",
              "name": "Srikakulam", 
              "containedIn": "Andhra Pradesh, India"
            }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Vizianagaram Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Interior Design Vizianagaram",
                  "description": "Complete home interior design services in Vizianagaram including modular kitchens, living rooms, bedrooms"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Interior Design Vizianagaram",
                  "description": "Office, retail, and commercial space interior design in Vizianagaram"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Modular Kitchen Design Vizianagaram",
                  "description": "Custom modular kitchen design and installation services in Vizianagaram"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "287",
            "bestRating": "5"
          },
          "priceRange": "₹₹₹",
          "telephone": "+91-9876543210",
          "url": "https://creatixinteriors.com/interior-design-vizianagaram",
          "sameAs": [
            "https://www.facebook.com/creatixinteriors",
            "https://www.instagram.com/creatixinteriors"
          ]
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
            {/* Local authority badge */}
            <div className="inline-flex flex-col xs:flex-row items-center gap-2 xs:gap-4 px-6 xs:px-8 py-3 sm:py-4 bg-white/15 backdrop-blur-lg rounded-full border border-white/30 mb-6 sm:mb-10 animate-fade-in shadow-2xl hover:bg-white/20 transition-all duration-500">
              <Award className="w-6 h-6 text-amber-400 animate-pulse" />
              <span className="text-base font-semibold tracking-wide">Vizianagaram's Most Trusted Interior Designers Since 2018</span>
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
                in Vizianagaram
              </span>
              <span className="block text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 font-light mt-4 sm:mt-6 drop-shadow-xl">
                Transform Homes & Commercial Spaces with Premium Design
              </span>
            </h1>
            
            {/* Enhanced local description */}
            <p className="text-base xs:text-lg md:text-2xl lg:text-3xl text-gray-100 mb-10 sm:mb-16 font-light max-w-2xl sm:max-w-6xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Leading interior design company in Vizianagaram specializing in 
              <span className="text-amber-300 font-semibold bg-amber-900/20 px-2 py-1 rounded-lg mx-1">residential homes, commercial offices, retail spaces, and hospitality venues</span>. 
              Serving Vizianagaram, Visakhapatnam, and surrounding areas with 287+ completed projects and guaranteed satisfaction.
            </p>

            {/* Trust indicators grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-2xl sm:max-w-6xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Vizianagaram Local Experts</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Deep understanding of local architecture, climate, and cultural preferences of Vizianagaram residents.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">287+ Happy Clients</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Trusted by families and businesses across Vizianagaram with 4.9/5 rating and 100% project completion record.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.5s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">5-Year Warranty</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Comprehensive warranty on all interior work with transparent pricing and no hidden costs policy.</p>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="animate-fade-in flex flex-col items-center w-full" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="w-full xs:w-auto max-w-[380px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-20 py-5 sm:py-10 text-lg xs:text-xl sm:text-2xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0 mb-6 sm:mb-8"
              >
                Get Free Home Visit & Quote in Vizianagaram
                <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              {/* Local testimonial with more detail */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 xs:p-8 max-w-full xs:max-w-3xl mx-auto border border-white/20 shadow-2xl">
                <p className="text-base xs:text-lg text-white/90 mb-4 xs:mb-6 italic leading-relaxed">
                  "Outstanding interior design work for our 3BHK home in Vizianagaram! They perfectly balanced traditional elements with modern functionality. Completed on time and within budget."
                </p>
                
                <div className="flex flex-col xs:flex-row items-center justify-between gap-4 text-xs xs:text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-amber-400 w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">4.9/5 Rating</span>
                  </div>
                  <span className="text-center">- Rajesh & Priya, Cantonment Area, Vizianagaram</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-40 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Complete Interior Design Services in Vizianagaram
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From concept to completion, we handle every aspect of interior design for homes, offices, retail spaces, and commercial establishments across Vizianagaram and surrounding areas.
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Residential Services */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1200&auto=format&fit=crop')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Residential Interior Design</h3>
                  <p className="text-gray-200">Complete home transformation services</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Transform your Vizianagaram home with our comprehensive residential interior design services. We specialize in creating beautiful, functional spaces that reflect your lifestyle and preferences.
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
                <div className="bg-blue-50 p-4 rounded-2xl">
                  <p className="text-blue-800 font-semibold">Starting from ₹1,50,000 for 2BHK homes in Vizianagaram</p>
                </div>
              </div>
            </div>

            {/* Commercial Services */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1200&auto=format&fit=crop')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Commercial Interior Design</h3>
                  <p className="text-gray-200">Professional workspace solutions</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Elevate your business image with professional commercial interior design in Vizianagaram. Create productive work environments that impress clients and motivate employees.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Office Interior Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Retail Showroom Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Restaurant Interiors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Medical Clinic Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Hotel & Guest House</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Educational Institutions</span>
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-2xl">
                  <p className="text-emerald-800 font-semibold">Free site visit & consultation for commercial projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Turnkey Projects</h3>
              <p className="text-gray-600 leading-relaxed">Complete project management from design to final handover with single-point responsibility.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">3D Visualization</h3>
              <p className="text-gray-600 leading-relaxed">See your space before execution with photorealistic 3D renders and virtual walkthroughs.</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Premium Materials</h3>
              <p className="text-gray-600 leading-relaxed">Sourced directly from manufacturers ensuring quality, durability, and competitive pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Diverse Images */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Our Vizianagaram Interior Design Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our completed projects across Vizianagaram - from luxury homes in Cantonment area to modern offices in the business district. Each project reflects our commitment to excellence and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1000&auto=format&fit=crop",
                category: "Residential",
                location: "Cantonment Area"
              },
              {
                image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000&auto=format&fit=crop",
                category: "Commercial Office",
                location: "Business District"
              },
              {
                image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?q=80&w=1000&auto=format&fit=crop",
                category: "Retail Showroom",
                location: "Main Road"
              },
              {
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000&auto=format&fit=crop",
                category: "Restaurant Interior",
                location: "Fort Area"
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
                category: "Modern Villa",
                location: "Suburban Vizianagaram"
              },
              {
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
                category: "Co-working Space",
                location: "IT Hub Area"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                <div 
                  className="aspect-[4/3] bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="text-lg font-bold text-white mb-1">{project.category}</h3>
                      <p className="text-gray-200 text-sm">{project.location}, Vizianagaram</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 text-xl rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View Complete Portfolio
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-900 to-indigo-800 bg-clip-text text-transparent">
              Why Vizianagaram Trusts Us for Interior Design
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              5+ years of transforming spaces in Vizianagaram with unmatched expertise, quality, and customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Local Presence</h3>
              <p className="text-gray-600">Physical studio in Vizianagaram with local team understanding regional preferences and climate requirements.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">On-Time Delivery</h3>
              <p className="text-gray-600">100% track record of completing projects on schedule with detailed timeline management and regular updates.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden costs, detailed quotations, and flexible payment options. What you see is what you pay.</p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">5-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all work including materials, installation, and craftsmanship with prompt service support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Interior Design Process in Vizianagaram
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From initial consultation to final handover, experience our systematic approach that ensures quality, transparency, and satisfaction at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "Home visit in Vizianagaram to understand requirements, budget, and timeline. Detailed discussion about your vision and preferences.",
                icon: <Users className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "3D visualization, mood boards, and detailed layouts. Material selection and budget planning with transparent quotation.",
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Execution Phase",
                description: "Professional installation with quality materials. Regular progress updates and strict timeline adherence throughout the project.",
                icon: <Building2 className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Final Handover",
                description: "Quality inspection, final walkthrough, and documentation. 5-year warranty activation and maintenance guidelines provided.",
                icon: <Award className="w-8 h-8" />
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-0"></div>
                )}
                <div className="relative z-10 text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {process.icon}
                  </div>
                  <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-bold rounded-full mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              What Vizianagaram Clients Say About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Real experiences from real clients across Vizianagaram who trusted us with their dream spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Suresh & Lakshmi",
                location: "Cantonment Area, Vizianagaram",
                project: "3BHK Villa Interior",
                review: "Absolutely stunning work! They transformed our traditional home into a perfect blend of modern comfort and cultural aesthetics. The team understood our needs perfectly and delivered beyond expectations.",
                rating: 5
              },
              {
                name: "Dr. Ramesh Clinic",
                location: "Main Road, Vizianagaram", 
                project: "Medical Clinic Interior",
                review: "Professional, clean, and patient-friendly design. The layout optimization increased our efficiency significantly. Highly recommend for commercial spaces in Vizianagaram.",
                rating: 5
              },
              {
                name: "Priya Restaurant",
                location: "Fort Area, Vizianagaram",
                project: "Restaurant Interior Design",
                review: "The ambiance they created for our restaurant perfectly captures Vizianagaram's cultural essence while being thoroughly modern. Customer compliments have increased dramatically!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                  <p className="text-sm text-blue-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about interior design services in Vizianagaram
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the cost of interior design in Vizianagaram?",
                a: "Interior design costs in Vizianagaram start from ₹1,50,000 for a 2BHK apartment and ₹2,50,000 for a 3BHK. Commercial projects are quoted based on square footage and requirements. We provide detailed quotations with no hidden costs."
              },
              {
                q: "How long does an interior design project take in Vizianagaram?",
                a: "Residential projects typically take 45-60 days for complete execution, while commercial projects range from 30-90 days depending on size and complexity. We provide detailed timelines during consultation."
              },
              {
                q: "Do you provide 3D visualization for Vizianagaram projects?",
                a: "Yes, we provide photorealistic 3D renders and virtual walkthroughs for all projects in Vizianagaram. This helps you visualize the final result before execution begins."
              },
              {
                q: "What areas in Vizianagaram do you serve?",
                a: "We serve entire Vizianagaram including Cantonment, Fort Area, Main Road, Business District, and suburban areas. We also extend services to nearby areas like Visakhapatnam and Srikakulam."
              },
              {
                q: "Do you offer warranty on interior work?",
                a: "Yes, we provide a comprehensive 5-year warranty on all interior work including materials, installation, and craftsmanship. Our local presence ensures prompt service support."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact & CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Contact Form Side */}
              <div className="p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Start Your Vizianagaram Interior Design Journey
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Get a free consultation and quote for your interior design project in Vizianagaram. Our team will visit your space and provide detailed planning.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50">
                    <Phone className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Call for Immediate Response</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50">
                    <Mail className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Your Requirements</p>
                      <p className="text-gray-600">vizag@creatixinteriors.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50">
                    <MapPin className="w-8 h-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Visit Our Vizianagaram Studio</p>
                      <p className="text-gray-600">Interior Design Studio, Vizianagaram</p>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-xl rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-6">
                  Book Free Home Visit in Vizianagaram
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Free consultation • Same day response • No obligation</span>
                </div>
              </div>

              {/* Image/Info Side */}
              <div 
                className="relative bg-cover bg-center min-h-[500px] lg:min-h-full"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800&auto=format&fit=crop')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 to-orange-900/80"></div>
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-6">Join 287+ Happy Families in Vizianagaram</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-300">287+</div>
                        <div className="text-sm opacity-90">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-300">4.9</div>
                        <div className="text-sm opacity-90">Average Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-300">5+</div>
                        <div className="text-sm opacity-90">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-amber-300">100%</div>
                        <div className="text-sm opacity-90">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}