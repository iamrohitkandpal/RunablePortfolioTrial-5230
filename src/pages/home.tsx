import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
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
    description: 'Developed a secure real-time chat platform with custom SPN-AES encryption and JWT authentication. Engineered 10ms message latency for 500+ concurrent users using WebSockets and optimized DB queries.',
    github: '#',
    demo: '#',
    image: '/hero-avatar.png'
  },
  {
    title: 'Rakshak - DDoS Protection System',
    period: 'Dec 2024 – Mar 2025',
    stack: ['Node.js', 'Nginx', 'AWS', 'Redis', 'MongoDB'],
    description: 'Built a real-time DDoS mitigation system with IP logging, rate limiting, and honeypot integration. Deployed load balancing on AWS EC2, improving request handling throughput by 40%.',
    github: '#',
    demo: '#',
    image: '/hero-avatar.png'
  },
  {
    title: 'Aakash Vaani - Voice-Based Mapping System',
    period: 'Sep 2024 – Dec 2024',
    stack: ['JavaScript', 'Leaflet.js', 'Web Speech API'],
    description: 'Built a voice-controlled mapping app integrating OpenStreetMap, Bhuvan, and NASA APIs for real-time navigation. Enabled natural voice commands and accessibility features.',
    github: '#',
    demo: '#',
    image: '/hero-avatar.png'
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
    <div className="min-h-screen gradient-bg">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border/50">
        <div className="max-w-[1055px] mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold text-lg text-foreground">RK</div>
          <div className="flex gap-3">
            <a 
              href="https://github.com/iamrohitkandpal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/rohit-kandpal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:iamrohitkandpal@gmail.com"
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-[1055px] mx-auto px-6">
        <section id="hero" className="min-h-[calc(100vh-73px)] flex items-center justify-center py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl"
          >
            <motion.div 
              className="inline-block mb-3"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-12 h-0.5 bg-foreground/30 mb-6 mx-auto" />
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm tracking-wider text-muted-foreground mb-4 uppercase"
            >
              Hello, I am
            </motion.p>

            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tight leading-tight"
            >
              Rohit Navinchandra Kandpal
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/90 font-medium mb-6"
            >
              Full Stack Developer
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              A passionate developer and lifelong learner, dedicated to crafting secure and scalable web applications and exploring the ever-evolving world of technology.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 justify-center mb-8"
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
              >
                Explore my projects
              </Button>
            </motion.div>

            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text-muted-foreground italic flex items-center gap-2 justify-center"
            >
              Already shipped 15+ projects 🇮🇳 IND
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-1 justify-center mt-8"
            >
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
              ))}
            </motion.div>
          </motion.div>
        </section>

        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        <section id="about" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              About Me
            </h2>

            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-dashed border-border rounded-xl p-8 mb-12 max-w-3xl mx-auto"
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer specializing in building secure and scalable web applications. 
                With expertise in modern JavaScript frameworks, cloud technologies, and cybersecurity principles, 
                I create robust solutions that prioritize both performance and security. Currently pursuing B.Tech 
                in Computer Science with specialization in Cyber Security at Silver Oak College of Engineering & Technology, 
                maintaining a CGPA of 9.11/10. I'm enthusiastic about system design, real-time applications, and 
                leveraging cutting-edge technologies to solve complex problems.
              </p>
            </motion.div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                >
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-md border border-border hover:bg-accent transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        <section id="experience" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Experience
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                  className="bg-card border border-dashed border-border rounded-xl p-6 hover:border-solid transition-all"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-muted rounded-lg border border-border">
                      <Briefcase className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium mb-0.5">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location} • {exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-foreground/50 mt-1 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        <section id="projects" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                  className="bg-card border border-dashed border-border rounded-xl overflow-hidden hover:border-solid transition-all group"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{project.period}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted text-foreground rounded-md border border-border hover:bg-accent transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        <section id="education" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Education & Achievements
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-dashed border-border rounded-xl p-6 hover:border-solid transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-muted rounded-lg border border-border">
                    <GraduationCap className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Bachelor of Technology in Computer Science and Engineering
                    </h3>
                    <p className="text-muted-foreground font-medium mb-0.5">Specialization: Cyber Security</p>
                    <p className="text-sm text-muted-foreground mb-2">Silver Oak College of Engineering & Technology</p>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span>Ahmedabad, Gujarat</span>
                      <span>•</span>
                      <span>2022 – Expected Jun 2026</span>
                      <span>•</span>
                      <span className="text-foreground font-semibold">CGPA: 9.11/10</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-card border border-dashed border-border rounded-xl p-6 hover:border-solid transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-muted rounded-lg border border-border">
                      <Award className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3">Certifications</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-foreground/50 mt-0.5">•</span>
                          <span>Frontend Domination (Sheryians)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground/50 mt-0.5">•</span>
                          <span>J.P. Morgan Software Engineering</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground/50 mt-0.5">•</span>
                          <span>J.P. Morgan Agile Program</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card border border-dashed border-border rounded-xl p-6 hover:border-solid transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-muted rounded-lg border border-border">
                      <Award className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3">Memberships</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-foreground/50 mt-0.5">•</span>
                          <span>Member of IEEE</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-foreground/50 mt-0.5">•</span>
                          <span>Member of Google Developers Club</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        <section id="contact" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-center mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <motion.a
                href="mailto:iamrohitkandpal@gmail.com"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-dashed border-border rounded-xl p-4 hover:border-solid transition-all flex items-center gap-3"
              >
                <div className="p-2 bg-muted rounded-lg border border-border">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <p className="text-sm text-foreground font-medium">iamrohitkandpal@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+917567054535"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card border border-dashed border-border rounded-xl p-4 hover:border-solid transition-all flex items-center gap-3"
              >
                <div className="p-2 bg-muted rounded-lg border border-border">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                  <p className="text-sm text-foreground font-medium">+91-7567054535</p>
                </div>
              </motion.a>
            </div>

            <motion.form
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-card border border-dashed border-border rounded-xl p-8 hover:border-solid transition-all"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border focus:border-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-border focus:border-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border focus:border-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </motion.form>
          </motion.div>
        </section>

        <footer className="py-12 border-t border-border/50 mt-20">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rohit Navinchandra Kandpal. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
