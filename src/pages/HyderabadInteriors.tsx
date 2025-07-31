import { ArrowRight, MapPin, Phone, Mail, Clock, Award, Users, Star, CheckCircle, Sparkles, Shield, TrendingDown, Home, Building2, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HyderabadInteriors() {
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
            "addressCountry": "IN",
            "streetAddress": "Interior Design Studio, Hyderabad"
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
            },
            {
              "@type": "City", 
              "name": "Secunderabad",
              "containedIn": "Telangana, India"
            },
            {
              "@type": "City",
              "name": "Cyberabad", 
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
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Luxury Interior Design Hyderabad",
                  "description": "High-end luxury interior design services for premium homes and offices in Hyderabad"
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
          "priceRange": "₹₹₹₹",
          "telephone": "+91-9876543210",
          "url": "https://creatixinteriors.com/interior-design-hyderabad",
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
            url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1974&auto=format&fit=crop')
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
              <span className="text-base font-semibold tracking-wide">Hyderabad's Most Trusted Interior Designers Since 2018</span>
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
                Luxury Homes & Corporate Spaces
              </span>
            </h1>
            
            {/* Enhanced local description */}
            <p className="text-base xs:text-lg md:text-2xl lg:text-3xl text-gray-100 mb-10 sm:mb-16 font-light max-w-2xl sm:max-w-6xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              Premier interior design company in Hyderabad specializing in 
              <span className="text-amber-300 font-semibold bg-amber-900/20 px-2 py-1 rounded-lg mx-1">luxury residences, corporate headquarters, IT offices, and commercial complexes</span>. 
              Serving Hyderabad, Secunderabad, and Cyberabad with 650+ completed projects and international design standards.
            </p>

            {/* Trust indicators grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 max-w-2xl sm:max-w-6xl mx-auto">
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Hyderabad Tech Hub Experts</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Deep understanding of IT culture, modern lifestyle, and luxury living standards in Hyderabad.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">650+ Happy Clients</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">Trusted by executives, entrepreneurs, and corporations across Hyderabad with 4.9/5 rating.</p>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 xs:p-8 sm:p-10 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-102 sm:hover:scale-105 animate-fade-in shadow-2xl" style={{ animationDelay: '0.5s' }}>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-4 sm:mb-8 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Premium Quality</h3>
                <p className="text-white/90 leading-relaxed text-base sm:text-lg">International design standards with comprehensive warranty and luxury material sourcing.</p>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="animate-fade-in flex flex-col items-center w-full" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="w-full xs:w-auto max-w-[380px] sm:max-w-none bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white px-8 xs:px-12 sm:px-20 py-5 sm:py-10 text-lg xs:text-xl sm:text-2xl rounded-2xl sm:rounded-3xl font-bold group transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-amber-500/40 border-0 mb-6 sm:mb-8"
              >
                Get Free Home Visit & Quote in Hyderabad
                <ArrowRight className="ml-4 h-6 sm:h-7 w-6 sm:w-7 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              
              {/* Local testimonial with more detail */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 xs:p-8 max-w-full xs:max-w-3xl mx-auto border border-white/20 shadow-2xl">
                <p className="text-base xs:text-lg text-white/90 mb-4 xs:mb-6 italic leading-relaxed">
                  "Absolutely stunning interior design for our luxury villa in Hyderabad! They perfectly captured our vision while adding contemporary elegance. World-class quality!"
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
                  <span className="text-center">- Arjun & Kavya, Jubilee Hills, Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-40 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Additional SEO Content Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Why Hyderabad Chooses Our Interior Design Services
              </h2>
              
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  As <strong>Hyderabad's premier interior design company</strong>, we understand the dynamic spirit of this cosmopolitan city. Known as "Cyberabad" and the "City of Pearls," Hyderabad perfectly blends rich Nizami heritage with cutting-edge technology and modern luxury living.
                </p>
                
                <p>
                  Our <strong>interior designers in Hyderabad</strong> specialize in creating sophisticated spaces that reflect the city's global outlook while honoring its cultural heritage. Whether you're in Banjara Hills, Jubilee Hills, Gachibowli, or Hitech City, we create interiors that match your cosmopolitan lifestyle.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Luxury Interior Design Expertise in Hyderabad</h3>
                
                <p>
                  Hyderabad's rapidly growing IT sector and business landscape demand premium interior design solutions. Our designs incorporate international standards, smart home technology, and luxury finishes that align with the city's progressive mindset and affluent lifestyle.
                </p>
                
                <p>
                  <strong>Popular interior design styles in Hyderabad include:</strong>
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contemporary Luxury:</strong> High-end finishes, imported materials, and modern amenities</li>
                  <li><strong>Smart Tech Integration:</strong> Home automation and intelligent design solutions</li>
                  <li><strong>Nizami Heritage Fusion:</strong> Traditional elements with modern sophistication</li>
                  <li><strong>Corporate Modern:</strong> Sleek designs for IT offices and business centers</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Premium Interior Design Process in Hyderabad
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">1. Executive Consultation & Site Analysis</h4>
                  <p className="text-gray-700">Our senior designers visit your Hyderabad location for comprehensive space analysis, lifestyle assessment, and luxury design conceptualization.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">2. 3D Visualization & Smart Planning</h4>
                  <p className="text-gray-700">Advanced 3D modeling with virtual reality walkthroughs, smart home integration planning, and detailed technical specifications.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">3. Premium Material Sourcing</h4>
                  <p className="text-gray-700">Access to luxury brands, imported materials, and exclusive collections. Our network includes premium suppliers across India and international partners.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">4. Expert Execution & Project Management</h4>
                  <p className="text-gray-700">Dedicated project managers, skilled craftsmen, and quality supervisors ensure flawless execution meeting international standards.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">5. Luxury Handover & Lifetime Support</h4>
                  <p className="text-gray-700">White-glove handover service, comprehensive warranty, and ongoing maintenance support for your premium interior investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section for Local SEO */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions - Interior Design in Hyderabad
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What is the cost of luxury interior design in Hyderabad?</h3>
              <p className="text-gray-700 leading-relaxed">
                Luxury interior design costs in Hyderabad range from ₹2,500 to ₹6,000 per square foot for premium residences, and ₹1,800 to ₹4,500 per square foot for corporate spaces, depending on design complexity and material selection.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Do you design for luxury areas like Jubilee Hills and Banjara Hills?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we specialize in luxury interior design for premium areas in Hyderabad including Jubilee Hills, Banjara Hills, Film Nagar, and other upscale neighborhoods. We understand the sophisticated requirements of these localities.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Can you design IT offices and corporate spaces in Hyderabad?</h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! We have extensive experience designing IT offices in Gachibowli, Hitech City, and Madhapur. Our corporate designs focus on productivity, employee wellness, and modern technology integration.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What areas of Hyderabad do you serve?</h3>
              <p className="text-gray-700 leading-relaxed">
                We serve all areas of Hyderabad including Jubilee Hills, Banjara Hills, Gachibowli, Hitech City, Madhapur, Kondapur, Begumpet, Secunderabad, and surrounding areas. We also work on projects in Cyberabad.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Do you offer smart home integration with interior design?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we specialize in smart home integration including home automation, intelligent lighting, climate control, security systems, and IoT device integration as part of our luxury interior design services.
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
              Ready to Transform Your Hyderabad Space?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Contact Hyderabad's leading luxury interior designers for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Get Your Free Luxury Design Consultation</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Call Us Now</p>
                    <p className="text-xl font-bold text-white">+91-9876543210</p>
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
                    <p className="text-xl font-bold text-white">Hyderabad, Telangana</p>
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
                Book Free Home Visit in Hyderabad
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-6 text-white">Why Choose Us for Your Hyderabad Project?</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Luxury Expertise</h5>
                    <p className="text-gray-300">Specialized in high-end interior design for Hyderabad's affluent clientele</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Tech Integration</h5>
                    <p className="text-gray-300">Smart home solutions and modern technology integration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">International Standards</h5>
                    <p className="text-gray-300">World-class quality with premium materials and expert craftsmanship</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-white mb-1">Executive Service</h5>
                    <p className="text-gray-300">Dedicated account management and white-glove service delivery</p>
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