import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-8 mb-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-serif font-bold text-white mb-4">Interior Illusions</h2>
                    <p className="text-gray-400 text-sm max-w-sm mb-6">
                        Creating beautiful, functional, and affordable homes for everyone. Your dream space is just a consultation away.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-brand-gold">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-brand-gold">Services</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Residential Interiors</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Modular Kitchens</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Wardrobes</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">False Ceiling</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Commercial Spaces</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Interior Illusions. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                    Made with <span className="text-red-500">❤</span> by Cubers
                </p>
            </div>
        </footer>
    );
};

export default Footer;
