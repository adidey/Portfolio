
import React, { useState } from 'react';
import { generateDesignConcept } from '../services/geminiService';
import { AIConceptResult } from '../types';

const AIConceptLab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<AIConceptResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const concept = await generateDesignConcept(prompt);
      setResult(concept);
    } catch (err) {
      setError('Failed to generate concept. Ensure your API key is valid.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Concept Lab</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto uppercase tracking-widest text-sm leading-relaxed">
          The Creative Oracle powered by Gemini. <br/> Describe a vision, and let the machine generate a visual strategic framework.
        </p>
      </div>

      <form onSubmit={handleGenerate} className="mb-16">
        <div className="relative group">
          <input 
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. A futuristic organic coffee shop brand in Tokyo..."
            className="w-full bg-transparent border-b border-neutral-800 py-6 text-2xl md:text-4xl font-serif focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-800"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-0 bottom-6 text-sm uppercase tracking-widest font-bold text-blue-500 hover:text-white transition-colors disabled:opacity-50"
          >
            {loading ? 'Consulting...' : 'Ignite'}
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 text-center mb-8">{error}</p>}

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-12">
            <section>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Brand Entity</p>
              <h2 className="text-4xl md:text-5xl font-serif italic text-blue-500">{result.brandName}</h2>
            </section>
            
            <section>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">The Vision</p>
              <p className="text-lg text-neutral-300 leading-relaxed font-light">{result.vision}</p>
            </section>

            <section>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Visual Ethos</p>
              <p className="text-lg text-neutral-300 leading-relaxed font-light">{result.visualDirection}</p>
            </section>
          </div>

          <div className="space-y-12">
             <section>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Chromatic Framework</p>
              <div className="flex gap-4">
                {result.colorPalette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-neutral-800"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] font-mono uppercase text-neutral-500">{color}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Typographic Voice</p>
              <p className="text-2xl font-medium tracking-tight border-l-2 border-neutral-800 pl-6 py-2 italic">{result.typography}</p>
            </section>

            <section>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">Functional Nuclei</p>
              <ul className="space-y-2">
                {result.suggestedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-400">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span className="text-sm uppercase tracking-wider">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-[10px] uppercase tracking-[0.5em] text-blue-500 animate-pulse">Processing Synthesis</p>
        </div>
      )}
    </div>
  );
};

export default AIConceptLab;
