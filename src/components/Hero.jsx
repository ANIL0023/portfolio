import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-20">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-6 font-medium">
                            <span className="relative flex h-3 w-3 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                            </span>
                            Open to new opportunities
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
                            Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">{portfolioData.name.split(' ')[0]}</span>
                        </h1>

                        <h2 className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed">
                            {portfolioData.title}
                        </h2>

                        <p className="text-lg text-slate-500 dark:text-slate-500 mb-10 max-w-xl">
                            {portfolioData.tagline}
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="#projects" className="btn-primary flex items-center gap-2">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href={portfolioData.resume} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                                Download Resume <Download size={18} />
                            </a>
                            <div className="flex gap-3 ml-2">
                                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-full hover:text-primary-600 hover:border-primary-500 transition-all shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-full hover:text-primary-600 hover:border-primary-500 transition-all shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-slate-400">
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(portfolioData.location)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-primary-600 transition-colors"
                            >
                                <MapPin size={18} />
                                <span>{portfolioData.location}</span>
                            </a>
                            <a 
                                href={`mailto:${portfolioData.email}`}
                                className="flex items-center gap-2 hover:text-primary-600 transition-colors"
                            >
                                <Mail size={18} />
                                <span>{portfolioData.email}</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
                            <motion.div 
                                className="relative z-10 w-full h-full glass-card flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-800 transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <img
                                    src={portfolioData.profileImage}
                                    alt={portfolioData.name}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
