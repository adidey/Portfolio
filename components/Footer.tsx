import React from 'react';

const SocialLink = ({ href, label }: { href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block overflow-hidden"
    >
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full text-[var(--ink)]">
            {label}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-[var(--accent)]">
            {label}
        </span>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="px-6 md:px-10 py-12 md:py-16 border-t border-[var(--border)] bg-[var(--bg)] mt-auto relative z-30 group/footer transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start md:opacity-75 md:hover:opacity-100 transition-opacity duration-700">

                    {/* Copyright & Location */}
                    <div className="md:col-span-4 space-y-4">
                        <p className="text-[11px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-[var(--ink)]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            © 2025 ADITYA DEY™
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-[var(--ink)]">Melbourne, Australia</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-4">
                        <p className="text-[10px] uppercase tracking-[0.6em] text-[var(--muted)] mb-6 md:mb-8">CONNECT_GALLERY</p>
                        <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 text-[11px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium text-[var(--ink)]">
                            <SocialLink href="https://www.linkedin.com/in/adityadey27/" label="LinkedIn" />
                            <SocialLink href="https://github.com/adidey" label="GitHub" />
                            <SocialLink href="https://www.behance.net/adityadey27" label="Behance" />
                            <SocialLink href="https://dribbble.com/Aditya_Dey" label="Dribbble" />
                            <SocialLink href="https://www.instagram.com/_adityadey/" label="Instagram" />
                        </div>
                    </div>

                    {/* Status & Availability */}
                    <div className="md:col-span-4 md:text-right space-y-4 md:space-y-6 mt-8 md:mt-0">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.6em] text-[var(--muted)] mb-2">AVAILABILITY</p>
                            <p className="text-xl md:text-3xl font-bold tracking-tighter tabular-nums uppercase max-w-[280px] md:ml-auto text-[var(--ink)]">
                                Open for Collaborations
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Micro-line */}
                <div className="mt-16 md:mt-20 w-full h-[1px] bg-[var(--border)] overflow-hidden relative">
                    <div className="absolute inset-0 bg-[var(--accent)] opacity-30 -translate-x-full group-hover/footer:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
