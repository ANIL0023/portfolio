import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Achievements = () => {
    // Helper to get icon component
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Code': return <Code size={24} />;
            case 'Award': return <Award size={24} />;
            default: return <Award size={24} />;
        }
    };

    return (
        <section id="achievements" className="py-20 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Achievements
                    </h2>
                    <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {portfolioData.achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary-500/50 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary-600/10 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {getIcon(achievement.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {achievement.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
