
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&h=600&fit=crop&crop=center'
  }
];

export default function PortfolioSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, #d4af37 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Premium header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-full border border-amber-700/30 backdrop-blur-sm mb-8">
            <span className="text-amber-300 font-bold text-xl tracking-wide">Our Masterpieces</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Recent</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
        </div>

        {/* Premium image grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl animate-fade-in hover:scale-105 transition-all duration-700" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={project.image} 
                  alt="Luxury Interior Design"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Elegant border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/50 rounded-2xl transition-all duration-500"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-700 hover:via-amber-600 hover:to-yellow-600 text-black px-16 py-8 text-2xl rounded-2xl font-bold transform hover:scale-105 transition-all duration-500 shadow-2xl shadow-amber-500/25"
          >
            View Complete Portfolio
            <ArrowUpRight className="ml-4 h-7 w-7" />
          </Button>
        </div>
      </div>
    </section>
  );
}
