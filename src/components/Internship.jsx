import React from 'react';
import { motion } from 'framer-motion';
import { 
    Shield, 
    Calendar, 
    MapPin, 
    CheckCircle2, 
    Cpu, 
    Activity, 
    Database, 
    FileText, 
    Globe, 
    Terminal,
    Lock,
    Network,
    ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Internship = () => {
    // Mapping icons to technology categories or specific techs if needed
    const getTechIcon = (tech) => {
        const t = tech.toLowerCase();
        if (t.includes('python') || t.includes('socket')) return <Terminal size={14} />;
        if (t.includes('sqlite') || t.includes('json')) return <Database size={14} />;
        if (t.includes('reportlab') || t.includes('pdf')) return <FileText size={14} />;
        if (t.includes('ssh') || t.includes('winrm') || t.includes('paramiko')) return <Lock size={14} />;
        if (t.includes('network')) return <Network size={14} />;
        return <Cpu size={14} />;
    };

    return (
        <section id="internship" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-white">
                        Internship Experience
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    {portfolioData.internships.map((intern, index) => (
                        <div key={index} className="relative">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="group lg:flex gap-12 items-stretch"
                            >
                                {/* Left Side: Organization Info */}
                                <div className="lg:w-1/3 mb-10 lg:mb-0">
                                    <div className="sticky top-32">
                                        <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 group-hover:border-primary-500/30 group-hover:shadow-primary-500/10">
                                            {/* Logo Badge */}
                                            <div className="w-20 h-20 rounded-2xl bg-primary-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-primary-600/20 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                                <Shield size={40} strokeWidth={1.5} />
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                                {intern.company}
                                            </h3>
                                            
                                            <div className="flex items-center gap-2 text-primary-600 font-bold mb-6">
                                                <Activity size={18} />
                                                <span className="uppercase text-xs tracking-widest">{intern.role}</span>
                                            </div>

                                            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-500">
                                                        <Calendar size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-tighter text-slate-400">Duration</p>
                                                        <span className="text-sm font-semibold">{intern.period}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-500">
                                                        <MapPin size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] uppercase tracking-tighter text-slate-400">Location</p>
                                                        <span className="text-sm font-semibold">{intern.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Role Details */}
                                <div className="lg:w-2/3">
                                    <div className="glass-card p-10 h-full border border-slate-200 dark:border-slate-800 hover:border-primary-500/30 transition-all duration-500 group-hover:shadow-inner-glow relative overflow-hidden">
                                        {/* Subtle Background Icon */}
                                        <div className="absolute top-10 right-10 text-slate-100 dark:text-slate-800/20 -z-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                            <Network size={200} strokeWidth={0.5} />
                                        </div>

                                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Enterprise Network <span className="text-primary-600">Audit & Discovery</span> System</h4>
                                        
                                        <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed font-light">
                                            {intern.description}
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                            {intern.details.map((detail, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * idx }}
                                                    className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-800 group/item"
                                                >
                                                    <div className="mt-1 text-primary-500 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                                                        <CheckCircle2 size={20} />
                                                    </div>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                                        {detail}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6 font-bold flex items-center gap-2">
                                                <Terminal size={14} className="text-primary-500" /> Technology Stack
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                {intern.technologies.map((tech, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="px-4 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500/50 hover:text-primary-600 transition-all flex items-center gap-2 group/tech"
                                                    >
                                                        <span className="text-primary-500 group-hover/tech:scale-110 transition-transform">
                                                            {getTechIcon(tech)}
                                                        </span>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internship;
