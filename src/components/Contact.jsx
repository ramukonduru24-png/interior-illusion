import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-brand-dark text-white">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Get In Touch</h2>
                    <p className="text-gray-400 mb-8">Ready to start your dream project? Send us a message.</p>

                    <form className="space-y-4">
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                        >
                            <input type="text" placeholder="Name" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-500 transition-all duration-300 focus:scale-105" />
                            <input type="tel" placeholder="Phone" className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-500 transition-all duration-300 focus:scale-105" />
                        </motion.div>
                        <motion.input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-500 transition-all duration-300 focus:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        />
                        <motion.input
                            type="text"
                            placeholder="Location / Area"
                            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-500 transition-all duration-300 focus:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        />
                        <motion.textarea
                            rows="4"
                            placeholder="Tell us about your requirements..."
                            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-brand-gold text-white placeholder-gray-500 transition-all duration-300 focus:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        />

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <motion.button
                                type="submit"
                                className="flex-1 bg-brand-gold text-brand-dark font-bold py-3 rounded-lg hover:bg-white transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit Enquiry
                            </motion.button>
                            <motion.button
                                type="button"
                                className="flex-1 border border-green-500 text-green-400 font-bold py-3 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send size={18} /> Send via WhatsApp
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Contact Info & Map */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-4">
                        {[
                            { icon: MapPin, title: "Visit Us", content: "H.No.7-31/16, Laxmi Narsimha Swamy Colony,\nHydershahkote Village, beside Brownbrar bakery,\nOpposite Suzuki Service Centre, Sun City,\nHyderabad, Telangana 500091" },
                            { icon: Phone, title: "Call Us", content: "08317503596" },
                            { icon: Mail, title: "Email Us", content: "hello@interiorillusions.com" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <motion.div
                                    className="bg-brand-gold/20 p-3 rounded-full text-brand-gold"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <item.icon size={24} />
                                </motion.div>
                                <div>
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map Embed */}
                    <motion.div
                        className="w-full h-64 bg-gray-800 rounded-xl overflow-hidden border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6668456456!2d78.38!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzQ4LjAiTiA3OMKwMjInNDguMCJF!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
