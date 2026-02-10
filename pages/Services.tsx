
import React from 'react';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Visual Identity',
      description: 'Crafting intentional brand systems that communicate core values through typography, color, and modular systems.',
      tags: ['Logotype', 'Brand Guidelines', 'Typography', 'Iconography']
    },
    {
      title: 'Digital Products',
      description: 'Designing high-fidelity UI/UX solutions for complex systems, focusing on cognitive load and behavioral psychology.',
      tags: ['User Research', 'Figma Prototypes', 'Design Systems', 'Interactive Design']
    },
    {
      title: 'Technical Implementation',
      description: 'Building robust frontend and hardware solutions that bridge the gap between design vision and technical execution.',
      tags: ['React / TypeScript', 'IoT Integration', 'Arduino', 'Performance Optimization']
    }
  ];

  return (
    <main className="pt-48 px-6 md:px-12 pb-32 max-w-7xl mx-auto min-h-screen">
      <header className="mb-32">
        <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-6">Expertise & Offerings</p>
        <h1 className="text-6xl md:text-9xl font-bold leading-[0.85] tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
          Crafting <br /> Solutions<span className="text-neutral-800">.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-8 space-y-32">
          {serviceList.map((service, idx) => (
            <section key={idx} className="group border-b border-neutral-900 pb-20">
              <div className="flex items-baseline gap-6 mb-8">
                <span className="text-[10px] font-mono text-neutral-700">0{idx + 1}</span>
                <h2 className="text-4xl md:text-6xl font-bold group-hover:text-blue-500 transition-colors" style={{ fontFamily: 'Satoshi, sans-serif' }}>{service.title}</h2>
              </div>
              <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mb-12">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-neutral-600 border border-neutral-800 px-4 py-2 rounded-sm group-hover:border-neutral-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
        
        <aside className="md:col-span-4 space-y-16">
          <div className="sticky top-48">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-neutral-600 mb-8">Process</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="text-[9px] font-mono text-neutral-800 pt-1">01</span>
                <p className="text-sm text-neutral-400">Immersion & Research</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[9px] font-mono text-neutral-800 pt-1">02</span>
                <p className="text-sm text-neutral-400">Strategic Direction</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[9px] font-mono text-neutral-800 pt-1">03</span>
                <p className="text-sm text-neutral-400">Design Iteration</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[9px] font-mono text-neutral-800 pt-1">04</span>
                <p className="text-sm text-neutral-400">Technical Handoff</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Services;
