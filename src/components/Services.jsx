import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    { id: 1, category: 'Residential', title: 'Full Home Interiors', desc: 'Complete interior solutions for apartments and villas.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'Modular Kitchens', title: 'Modern Kitchens', desc: 'Ergonomic and stylish modular kitchen designs.', img: '/images/hero-3.png' },
    { id: 3, category: 'Bedrooms & Wardrobes', title: 'Master Bedrooms', desc: 'Luxurious bedroom designs with ample storage.', img: '/images/hero-2.png' },
    { id: 4, category: 'Living & Dining', title: 'Living Areas', desc: 'Welcoming living rooms for family gatherings.', img: '/images/hero-1.png' },
    { id: 5, category: 'Commercial', title: 'Office Spaces', desc: 'Productive and professional office interiors.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'Bedrooms & Wardrobes', title: 'Kids Rooms', desc: 'Fun and safe spaces for your little ones.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 7, category: 'Living & Dining', title: 'Dining Spaces', desc: 'Elegant dining areas for memorable meals.', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 8, category: 'Residential', title: 'False Ceiling', desc: 'Creative ceiling designs with ambient lighting.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const categories = ['All', 'Residential', 'Modular Kitchens', 'Bedrooms & Wardrobes', 'Living & Dining', 'Commercial'];

const Services = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredServices = activeFilter === 'All'
        ? services
        : services.filter(s => s.category === activeFilter);

    return (
        <section id="services" className="section-padding bg-brand-beige/30">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Our Expertise</h2>
                <p className="text-brand-gray max-w-2xl mx-auto">
                    From concept to creation, we offer a wide range of interior design services to transform your space.
                </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === cat
                            ? 'bg-brand-dark text-white shadow-md'
                            : 'bg-white text-brand-gray hover:bg-brand-gold/20'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Service Cards */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <AnimatePresence>
                    {filteredServices.map((service) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            key={service.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                        >
                            <div className="h-48 overflow-hidden">
                                <motion.img
                                    src={service.img}
                                    alt={service.title}
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <motion.span
                                    className="text-xs font-bold text-brand-gold uppercase tracking-wider"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {service.category}
                                </motion.span>
                                <h3 className="text-xl font-serif font-bold text-brand-dark mt-2 mb-3">{service.title}</h3>
                                <p className="text-sm text-brand-gray leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Services;
