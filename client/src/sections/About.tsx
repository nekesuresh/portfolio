import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import { MapPin, Mail, Phone, AtSign, Code, Star, Book, Cpu } from 'lucide-react';
import profileImg from "@assets/WhatsApp Image 2025-03-29 at 19.17.03_b83321a6.jpg";

const About = () => {
  const { contactInfo } = resumeData;
  
  return (
    <section className="mb-12 animate-fade-in">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="tech-card border-primary/10 shadow-lg overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid-background absolute inset-0"></div>
          </div>
          
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="md:w-1/3 lg:w-1/4 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 blur-md"></div>
                  <div className="relative rounded-full overflow-hidden w-48 h-48 border-2 border-primary/30 profile-image">
                    <img 
                      src={profileImg} 
                      alt="Neketha Suresh" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/40"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/40"></div>
                </div>
                
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  <div className="tech-card p-3 rounded-md text-center">
                    <Code className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">Developer</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Star className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">5+ Projects</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Book className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">MS CS</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Cpu className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">AI/ML</p>
                  </div>
                </div>
              </div>
              
              {/* About Content */}
              <div className="md:w-2/3 lg:w-3/4">
                <h2 className="futuristic-title text-2xl md:text-3xl font-bold mb-6 inline-block">
                  About Me
                  <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-1"></div>
                </h2>
                
                <div className="space-y-4 text-white/80">
                  <p className="futuristic-subtitle">
                    I'm a Computer Science graduate student at the University of North Carolina at Charlotte with a passion for developing intelligent solutions that solve real-world problems. With experience in machine learning, data analysis, and full-stack development, I bring a comprehensive approach to software engineering challenges.
                  </p>
                  <p>
                    My professional journey includes multiple internships where I've applied machine learning techniques to enhance business outcomes, developed responsive web applications, and engineered data-driven solutions that produce tangible results.
                  </p>
                  <p>
                    I'm constantly exploring new technologies and frameworks to stay at the cutting edge of software development, with a particular interest in artificial intelligence and its applications across various domains.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="futuristic-subtitle text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="tech-card p-3 rounded-md flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white/80">{contactInfo.location}</span>
                    </div>
                    <div className="tech-card p-3 rounded-md flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white/80">{contactInfo.email}</span>
                    </div>
                    <div className="tech-card p-3 rounded-md flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white/80">{contactInfo.phone}</span>
                    </div>
                    <div className="tech-card p-3 rounded-md flex items-center">
                      <AtSign className="h-5 w-5 text-primary mr-3" />
                      <span className="text-white/80">LinkedIn / Github</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
