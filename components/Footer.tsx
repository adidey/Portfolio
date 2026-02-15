import React from 'react';

const SocialLink = ({ href, label }: { href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block overflow-hidden"
    >
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
            {label}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0 text-blue-500">
            {label}
        </span>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="px-6 md:px-20 py-16 md:py-24 border-t border-neutral-900 bg-[#000000] mt-auto relative z-30 group/footer">
            <div className="max-w-[1800px] mx-auto">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start md:opacity-50 md:hover:opacity-100 transition-opacity duration-700">

                    {/* Copyright & Location */}
                    <div className="md:col-span-4 space-y-4">
                        <p className="text-[11px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            © 2025 ADITYA DEY™
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">Melbourne, Australia</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-4">
                        <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 mb-6 md:mb-8">CONNECT_ARCHIVE</p>
                        <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 text-[11px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium">
                            <SocialLink href="https://www.linkedin.com/in/adityadey27/" label="LinkedIn" />
                            <SocialLink href="https://github.com/adidey" label="GitHub" />
                            <SocialLink href="https://www.behance.net/adityadey" label="Behance" />
                            <SocialLink href="https://dribbble.com/Aditya_Dey" label="Dribbble" />
                            <SocialLink href="https://www.instagram.com/_adityadey/" label="Instagram" />
                        </div>
                    </div>

                    {/* Status & Availability */}
                    <div className="md:col-span-4 md:text-right space-y-4 md:space-y-6 mt-8 md:mt-0">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 mb-2">AVAILABILITY</p>
                            <p className="text-xl md:text-3xl font-bold font-mono tracking-tighter tabular-nums uppercase max-w-[280px] md:ml-auto">
                                Open for Collaborations
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Micro-line */}
                <div className="mt-16 md:mt-20 w-full h-[1px] bg-neutral-900 overflow-hidden relative">
                    <div className="absolute inset-0 bg-blue-600/30 -translate-x-full group-hover/footer:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
