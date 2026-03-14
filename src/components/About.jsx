import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    return (
        <section id="about" className="bg-slate-50 dark:bg-slate-900/50 py-20">
            <div className="section-container">
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl w-full text-center"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-slate-900 dark:text-white">
                            About Me
                        </h2>
                        <div className="space-y-8 text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
                            <p className="max-w-3xl mx-auto font-light leading-loose">{portfolioData.about}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 max-w-3xl mx-auto text-left">
                                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-xl font-display">Location</h4>
                                    <a 
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(portfolioData.location)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline transition-all"
                                    >
                                        {portfolioData.location}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
