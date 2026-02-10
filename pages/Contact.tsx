
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Construct mailto link
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:hello@lumina.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => setIsSending(false), 2000);
  };

  return (
    <main className="pt-48 px-6 md:px-12 pb-32 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
        {/* Contact Info */}
        <div className="md:col-span-5">
          <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-8">Get in touch</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-16 leading-[1.1] tracking-tighter" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Ready for the <span className="text-neutral-500">next</span> venture.
          </h1>
          
          <div className="space-y-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">Direct Email</p>
              <a href="mailto:hello@lumina.studio" className="text-2xl font-bold hover:text-blue-500 transition-colors" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                hello@lumina.studio
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">Social</p>
                <ul className="space-y-2 text-[10px] uppercase tracking-widest font-bold">
                  <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">GitHub</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Instagram</a></li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">Location</p>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Melbourne, AU</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-12 border-l border-neutral-900 pl-0 md:pl-24">
            <div className="group border-b border-neutral-900 pb-4 focus-within:border-white transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2 block">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Type your name"
                className="w-full bg-transparent text-2xl font-bold outline-none placeholder:text-neutral-800"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              />
            </div>
            
            <div className="group border-b border-neutral-900 pb-4 focus-within:border-white transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2 block">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Type your email address"
                className="w-full bg-transparent text-2xl font-bold outline-none placeholder:text-neutral-800"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              />
            </div>

            <div className="group border-b border-neutral-900 pb-4 focus-within:border-white transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2 block">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="How can I help you?"
                className="w-full bg-transparent text-2xl font-bold outline-none placeholder:text-neutral-800 resize-none"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              />
            </div>

            <button 
              type="submit"
              disabled={isSending}
              className="group relative w-full md:w-auto px-12 py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold overflow-hidden transition-all hover:pr-16 disabled:opacity-50"
            >
              <span className="relative z-10">{isSending ? 'Redirecting...' : 'Send Message'}</span>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
