
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Mumbai Penthouse',
    category: 'Luxury Residential',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    description: 'A stunning 4-BHK penthouse combining traditional Indian elements with contemporary luxury in the heart of Mumbai.',
    value: '₹85 Lakhs',
    year: '2024'
  },
  {
    id: 2,
    title: 'Delhi Farmhouse',
    category: 'Traditional Modern',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&h=400&fit=crop',
    description: 'An elegant farmhouse design featuring Rajasthani architectural elements with modern amenities and smart home integration.',
    value: '₹1.2 Crores',
    year: '2024'
  },
  {
    id: 3,
    title: 'Bangalore Tech Office',
    category: 'Commercial Design',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    description: 'A modern tech office space designed to boost productivity while incorporating elements of Indian culture and sustainability.',
    value: '₹45 Lakhs',
    year: '2023'
  },
  {
    id: 4,
    title: 'Chennai Villa',
    category: 'South Indian Heritage',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    description: 'A beautiful villa design that celebrates Tamil Nadu\'s rich architectural heritage with contemporary comfort and luxury.',
    value: '₹65 Lakhs',
    year: '2023'
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-200 mb-6">
            <span className="text-amber-700 font-semibold text-lg">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Our Recent
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our most celebrated projects across India, each telling a unique story of luxury, tradition, and modern innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden bg-white border border-gray-200 hover:border-amber-300 transition-all duration-500 animate-fade-in hover:shadow-2xl" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Overlay content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{project.year}</span>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">{project.value}</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Button 
                    size="sm" 
                    className="w-full bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 border-0 group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                    View Project Details
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-amber-600 font-semibold uppercase tracking-wider">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-6 text-xl rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Explore Complete Portfolio
            <ArrowUpRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
