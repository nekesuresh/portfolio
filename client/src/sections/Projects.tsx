import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const Projects = () => {
  const { projects } = resumeData;
  
  return (
    <section className="mb-12">
      <Card className="bg-black/40 border border-white/10 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-black/60 border border-white/10 rounded-lg p-5 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a href={project.liveLink} className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a href={project.repoLink} className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                        <FileText className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-primary/90 font-medium text-sm mb-2">{project.subtitle}</p>
                </div>
                <p className="text-white/80 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-xs text-white/80 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Projects;
