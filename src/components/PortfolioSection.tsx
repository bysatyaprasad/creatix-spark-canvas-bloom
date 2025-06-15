
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Manhattan Penthouse',
    category: 'Luxury Residential',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
    description: 'A breathtaking penthouse transformation featuring contemporary elegance and panoramic city views.',
    value: '$2.8M',
    year: '2024'
  },
  {
    id: 2,
    title: 'Beverly Hills Estate',
    category: 'Luxury Residential',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop',
    description: 'Modern minimalist design meets California luxury in this stunning hillside retreat.',
    value: '$4.2M',
    year: '2024'
  },
  {
    id: 3,
    title: 'Corporate Headquarters',
    category: 'Commercial Design',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
    description: 'An innovative workspace designed to inspire creativity and foster collaboration.',
    value: '$1.5M',
    year: '2023'
  },
  {
    id: 4,
    title: 'Luxury Hotel Suite',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    description: 'Sophisticated hospitality design that creates unforgettable guest experiences.',
    value: '$3.1M',
    year: '2023'
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6">
            <span className="text-purple-300 font-semibold text-lg">Portfolio</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Featured
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Discover our most prestigious projects that showcase our commitment to design excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 animate-fade-in hover:shadow-2xl hover:shadow-purple-500/10" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Overlay content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{project.year}</span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full">
                    <span className="text-white text-sm font-bold">{project.value}</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Button 
                    size="sm" 
                    className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                    View Project Details
                    <ArrowUpRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white px-12 py-6 text-xl rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25"
          >
            Explore Full Portfolio
            <ArrowUpRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
