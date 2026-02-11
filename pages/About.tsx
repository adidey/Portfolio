
import React from 'react';

const About: React.FC = () => {
  return (
    <main className="pt-40 px-6 md:px-12 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-start">
        <div className="md:col-span-7 space-y-16">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Design through the lens of <span className="text-neutral-600">Cognition</span>.
          </h1>
          
          <div className="space-y-8 text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            <p>
              I am a Bachelor of Science student at The University of Melbourne, majoring in Computing and Software Systems with a minor in Psychology.
            </p>
            <p>
              My work exists where technical constraints meet human intuition. I combine my understanding of cognitive load and behavioral psychology with modern frontend engineering to build products that are as performant as they are pleasant.
            </p>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-900">
             <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6">Education</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">The University of Melbourne</p>
                    <p className="text-xs text-neutral-600">BSc. Computing & Software Systems</p>
                    <p className="text-xs text-neutral-600">Minor in Psychology (2023 — 2026)</p>
                  </div>
                </div>
             </div>
             <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6">Leadership</p>
                <ul className="text-xs text-neutral-600 space-y-2">
                  <li>Faculty of Science Ambassador</li>
                  <li>Innovation Lead @ Google Developer Club</li>
                  <li>Graphic Designer @ MUR</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="md:col-span-5 space-y-20">
          <div className="aspect-[4/5] bg-neutral-900 relative overflow-hidden group">
             <img 
               src="/assets/portrait.jpg" 
               alt="Portrait" 
               className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 border border-white/5" />
          </div>

          <div className="grid grid-cols-1 gap-12">
            <section>
              <h3 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6">Technical Focus</h3>
              <ul className="space-y-4 text-sm tracking-wide">
                <li className="flex justify-between border-b border-neutral-900 pb-2">
                  <span>UI / UX Engineering</span>
                  <span className="text-neutral-700">Expert</span>
                </li>
                <li className="flex justify-between border-b border-neutral-900 pb-2">
                  <span>IoT & Hardware</span>
                  <span className="text-neutral-700">Advanced</span>
                </li>
                <li className="flex justify-between border-b border-neutral-900 pb-2">
                  <span>Full-Stack Development</span>
                  <span className="text-neutral-700">Competent</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
