import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="section-container">
                <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                    Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600 shrink-0">
                                <Award size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{cert.name}</h3>
                                <p className="text-slate-500 text-sm mb-4">{cert.issuer}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm hover:underline"
                                >
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
