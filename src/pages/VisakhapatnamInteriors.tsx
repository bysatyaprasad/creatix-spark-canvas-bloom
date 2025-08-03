import { ArrowRight, MapPin, Phone, Mail, Clock, Award, Users, Star, CheckCircle, Sparkles, Shield, TrendingDown, Home, Building2, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function VisakhapatnamInteriors() {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced SEO Header with Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Best Interior Designers in Visakhapatnam - Creatix Interiors",
          "image": "https://creatixinteriors.com/visakhapatnam-interior-design.jpg",
          "description": "Top-rated interior design company in Visakhapatnam offering residential, commercial, and office interior design services. Transform your space with Visakhapatnam's leading interior designers.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Visakhapatnam",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "530001",
            "addressCountry": "IN",
            "streetAddress": "Interior Design Studio, Visakhapatnam"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.6868,
            "longitude": 83.2185
          },
          "serviceArea": [
            {
              "@type": "City",
              "name": "Visakhapatnam",
              "containedIn": "Andhra Pradesh, India"
            },
            {
              "@type": "City", 
              "name": "Vizianagaram",
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
            "name": "Visakhapatnam Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Interior Design Visakhapatnam",
                  "description": "Complete home interior design services in Visakhapatnam including modular kitchens, living rooms, bedrooms"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Interior Design Visakhapatnam",
                  "description": "Office, retail, and commercial space interior design in Visakhapatnam"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Modular Kitchen Design Visakhapatnam",
                  "description": "Custom modular kitchen design and installation services in Visakhapatnam"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "412",
            "bestRating": "5"
          },
          "priceRange": "₹₹₹",
          "telephone": "+91-7842640744",
          "url": "https://creatixinteriors.com/interior-design-visakhapatnam",
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
            url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop')
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
              <span className="text-base font-semibold tracking-wide">Serving Visakhapatnam with Premium Interior Design</span>
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
                in Visakhapatnam
              </span>
              <span className="block text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 font-light mt-4 sm:mt-6 drop-shadow-xl">
                Transform Coastal Homes & Modern Offices
              </span>
            </h1>
            
            {/* Enhanced local description */}
            <p className="text-base xs:text-lg md:text-2xl lg:text-3xl text-gray-100 mb-10 sm:mb-16 font-light max-w-2xl sm:max-w-6xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Expert interior designers serving Visakhapatnam with 
              <span className="text-amber-300 font-semibold bg-amber-900/20 px-2 py-1 rounded-lg mx-1">complete home transformations, coastal-friendly designs, modern apartments, and commercial spaces</span>. 
              We travel to your location for consultations and project execution with our transparent process, quality guarantee, and no-hidden-costs promise.
            </p>

            {/* Trust indicators grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-2xl sm:max-w-6xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Coastal Design Experts</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Specialized in coastal living designs, humidity-resistant materials, and modern lifestyle preferences.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">500+ Happy Clients</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Trusted by families, professionals, and businesses across regions with 4.9/5 rating and transparent process.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.5s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">5-Year Warranty</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Comprehensive warranty on all interior work with transparent pricing and quality assurance.</p>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="animate-fade-in flex flex-col items-center w-full" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="w-full xs:w-auto max-w-[380px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-20 py-5 sm:py-10 text-lg xs:text-xl sm:text-2xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0 mb-6 sm:mb-8"
              >
                Get Free Home Visit & Quote in Visakhapatnam
                <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              {/* Local testimonial with more detail */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 xs:p-8 max-w-full xs:max-w-3xl mx-auto border border-white/20 shadow-2xl">
                <p className="text-base xs:text-lg text-white/90 mb-4 xs:mb-6 italic leading-relaxed">
                  "Exceptional interior design for our beachfront apartment in Visakhapatnam! They understood our coastal lifestyle and created a modern yet functional space. Highly recommend!"
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
                  <span className="text-center">- Vikram & Sanya, Beach Road, Visakhapatnam</span>
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
              Complete Interior Design Services in Visakhapatnam
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From concept to completion, we deliver complete interior design solutions for coastal homes, apartments, commercial spaces across Visakhapatnam. Our team travels to your location with transparent pricing and quality materials.
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Residential Services */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Coastal Residential Design</h3>
                  <p className="text-gray-200">Homes designed for Visakhapatnam's coastal lifestyle</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Transform your Visakhapatnam home with our proven coastal-friendly design process. From 3D visualization to final installation, we ensure every detail meets your vision with our transparent workflow and quality guarantee.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Coastal Kitchen Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Beachfront Living Rooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Humidity-Resistant Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Sea-View Balconies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Tropical Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Coastal Storage Solutions</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl">
                  <p className="text-blue-800 font-semibold">Transparent pricing with detailed quotes - Contact us for personalized estimates</p>
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
                  <h3 className="text-2xl font-bold text-white mb-2">IT & Commercial Spaces</h3>
                  <p className="text-gray-200">Modern offices for Visakhapatnam's tech sector</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Professional commercial interior design services in Visakhapatnam. We create functional, impressive business spaces that enhance productivity and leave lasting impressions on clients and employees.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">IT Office Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Corporate Meeting Rooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Reception Areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Retail Showrooms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Restaurant Interiors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Hospitality Design</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl">
                  <p className="text-green-800 font-semibold">Free consultation and detailed quote available - Contact us for personalized pricing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modular Kitchen Design",
                description: "Coastal-friendly kitchens with premium materials and smart storage solutions. Designed to withstand humidity and salt air.",
                icon: <Home className="w-8 h-8" />,
                price: "Contact for Quote"
              },
              {
                title: "Office Interior Design",
                description: "Professional workspace design for Visakhapatnam's growing IT and business sector. Modern, efficient, impressive.",
                icon: <Building2 className="w-8 h-8" />,
                price: "Contact for Quote"
              },
              {
                title: "Retail & Hospitality",
                description: "Create memorable customer experiences with thoughtfully designed retail spaces and hospitality venues.",
                icon: <Store className="w-8 h-8" />,
                price: "Contact for Quote"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="bg-blue-50 p-3 rounded-xl">
                  <span className="text-blue-700 font-semibold text-sm">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose Creatix Interiors for Your Visakhapatnam Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We understand Visakhapatnam's unique coastal environment and modern business needs. Premium quality without inflated prices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">Coastal Expertise Meets Modern Design</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Climate Understanding</h4>
                    <p className="text-gray-600">6+ years designing for Visakhapatnam's coastal climate. Humidity-resistant materials and salt-air friendly finishes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">IT Sector Experience</h4>
                    <p className="text-gray-600">Designed 50+ offices for Visakhapatnam's tech companies. Modern, efficient workspaces that boost productivity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Material Network</h4>
                    <p className="text-gray-600">Direct access to coastal-grade materials. Save 40-60% on premium finishes without compromising quality.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-2xl mt-8">
                <div className="text-3xl font-bold text-green-600 mb-2">412+ Projects</div>
                <p className="text-green-700">completed across Visakhapatnam with 4.9/5 rating</p>
              </div>
            </div>
            
            <div 
              className="relative h-96 bg-cover bg-center rounded-3xl shadow-2xl"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold mb-2">Coastal Design Experts</div>
                <div className="text-gray-200">Visakhapatnam's trusted interior designers</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Coastal Climate Expertise",
                description: "Specialized knowledge of Visakhapatnam's humid coastal environment. Materials and designs that last.",
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: "IT Sector Solutions",
                description: "Modern office designs for tech companies. Collaborative spaces that enhance productivity and company culture.",
                icon: <Building2 className="w-8 h-8" />
              },
              {
                title: "Transparent Pricing", 
                description: "See exactly what premium materials cost. No hidden fees, no inflated prices - just honest value.",
                icon: <TrendingDown className="w-8 h-8" />
              },
              {
                title: "Quality Assurance",
                description: "5-year comprehensive warranty on all work. Premium coastal-grade materials with lasting durability.",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: "Local Presence",
                description: "Dedicated Visakhapatnam team for prompt service and support. Understanding of local preferences and needs.",
                icon: <MapPin className="w-8 h-8" />
              },
              {
                title: "Proven Track Record",
                description: "412+ successful projects across residential, commercial, and hospitality sectors in Visakhapatnam.",
                icon: <Award className="w-8 h-8" />
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Coastal Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From coastal consultation to final installation - here's how we transform your Visakhapatnam space
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Coastal Site Analysis",
                description: "Visit your Visakhapatnam location to assess coastal factors, natural light, ventilation needs, and space requirements.",
                icon: <MapPin className="w-8 h-8" />
              },
              {
                step: "Step 2", 
                title: "Climate-Conscious Design",
                description: "Create detailed 3D plans using coastal-friendly materials and layouts optimized for humidity and salt air.",
                icon: <Home className="w-8 h-8" />
              },
              {
                step: "Step 3",
                title: "Material Selection",
                description: "Choose premium coastal-grade materials through our supplier network. Transparent pricing with no markups.",
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                step: "Step 4",
                title: "Professional Execution", 
                description: "Expert installation by experienced craftsmen familiar with coastal construction requirements.",
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

      {/* FAQs Section for Local SEO */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions - Interior Design in Visakhapatnam
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What is the cost of interior design in Visakhapatnam?</h3>
              <p className="text-gray-700 leading-relaxed">
                Interior design costs in Visakhapatnam typically range from ₹1,800 to ₹4,000 per square foot, depending on the design complexity, coastal-resistant materials, and customization level. We provide detailed, transparent quotations with no hidden costs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How do you handle coastal climate challenges in Visakhapatnam interiors?</h3>
              <p className="text-gray-700 leading-relaxed">
                We use humidity-resistant materials, anti-corrosive hardware, and specialized finishes that withstand salt air. Our designs also maximize natural ventilation and incorporate dehumidification solutions where needed.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Do you provide interior design services in Visakhapatnam IT corridor?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we specialize in modern office interiors for IT companies and corporate spaces in Visakhapatnam. We understand the requirements of tech professionals and create productive, contemporary work environments.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What areas of Visakhapatnam do you serve?</h3>
              <p className="text-gray-700 leading-relaxed">
                We serve all areas of Visakhapatnam including Beach Road, MVP Colony, Madhurawada, Gajuwaka, Pendurthi, and surrounding areas. We also extend our services to nearby cities like Vizianagaram and Anakapalle.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Do you offer specialized coastal home interior design?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! We specialize in coastal home interiors that embrace the beachfront lifestyle while providing practical solutions for salt air, humidity, and sand management. Our designs maximize ocean views and natural light.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Transform Your Visakhapatnam Space?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Contact Visakhapatnam's leading interior designers for a free consultation and detailed quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Get Your Free Interior Design Consultation</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Call Us Now</p>
                    <p className="text-xl font-bold text-white">+91-7842640744</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email Us</p>
                    <p className="text-xl font-bold text-white">info@creatixinteriors.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Visit Our Showroom</p>
                    <p className="text-xl font-bold text-white">Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Working Hours</p>
                    <p className="text-xl font-bold text-white">Mon-Sat: 9AM-7PM</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/40"
              >
                Book Free Home Visit in Visakhapatnam
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-6 text-white">Why Choose Us for Your Visakhapatnam Project?</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Coastal Expertise</h5>
                    <p className="text-gray-300">Specialized knowledge of Visakhapatnam's coastal climate and lifestyle</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">IT Sector Focus</h5>
                    <p className="text-gray-300">Modern office designs for Visakhapatnam's growing tech industry</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Quality Assurance</h5>
                    <p className="text-gray-300">Rigorous quality checks and coastal-climate warranty coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Local Network</h5>
                    <p className="text-gray-300">Strong supplier network and local craftsmen in Visakhapatnam</p>
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
