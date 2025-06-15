
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Eye, Award } from 'lucide-react';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    title: 'Modern Luxury Living Room',
    category: 'Residential'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop&crop=center',
    title: 'Contemporary Kitchen Design',
    category: 'Residential'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center',
    title: 'Executive Office Space',
    category: 'Commercial'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
    title: 'Elegant Master Bedroom',
    category: 'Residential'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
    title: 'Boutique Retail Interior',
    category: 'Commercial'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&h=600&fit=crop&crop=center',
    title: 'Luxury Bathroom Suite',
    category: 'Residential'
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-40 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, #d4af37 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-blue-500/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-purple-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-32 animate-fade-in">
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-full border border-amber-700/40 backdrop-blur-lg mb-12 shadow-2xl">
            <Award className="w-6 h-6 text-amber-300" />
            <span className="text-amber-300 font-bold text-xl tracking-wider">Award-Winning Designs</span>
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-bold mb-12 leading-tight font-playfair">
            <span className="text-white drop-shadow-2xl">Recent</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
              Masterpieces
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Discover how we transform spaces with premium materials and transparent pricing. 
            Each project showcases our commitment to quality without the typical designer markups.
          </p>
        </div>

        {/* Enhanced image grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-3xl animate-fade-in hover:scale-105 transition-all duration-700 shadow-2xl" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="inline-block px-3 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium mb-3 border border-amber-500/30">
                    {project.category}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 font-playfair">{project.title}</h3>
                  <button className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors font-medium">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
                
                {/* Enhanced border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/60 rounded-3xl transition-all duration-500"></div>
                
                {/* Sophisticated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 rounded-3xl transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-playfair">Ready to See More?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Explore our complete portfolio and discover how we can transform your space with premium materials at honest prices.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-700 hover:via-amber-600 hover:to-yellow-600 text-black px-20 py-10 text-2xl rounded-3xl font-bold transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-500/30 group"
          >
            View Complete Portfolio
            <ArrowUpRight className="ml-4 h-8 w-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
