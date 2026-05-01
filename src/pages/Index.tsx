import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import LeadershipCard from "@/components/LeadershipCard";
import CourseCard from "@/components/CourseCard";
import ExperienceCard from "@/components/ExperienceCard";

const Index = () => {
  //  data for project cards
  const projects = [
    {
      title: "Distributed Real Time Chat System",
      description: "Engineered a horizontally scalable real-time chat system using WebSockets and Redis Pub/Sub, achieving sub-10ms latency across distributed server instances.",
      technologies: ["React","FastAPI","WebSockets","Redis","PostgreSQL","MongoDB","JWT"],
      githubLink: "https://github.com/kiahvaidya/social-media-toxicity-analyzer"
    },
    {
      title: "Neural Architecture Search using Genetic Algorithms",
      description: "Automated neural network architecture optimization using genetic algorithms with interactive visualization.",
      technologies: ["Python","Scikit-learn","Genetic Algorithms","Streamlit"],
      githubLink: "https://github.com/kiahvaidya/social-media-toxicity-analyzer"
    },
     {
      title: "Explainable AI Decision Platform",
      description: "Explainable AI system that converts model predictions into ranked, actionable business decisions using SHAP, LIME, and custom scoring.",
      technologies: ["Machine Learning","SHAP","LIME"],
      githubLink: "https://github.com/kiahvaidya/social-media-toxicity-analyzer"
    },
     {
      title: "Social Media Toxicity Analyzer",
      description: "This ML project detects toxic comments from YouTube, Twitter, Reddit, and custom text in English and Hinglish using TF-IDF and Logistic Regression.",
      technologies: ["Machine Learning","Logistic Regression","TF-IDF"],
      githubLink: "https://github.com/kiahvaidya/social-media-toxicity-analyzer"
    }
  ];

  // Skills data
const skills = [
  "Python",
  "JavaScript",
  "FastAPI",
  "WebSockets",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "Machine Learning",
  "NLP",
  "XGBoost",
  "SHAP",
  "LIME",
  "Git"
];

const ExperienceData = [
  {/* Internship Section */}
<section id="experience" className="section-padding">
  <div className="container mx-auto">
    <h2 className="section-heading">Experience</h2>
    
    <div className="max-w-3xl">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold">SAP Ariba Intern</h3>
        <p className="text-sm text-gray-500 mb-3">
          Bristlecone India Ltd · Dec 2025 – Feb 2026
        </p>
        
        <p className="mb-2">
          Worked on enterprise-scale Source-to-Pay (S2P) workflows, understanding how sourcing, contracts, and procurement systems operate in production environments.
        </p>
        
        <p className="mb-2">
          Analyzed structured data pipelines and automation flows, gaining insight into how large-scale systems handle transactions and approvals.
        </p>
        
        <p>
          Developed a strong understanding of system design constraints in enterprise applications, including scalability, reliability, and data consistency.
        </p>
      </div>
    </div>
    
  </div>
</section>
  ];

  //Course data
  const courseData = [
  {
    title: "Machine Learning with Python",
    provider: "L&T",
    certificateLink: "https://drive.google.com/file/d/1K85Xdv97iwLncO2Cbh3ATOel424YCMtu/view?usp=sharing"
  },
  {
    title: "Machine Learning Crash Course",
    provider: "Google for Developers",
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    provider: "Udemy",
    certificateLink: "https://drive.google.com/file/d/1giUHQ99ZSJNV0atRKaxaf9d-D0l5KVV1/view?usp=drive_link"
  },
  {
    title: "NoSQL and MongoDB",
    provider: "Infosys",
    certificateLink: "https://drive.google.com/file/d/17JYBJcSLos3v8jFLtr4D6naHZ6WlavKW/view?usp=sharing"
  }
];


  // Leadership data
  const leadershipRoles = [
    {
      emoji: "🏅",
      title: "Head of Creatives",
      organization: "ECSA",
      description: "Designed visual assets for college events and managed creative direction for publications."
    },
    {
      emoji: "🎨",
      title: "Creative Team",
      organization: "Student Council",
      description: "Led installation design for major events, coordinated with tech and logistics teams for smooth execution."
    },
    {
      emoji: "🗓️",
      title: "Cultural Team",
      organization: "Student Council",
      description: "Led and executed events, coordinating teams and managing logistics to ensure smooth and engaging experiences for participants."
    },
    {
      emoji: "📸",
      title: "Media Team",
      organization: "GDG",
      description: "Documented events, managed social media content, and created promotional materials."
    },
  
    {
      emoji: "🙌",
      title: "Volunteer",
      organization: "Kamal Foundation",
      description: "Contributed to social service initiatives, organizing community outreach programs."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero-height flex items-center section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-5 animate-fade-in">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
              Kiah Vaidya
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate mb-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
              I build things for the web & beyond.
            </h2>
            <p className="text-lg text-slate mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "400ms" }}>
             I’m an Electronics & Computer Science student who loves building creative tech, experimenting with machine learning
              and working on projects that actually make an impact.
            </p>
            <div className="animate-slide-up" style={{ animationDelay: "600ms" }}>
              <a href="#projects">
                <Button className="group">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                I'm a third-year Electronics & Computer Science student, focused on building 
                scalable backend systems and practical machine learning solutions.
              </p>
              <p className="mb-4">
                I like building things that actually work in real time from systems that talk
                to each other to ML projects that turn ideas into something more practical.
              </p>
              <p className="mb-6">
               Always building something new usually creative, sometimes a bit experimental
              </p>
              
              <div>
                <h3 className="text-xl font-medium mb-3">Skills & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} name={skill} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative group w-64 h-64">
                <div className="absolute inset-0 border-2 border-primary rounded translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="absolute inset-0 bg-gray-200 rounded">
                <img src="/kiah_photo.jpg" alt="Your Photo" />
                  <div className="flex items-center justify-center h-full text-gray-500">
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
        <section id="courses" className="section-padding">
          <div className="container mx-auto">
          <h2 className="section-heading">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.map((course, idx) => (
              <CourseCard
               key={idx} 
               provider={course.provider}
               title={course.title}
               certificateLink={course.certificateLink}
               />
            ))}
          </div>
          </div>
         </section>
      


      {/* Leadership Section */}
      <section id="leadership" className="section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading">Leadership & Clubs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipRoles.map((role, index) => (
              <LeadershipCard
                key={index}
                emoji={role.emoji}
                title={role.title}
                organization={role.organization}
                description={role.description}
              />
            ))}
          </div>
        </div>
      </section>

            {/* Resume Section */}
      <section id="resume" className="bg-secondary section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading">Resume</h2>
          <div className="flex flex-col items-center">
            <p className="text-center max-w-xl mb-8">
              Take a look at my full resume to see my educational background,
              skills, and experiences in detail.
            </p>
            <Button size="lg" asChild>
              <a href="/Kiah_Vaidya_Resume.pdf" download="Kiah_Vaidya_Resume.pdf">
                Download Resume
              </a>
            </Button>
            <div className="mt-16 bg-white p-6 rounded shadow-lg w-full max-w-2xl">
            <iframe
              src="/Kiah_Vaidya_Resume.pdf"
              width="600px"
              height="400px"
              className="rounded"
              title="Resume Preview"
            />
            </div>
          </div>
        </div>
      </section>     

      {/* Contact Section */}
      <section id="contact" className="bg-secondary section-padding">
        <div className="container mx-auto">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-6">
                I'm currently looking for internship opportunities and interesting projects
                to collaborate on. Whether you have a question or just want to say hi,
                I'll do my best to get back to you!
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/kiahvaidya/" target="_blank" rel="noreferrer" className="nav-item">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/kiahvaidya/" target="_blank" rel="noreferrer" className="nav-item">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/kiahvaidya//" target="_blank" rel="noreferrer" className="nav-item">
                    Instagram
                  </a>
                </div>
              </div>
              <p className="text-primary font-medium">
               <a href="https://mail.google.com/mail/?view=cm&to=kiahv17@gmail.com" target="_blank">
                   <button>Email: kiahv17@gmail.com </button>
                 </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
