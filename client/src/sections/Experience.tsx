import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";

const Experience = () => {
  const { experiences } = resumeData;
  
  return (
    <section className="mb-12">
      <Card className="bg-black/40 border border-white/10 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Professional Experience</h2>
          
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="bg-black/60 border border-white/10 rounded-lg p-5 mb-6 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                  <p className="text-primary font-medium">{experience.company}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-white/70">{experience.location}</p>
                  <p className="text-white/60 text-sm">{experience.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-white/80 space-y-2 ml-1">
                {experience.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Experience;
