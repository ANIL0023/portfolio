import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Code2, Globe, Database, Cpu } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        className="glass-card p-6 border-slate-100 dark:border-slate-800"
    >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 flex items-center justify-center text-primary-600 mb-6 shadow-lg shadow-primary-500/10 border border-primary-500/20">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-sm font-medium hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-sm"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="section-container">
                <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-white">My Skillset</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillCategory
                        title="Languages"
                        skills={portfolioData.skills.languages}
                        icon={Code2}
                    />
                    <SkillCategory
                        title="Web Dev"
                        skills={portfolioData.skills.web}
                        icon={Globe}
                    />
                    <SkillCategory
                        title="Data & Tools"
                        skills={portfolioData.skills.tools}
                        icon={Database}
                    />
                    <SkillCategory
                        title="Soft Skills"
                        skills={portfolioData.skills.soft}
                        icon={Cpu}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
