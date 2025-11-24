import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    { q: "What is the estimated cost for a 2BHK interior?", a: "The cost depends on the scope of work and materials. However, our packages start from budget-friendly options to premium luxury finishes. We can tailor a quote after a free consultation." },
    { q: "How long does it take to complete a project?", a: "Typically, a standard 2BHK or 3BHK project takes 45-60 days for completion after design approval. We provide a strict timeline before starting." },
    { q: "Do you provide a warranty on your products?", a: "Yes, we offer up to 10 years of warranty on modular furniture and kitchens, subject to terms and conditions." },
    { q: "Can I customize the designs?", a: "Absolutely! All our designs are 100% customizable to suit your taste, lifestyle, and budget." },
    { q: "Do you charge for site visits?", a: "Our first site visit and design consultation are completely free of charge." },
    { q: "What materials do you use?", a: "We use high-quality BWR/BWP plywood, laminates from top brands, and premium hardware (Hettich/Hafele) to ensure durability." },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="section-padding bg-white">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">Frequently Asked Questions</h2>
                    <p className="text-brand-gray mb-8">
                        Got questions? We have answers. If you don't see your question here, feel free to contact us.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Interior Design Discussion"
                        className="rounded-2xl shadow-lg w-full object-cover h-64 md:h-auto"
                    />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-brand-beige rounded-lg overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-4 bg-brand-ivory hover:bg-brand-beige/50 transition-colors text-left"
                            >
                                <span className="font-medium text-brand-dark">{faq.q}</span>
                                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="bg-white px-4 pb-4"
                                    >
                                        <p className="text-brand-gray text-sm pt-2">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
