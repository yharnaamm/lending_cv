import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">{project.title}</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-lg transition-all transform hover:scale-105"
              >
                <Github size={20} />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
