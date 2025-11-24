import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, X } from 'lucide-react';

const heroImages = [
    '/images/hero-1.png',
    '/images/hero-2.png',
    '/images/hero-3.png'
];

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image Carousel */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="Luxury Interior"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-full h-full object-cover absolute inset-0"
                    />
                </AnimatePresence>
                {/* Overlays removed as per user request to show original image colors */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-wide drop-shadow-2xl">
                        Designing Beautiful <br />
                        <span className="text-brand-gold italic">Homes for Every Budget</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                        Premium, personalised interiors in Hyderabad. We bring your dream home to life with elegance, functionality, and affordability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                        <button
                            onClick={openModal}
                            className="bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-dark font-semibold text-center shadow-2xl hover:shadow-brand-gold/50 transform hover:-translate-y-1 transition-all duration-300 text-lg px-8 py-4 rounded-full"
                        >
                            Book Free Design Consultation
                        </button>
                        <a href="#services" className="btn-secondary text-center border-white text-white hover:bg-white hover:text-brand-dark backdrop-blur-sm text-lg px-8 py-4">
                            View Our Work
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Consultation Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden z-10"
                        >
                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-serif font-bold text-brand-dark">Book a Consultation</h3>
                                    <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <X size={20} className="text-brand-gray" />
                                    </button>
                                </div>

                                <form className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-brand-gray flex items-center gap-2">
                                            <User size={14} /> Name
                                        </label>
                                        <input type="text" placeholder="Your Name" className="w-full p-3 bg-brand-ivory border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold transition-colors" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-brand-gray flex items-center gap-2">
                                                <Phone size={14} /> Phone
                                            </label>
                                            <input type="tel" placeholder="98765..." className="w-full p-3 bg-brand-ivory border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-brand-gray flex items-center gap-2">
                                                <Mail size={14} /> Email
                                            </label>
                                            <input type="email" placeholder="hello@..." className="w-full p-3 bg-brand-ivory border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold transition-colors" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-brand-gray flex items-center gap-2">
                                                <Calendar size={14} /> Date
                                            </label>
                                            <input type="date" className="w-full p-3 bg-brand-ivory border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-brand-gray flex items-center gap-2">
                                                <Clock size={14} /> Time
                                            </label>
                                            <select className="w-full p-3 bg-brand-ivory border border-gray-200 rounded-lg focus:outline-none focus:border-brand-gold transition-colors">
                                                <option>10:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>02:00 PM</option>
                                                <option>04:00 PM</option>
                                                <option>06:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-brand-dark text-white font-medium py-4 rounded-lg hover:bg-brand-gold transition-colors duration-300 shadow-md mt-2">
                                        Confirm Appointment
                                    </button>

                                    <p className="text-xs text-center text-gray-400 mt-2">
                                        Free consultation. No obligation.
                                    </p>
                                </form>
                            </div>
                            <div className="h-1 w-full bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold"></div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
