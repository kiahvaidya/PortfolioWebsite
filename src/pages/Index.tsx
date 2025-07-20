import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import LeadershipCard from "@/components/LeadershipCard";
import CourseCard from "@/components/CourseCard";

const Index = () => {
  //  data for project cards
  const projects = [
  

    {
      title: "Music Recommendor",
      description: "Provides recommendations based on a keyword or song input.",
      technologies: ["Streamlit", "Python", "Machine Learning"],
      githubLink: "https://github.com/kiahvaidya/MusicRecommender",
      
    },
    {
      title: "Flappy Bird (COA Project)",
      description: "Flappy Bird clone created with assembly language",
      technologies: ["Assembly", "Computer Architecture"],
      githubLink: "https://github.com/kiahvaidya/FlappyBirdTasm",
      
    },
    {
      title: "Battery Level Indicator",
      description: "Electronic device to monitor battery levels with LED indicators",
      technologies: ["Electronics", "PCB Design"],
    },
    {
      title: "Memory Game",
      description: "A classic memory matching game built with Python and Tkinter",
      technologies: ["Tkinter", "UX Design", "Python"],
      githubLink: "https://github.com/kiahvaidya/MemoryGame"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website highlighting my work, expertise, and achievements.",
      technologies: ["HTML","Javascript","React"],
      githubLink: "https://github.com/kiahvaidya/PortfolioWebsite"
    },
    {
      title: "Voice Assistant",
      description: "A a Python-based voice assistant powered by the ElevenLabs Conversational AI API.",
      technologies: ["Python","ElevenLabs API",],
      githubLink: "https://github.com/kiahvaidya/VoiceAssistant"
    },
    {
      title: "Discord Meme Bot",
      description: "A a Python-based simple bot that replies with a random meme from Reddit when you type $meme.",
      technologies: ["Python","Replit",],
      githubLink: "https://github.com/kiahvaidya/DiscordMemeBot"
    },
     {
      title: "Flight Fare Prediction",
      description: "This project uses regression machine learning to predict flight fares based on airline, source, destination, duration, and other flight-related features.",
      technologies: ["Machine Learning","Jupyter Notebook"],
      githubLink: "https://github.com/kiahvaidya/FlightFarePrediction"
    },
    {
      title: "F1 Prediction",
      description: "This project uses classification machine learning to predict podium finishers for upcoming Formula 1 races .",
      technologies: ["Machine Learning","Jupyter Notebook","FastF1"],
      githubLink: "https://github.com/kiahvaidya/f1prediction"
    }
  ];

  // Skills data
  const skills = [
    "HTML", "CSS", "JavaScript", "React",  
    "Python", "PCB Design", 
    "UI/UX"
  ];

  //Course data
  const courseData = [
  {
    title: "Machine Learning with Python",
    provider: "L&T",
    certificateLink: "https://drive.google.com/file/d/1K85Xdv97iwLncO2Cbh3ATOel424YCMtu/view?usp=sharing"
  },
  {
    title: "TCS iON Career Edge- Young Professional",
    provider: "TCS-iON",
    certificateLink: "https://drive.google.com/file/d/1RnKRklT4djxsJckoIt9PTg0nZJZck6qr/view?usp=sharing"
  },
  {
    title: "Java Programming Fundamentals",
    provider: "Infosys",
    certificateLink: "https://drive.google.com/file/d/13_rVg0vpFmZHk6SXz6jPP4QeaxBIfOUp/view?usp=sharing"
  },
  {
    title: "Matlab Onramp , Fundamentals and Simulink",
    provider: "Matlab",
    certificateLink: "https://drive.google.com/drive/folders/1OgH9LSRdEKb1XAYtHy5pMqMgQp8mf8Ud?usp=sharing://example.com/https://drive.google.com/file/d/13_rVg0vpFmZHk6SXz6jPP4QeaxBIfOUp/view?usp=sharing-cert"
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
              I'm an Electronics & Computer Science Engineering student passionate 
              about web development, tech creativity, and impactful community work.
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
                I'm currently a third-year EXCS student at Vidyalankar Institute of Technology,
                where I'm honing my skills in both electronics and computer science.
              </p>
              <p className="mb-4">
                My interest spans across web development, electronics projects, student leadership,
                and event organizing. I enjoy bringing creative solutions to technical challenges and
                building things that make a difference.
              </p>
              <p className="mb-6">
                When I'm not coding or soldering, you can find me designing creative installations for
                college events or collaborating with other students on innovative projects.
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
                <img src="/20241125_064811774_iOS.jpg" alt="Your Photo" />
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
            {projects.map((project, index) => (
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
              <a href="/CV_KiahVaidya1.pdf" download="Kiah_Vaidya_Resume.pdf">
                Download Resume
              </a>
            </Button>
            <div className="mt-16 bg-white p-6 rounded shadow-lg w-full max-w-2xl">
            <iframe
              src="/CV_KiahVaidya1.pdf"
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
                Email: kiahv17@gmail.com
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
