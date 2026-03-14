import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20">
            <div className="section-container">
                <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-white">Education</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 flex flex-col md:flex-row gap-6 items-start"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600 shrink-0">
                                <GraduationCap size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                                    <span className="text-primary-600 font-medium">{edu.year}</span>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">{edu.institution}</p>
                                <div className="inline-block px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                                    {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Score: ${edu.score}`}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
