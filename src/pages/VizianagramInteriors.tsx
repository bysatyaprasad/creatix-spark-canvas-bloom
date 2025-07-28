import { ArrowRight, MapPin, Phone, Mail, Clock, Award, Users, Star, CheckCircle } from 'lucide-react';
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Interior Design Services in Vizianagaram
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your home, office, or commercial space with Vizianagaram's leading interior design studio. 
              Premium quality, transparent pricing, and exceptional results guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-amber-400">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving Vizianagaram & Surrounding Areas</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-300">4.9/5 (150+ Reviews)</span>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-2xl font-bold">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Interior Design Services in Vizianagaram
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            From residential homes to commercial spaces, we provide comprehensive interior design solutions 
            tailored to Vizianagaram's unique architectural heritage and modern lifestyle needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Residential Interiors Vizianagaram</h3>
                <p className="text-gray-600 mb-6">
                  Transform your home with modern interior design that respects Vizianagaram's cultural aesthetics. 
                  Complete home makeovers, kitchen designs, bedroom interiors, and living room transformations.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Modular Kitchen Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Bedroom & Living Room Interiors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Traditional & Contemporary Fusion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Commercial Interiors Vizianagaram</h3>
                <p className="text-gray-600 mb-6">
                  Professional office spaces, retail stores, restaurants, and commercial establishments. 
                  Boost your business image with thoughtfully designed commercial interiors in Vizianagaram.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Office Interior Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Retail Store Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Restaurant & Hospitality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Turnkey Interior Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Complete project management from design to execution. We handle everything - design, 
                  procurement, execution, and handover. Hassle-free interior design experience in Vizianagaram.
                </p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Design to Execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quality Material Procurement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Timeline Guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Vizianagaram */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Why Choose Creatix Interiors for Your Vizianagaram Project?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Local expertise combined with contemporary design trends. We understand Vizianagaram's unique 
            requirements and deliver spaces that reflect both tradition and modernity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Vizianagaram's architectural heritage and modern lifestyle needs.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600">150+ successful projects completed in Vizianagaram and surrounding areas.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Timely Delivery</h3>
              <p className="text-gray-600">Committed to completing projects within agreed timelines without compromising quality.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with detailed breakdowns. No hidden costs or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Coverage */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Interior Design Services Across Vizianagaram
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            We provide comprehensive interior design services throughout Vizianagaram district and neighboring areas.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Vizianagaram City</h3>
                <p className="text-gray-600 mb-4">Complete interior design services for residential and commercial spaces in Vizianagaram city center.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Residential Apartments & Villas</li>
                  <li>• Commercial Offices & Retail</li>
                  <li>• Restaurants & Hospitality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Surrounding Areas</h3>
                <p className="text-gray-600 mb-4">Extended services to neighboring towns and villages around Vizianagaram district.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bobbili</li>
                  <li>• Cheepurupalli</li>
                  <li>• Garividi</li>
                  <li>• Nellimarla</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Project Types</h3>
                <p className="text-gray-600 mb-4">Specialized design solutions for various project types and scales across the region.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Luxury Villas & Farmhouses</li>
                  <li>• Apartment Complexes</li>
                  <li>• Commercial Buildings</li>
                  <li>• Educational Institutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space in Vizianagaram?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with a free consultation and discover how we can transform your space with our 
            transparent process and exceptional design expertise.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-amber-400" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-300">+91 9876543210</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-amber-400" />
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-300">info@creatixinteriors.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-amber-400" />
              <div className="text-left">
                <p className="font-semibold">Visit Us</p>
                <p className="text-gray-300">Vizianagaram, AP</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg rounded-2xl font-bold">
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}