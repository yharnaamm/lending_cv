import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">A showcase of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
                }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white flex items-center gap-2">
                      <ExternalLink size={20} />
                      View Details
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
