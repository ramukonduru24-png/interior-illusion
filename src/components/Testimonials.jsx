import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    { name: "Priya Sharma", loc: "Gachibowli", text: "Interior Illusions completely transformed our 3BHK apartment into a dream home. The team was incredibly professional, stuck strictly to the budget, and delivered on time. The attention to detail in the living room woodwork is just outstanding!", rating: 5 },
    { name: "Rahul Reddy", loc: "Kondapur", text: "Excellent craftsmanship and timely delivery. We hired them for our modular kitchen and wardrobe units, and the finish is top-notch. Highly recommend them for anyone looking for premium quality at reasonable prices.", rating: 5 },
    { name: "Sneha Gupta", loc: "Jubilee Hills", text: "I absolutely loved their minimalist design approach. They really took the time to understand our lifestyle and created a space that feels both modern and cozy. The color palette selection was perfect for our home.", rating: 4 },
    { name: "Vikram Singh", loc: "Hitech City", text: "A great experience from start to finish. The project manager kept us updated throughout the entire process, so we never had to worry. The final outcome exceeded our expectations, especially the master bedroom design.", rating: 5 },
    { name: "Anjali Rao", loc: "Manikonda", text: "Beautiful designs and very practical solutions for small spaces. They managed to create so much storage without making the rooms look cluttered. I'm very happy with the functionality and aesthetics.", rating: 5 },
    { name: "Karthik K", loc: "Madhapur", text: "Professional team, good quality materials, and on-time handover. There were a few minor delays due to material availability, but they handled it well and ensured the final finish was perfect.", rating: 4 },
    { name: "Meera Nair", loc: "Banjara Hills", text: "Elegant and luxurious designs. My living room looks like a 5-star hotel lobby! The lighting concepts they suggested made a huge difference to the ambiance. Truly premium service.", rating: 5 },
    { name: "Arjun Das", loc: "Kukatpally", text: "Value for money. They worked around my budget constraints perfectly without compromising on quality. The team was very patient with our changes and delivered a beautiful home.", rating: 5 },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-brand-ivory overflow-hidden">
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">What Our Clients Say</h2>
                <p className="text-brand-gray">Stories of happy homes and satisfied families.</p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden group">
                <div
                    className="flex gap-6 px-6 animate-marquee pause-on-hover"
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[400px] h-[240px] bg-white p-6 rounded-xl shadow-sm border border-brand-beige flex-shrink-0 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                        >
                            <div>
                                <div className="flex gap-1 text-brand-gold mb-3">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star
                                            key={starIndex}
                                            size={16}
                                            fill={starIndex < t.rating ? "currentColor" : "none"}
                                            className={starIndex < t.rating ? "" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <p className="text-brand-gray text-sm mb-4 leading-relaxed line-clamp-6">"{t.text}"</p>
                            </div>
                            <div className="border-t border-gray-100 pt-4">
                                <h4 className="font-bold text-brand-dark">{t.name}</h4>
                                <p className="text-xs text-gray-500">{t.loc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
