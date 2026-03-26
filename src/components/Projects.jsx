import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative glass-card overflow-hidden h-full flex flex-col"
    >
        <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full shadow-xl hover:text-primary-600 hover:scale-110 transition-all">
                        <Github size={20} />
                    </a>
                    {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full shadow-xl hover:text-primary-600 hover:scale-110 transition-all">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="section-container">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 sm:mb-16 text-center text-slate-900 dark:text-white">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
