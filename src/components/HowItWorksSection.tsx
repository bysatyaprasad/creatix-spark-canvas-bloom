import { UserCheck, Presentation, CheckCircle, Hammer, Key } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: UserCheck,
    title: 'Initial Consultation',
    description: 'We discuss your vision, requirements, and budget to understand your unique needs and style preferences.'
  },
  {
    id: 2,
    icon: Presentation,
    title: 'Design Development',
    description: 'Our team creates detailed design concepts, 3D visualizations, and material selections tailored to your space.'
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'Design Approval',
    description: 'Review and approve the final design, timeline, and transparent pricing breakdown before we begin execution.'
  },
  {
    id: 4,
    icon: Hammer,
    title: 'Expert Execution',
    description: 'Our skilled craftsmen and project managers execute the design with premium materials and quality workmanship.'
  },
  {
    id: 5,
    icon: Key,
    title: 'Final Handover',
    description: 'Complete walkthrough of your transformed space with warranty documentation and maintenance guidelines.'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 xs:py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 xs:mb-20 sm:mb-32 animate-fade-in">
          <div className="inline-flex items-center gap-2 xs:gap-4 px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200/50 mb-8 xs:mb-12 shadow-lg">
            <CheckCircle className="w-5 xs:w-6 h-5 xs:h-6 text-amber-600" />
            <span className="text-amber-800 font-semibold text-sm xs:text-base tracking-wide">Simple & Transparent Process</span>
          </div>
          
          <h2 className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 xs:mb-8 leading-tight font-playfair text-gray-900">
            How It <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Works</span>
          </h2>
          
          <p className="text-base xs:text-lg md:text-xl text-gray-600 max-w-2xl xs:max-w-3xl mx-auto leading-relaxed font-light">
            From initial consultation to final handover, our streamlined process ensures 
            transparency, quality, and exceptional results at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 mx-16"></div>
            
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step card */}
                <div className="bg-white rounded-3xl p-6 xs:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200/50 group-hover:-translate-y-2 relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <step.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg xs:text-xl font-bold text-gray-900 mb-3 font-playfair">{step.title}</h3>
                    <p className="text-gray-600 text-sm xs:text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Mobile connection arrow */}
                <div className="md:hidden flex justify-center mt-4 mb-4">
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-gradient-to-b from-amber-300 to-orange-300"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 xs:mt-20 sm:mt-32 animate-fade-in">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 xs:p-12 max-w-2xl mx-auto border border-amber-100 shadow-lg">
            <h3 className="text-2xl xs:text-3xl font-bold text-gray-900 mb-4 font-playfair">Ready to Begin?</h3>
            <p className="text-gray-600 text-base xs:text-lg mb-6 leading-relaxed">
              Start your transformation journey with a free consultation. No obligations, just honest advice.
            </p>
            <div className="inline-flex items-center gap-2 text-amber-700 font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>Free consultation • Transparent pricing • Quality guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}