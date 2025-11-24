import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Clock, CheckCircle, Award, PenTool } from 'lucide-react';

const stats = [
    { icon: Home, label: "500+ Homes Delivered" },
    { icon: Users, label: "10+ Expert Designers" },
    { icon: Clock, label: "7+ Years Experience" },
    { icon: CheckCircle, label: "95% On Time" },
    { icon: Award, label: "End-to-End Execution" },
    { icon: PenTool, label: "Dedicated Manager" },
];

const interiors = [
    {
        title: "Modern Living Room",
        img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Elegant spaces for family time."
    },
    {
        title: "Serene Bedroom",
        img: "/images/hero-3.png",
        desc: "Your personal sanctuary."
    },
    {
        title: "Modular Kitchen",
        img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Functional and stylish cooking."
    },
    {
        title: "Productive Workspace",
        img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Work from home in comfort."
    }
];

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            {/* Philosophy */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6"
                >
                    Crafting Homes, Building Dreams
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-brand-gray leading-relaxed"
                >
                    At Interior Illusions, we believe that a home is more than just a place to live—it's a reflection of your personality and lifestyle. Our philosophy is simple: design practical, beautiful homes tailored to each family's unique needs, ensuring every corner tells a story.
                </motion.p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-brand-ivory p-4 rounded-xl border border-brand-beige text-center hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-center mb-3 text-brand-gold">
                            <stat.icon size={24} />
                        </div>
                        <p className="text-sm font-semibold text-brand-dark">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Interior Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {interiors.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                    >
                        <motion.img
                            src={item.img}
                            alt={item.title}
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full object-cover"
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6 text-white"
                            initial={{ y: 10 }}
                            whileHover={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-serif font-bold mb-1">{item.title}</h3>
                            <motion.p
                                className="text-sm text-gray-200"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                            >
                                {item.desc}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Homes for Every Budget Section */}
            <motion.div
                className="mt-20 grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Content Half */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                            Homes for Every Budget
                        </h3>
                        <p className="text-lg text-brand-gray leading-relaxed mb-6">
                            Our interior designers work with you keeping in mind your requirements and budget. We believe that beautiful, functional spaces should be accessible to everyone.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                                </div>
                                <span className="text-brand-gray">Transparent pricing with no hidden costs</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                                </div>
                                <span className="text-brand-gray">Flexible payment plans available</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                                </div>
                                <span className="text-brand-gray">Premium quality within your budget</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Decorative Cross Bar */}
                    <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-px bg-gradient-to-r from-brand-gold to-transparent"></div>
                </div>

                {/* Image Half */}
                <motion.div
                    className="relative h-[400px] rounded-2xl overflow-hidden group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.img
                        src="/images/hero-1.png"
                        alt="Budget-friendly interior design"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <p className="text-sm font-medium italic">
                            "Quality design shouldn't break the bank"
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
