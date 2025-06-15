
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
    description: 'A sleek contemporary design featuring clean lines and functional elegance.'
  },
  {
    id: 2,
    title: 'Luxury Bedroom Suite',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
    description: 'Sophisticated bedroom design with premium materials and custom furnishings.'
  },
  {
    id: 3,
    title: 'Executive Home Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
    description: 'Professional workspace designed for productivity and style.'
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest interior design projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="group overflow-hidden bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-400 font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
