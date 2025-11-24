import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Box, Hammer, Key } from 'lucide-react';

const steps = [
    { icon: MessageSquare, title: "Meet Your Designer", desc: "Initial consultation to understand your vision." },
    { icon: FileText, title: "Requirements & Budget", desc: "Detailed planning tailored to your budget." },
    { icon: Box, title: "3D Design & Approvals", desc: "Visualize your home before we build it." },
    { icon: Hammer, title: "Execution & Updates", desc: "Expert craftsmanship with regular reports." },
    { icon: Key, title: "Move-In & Styling", desc: "Final touches and handover of your dream home." },
];

const Process = () => {
    return (
        <section id="process" className="section-padding bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">How We Work</h2>
                <p className="text-brand-gray">A seamless journey from your first thought to your final home.</p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-beige -translate-y-1/2 z-0"></div>

                <div className="grid md:grid-cols-5 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center bg-white p-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-brand-ivory border-2 border-brand-gold flex items-center justify-center mb-6 shadow-sm text-brand-dark relative group">
                                <step.icon size={28} className="group-hover:scale-110 transition-transform" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-dark text-white text-xs rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                            <p className="text-sm text-brand-gray">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Budget Highlight Strip */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-20 bg-brand-dark rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Homes for Every Budget</h3>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        We promise to deliver exceptional design within your budget, without ever compromising on quality or aesthetics.
                    </p>
                    <a href="#contact" className="inline-block bg-brand-gold text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300">
                        Talk to a Designer
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Process;
