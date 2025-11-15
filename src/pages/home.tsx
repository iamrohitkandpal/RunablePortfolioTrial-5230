import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const skills = {
  'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'Java', 'SQL'],
  'Frameworks & Technologies': ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Next.js'],
  'Tools & Platforms': ['Git', 'GitHub', 'Docker', 'AWS', 'Nginx', 'Redis', 'Postman', 'VS Code', 'Linux']
};

const experiences = [
  {
    role: 'Brand Web Developer',
    company: 'Freelance',
    location: 'Ahmedabad, Gujarat',
    period: 'Jul 2025 – Aug 2025',
    achievements: [
      'Developed and deployed 2 client websites (Insperia Technology & Brandvia Digital) achieving 90+ Lighthouse SEO score and improved responsiveness by 35%',
      'Enhanced user engagement through optimized design, Bootstrap framework, and modern web practices'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'CodTech IT Solutions Pvt. Ltd.',
    location: 'Remote',
    period: 'Dec 2024 – Jan 2025',
    achievements: [
      'Built 3+ full-stack applications including a chat app (Socket.io), weather app (MERN), and a productivity extension',
      'Implemented RESTful APIs with Node.js/Express and integrated OAuth authentication with Clerk',
      'Learned CI/CD, deployment pipelines, and API security fundamentals'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Prodigy Infotech Pvt. Ltd.',
    location: 'Remote',
    period: 'Jun 2024 – Jul 2024',
    achievements: [
      'Developed 4-5 frontend projects using ReactJS, Tailwind CSS, SwiperJS, ensuring responsiveness and accessibility',
      'Applied UI/UX best practices and improved SEO readiness of multiple static sites'
    ]
  }
];

const projects = [
  {
    title: 'KrishnaCrypt',
    period: 'Apr 2025 – Jun 2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    description: 'Developed a secure real-time chat platform with custom SPN-AES encryption and JWT authentication. Engineered 10ms message latency for 500+ concurrent users using WebSockets and optimized DB queries. Implemented role-based key management, encryption visualization, and scalable cloud deployment via Docker.',
    github: '#',
    demo: '#'
  },
  {
    title: 'Rakshak - DDoS Protection System',
    period: 'Dec 2024 – Mar 2025',
    stack: ['Node.js', 'Nginx', 'AWS', 'Redis', 'MongoDB'],
    description: 'Built a real-time DDoS mitigation system with IP logging, rate limiting, and honeypot integration. Deployed load balancing on AWS EC2, improving request handling throughput by 40%.',
    github: '#',
    demo: '#'
  },
  {
    title: 'Aakash Vaani - Voice-Based Mapping System',
    period: 'Sep 2024 – Dec 2024',
    stack: ['JavaScript', 'Leaflet.js', 'Web Speech API'],
    description: 'Built a voice-controlled mapping app integrating OpenStreetMap, Bhuvan, and NASA APIs for real-time navigation. Enabled natural voice commands and accessibility features using the Web Speech API.',
    github: '#',
    demo: '#'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative">
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img 
                src="/hero-avatar.png" 
                alt="Rohit Navinchandra Kandpal" 
                className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
              />
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Rohit Navinchandra Kandpal
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl text-cyan-400 font-semibold mb-6"
            >
              Full Stack Developer
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Building secure and scalable web applications with strong fundamentals in system design and cybersecurity
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 justify-center mt-12"
            >
              <a 
                href="https://github.com/iamrohitkandpal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/rohit-kandpal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:iamrohitkandpal@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="tel:+917567054535"
                className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h2>

              <motion.div 
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] mb-12"
              >
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm a passionate Full Stack Developer specializing in building secure and scalable web applications. 
                  With expertise in modern JavaScript frameworks, cloud technologies, and cybersecurity principles, 
                  I create robust solutions that prioritize both performance and security. Currently pursuing B.Tech 
                  in Computer Science with specialization in Cyber Security at Silver Oak College of Engineering & Technology, 
                  maintaining a CGPA of 9.11/10. I'm enthusiastic about system design, real-time applications, and 
                  leveraging cutting-edge technologies to solve complex problems.
                </p>
              </motion.div>

              <div className="space-y-8">
                {Object.entries(skills).map(([category, items], idx) => (
                  <motion.div
                    key={category}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02]"
                  >
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 hover:scale-105 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-20 px-4 bg-slate-950/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Experience
              </h2>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <Briefcase className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                        <p className="text-cyan-400 font-semibold mb-1">{exp.company}</p>
                        <p className="text-slate-400 text-sm">{exp.location} • {exp.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 ml-16">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-300 leading-relaxed flex gap-3">
                          <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.05] group flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <Code2 className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-xs text-slate-500">{project.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs bg-slate-800/50 text-slate-400 rounded border border-slate-700 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 hover:scale-105 text-sm"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-all duration-300 hover:scale-105 text-sm shadow-lg shadow-cyan-600/30"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="education" className="py-20 px-4 bg-slate-950/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Education & Achievements
              </h2>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] group mb-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">
                      Bachelor of Technology in Computer Science and Engineering
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-1">Specialization: Cyber Security</p>
                    <p className="text-slate-400 mb-2">Silver Oak College of Engineering & Technology</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <span>Ahmedabad, Gujarat</span>
                      <span>•</span>
                      <span>2022 – Expected Jun 2026</span>
                      <span>•</span>
                      <span className="text-cyan-400 font-semibold">CGPA: 9.11/10</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-3">Certifications</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Frontend Domination (Sheryians)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>J.P. Morgan Software Engineering</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>J.P. Morgan Agile Program</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-3">Memberships</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Member of IEEE</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>Member of Google Developers Club</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.a
                  href="mailto:iamrohitkandpal@gmail.com"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.05] group flex items-center gap-4"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <p className="text-slate-100 font-semibold">iamrohitkandpal@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+917567054535"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.05] group flex items-center gap-4"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <p className="text-slate-100 font-semibold">+91-7567054535</p>
                  </div>
                </motion.a>
              </div>

              <motion.form
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-slate-100 placeholder:text-slate-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-slate-100 placeholder:text-slate-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-800/50 border-slate-700 focus:border-cyan-500 text-slate-100 placeholder:text-slate-500 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02]"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </section>

        <footer className="py-8 px-4 border-t border-slate-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Rohit Navinchandra Kandpal. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
