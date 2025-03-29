import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import { MapPin, Mail, Phone, AtSign } from 'lucide-react';

const About = () => {
  const { contactInfo } = resumeData;
  
  return (
    <section className="mb-12">
      <Card className="bg-black/40 border border-white/10 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-white/80 mb-4">
                I'm a Computer Science graduate student at the University of North Carolina at Charlotte with a passion for developing intelligent solutions that solve real-world problems. With experience in machine learning, data analysis, and full-stack development, I bring a comprehensive approach to software engineering challenges.
              </p>
              <p className="text-white/80 mb-4">
                My professional journey includes multiple internships where I've applied machine learning techniques to enhance business outcomes, developed responsive web applications, and engineered data-driven solutions that produce tangible results.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/70">{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/70">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/70">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <AtSign className="h-5 w-5 text-primary mr-2" />
                    <span className="text-white/70">LinkedIn / Github</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full p-1 w-48 h-48 flex items-center justify-center">
                <div className="bg-black rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
