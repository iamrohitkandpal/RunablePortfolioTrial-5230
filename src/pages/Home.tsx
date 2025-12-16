import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { projects } from '@/data/projects';

const ParticlesBackground = lazy(() => import('@/components/ParticlesBackground'));

// Initialize EmailJS
emailjs.init('_I1bpBsJAXuAacsn7');

const skills = {
  'Languages': ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++'],
  'Full-Stack & Cloud': ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'FastAPI', 'Socket.io', 'MongoDB', 'MySQL', 'Redis', 'Docker', 'AWS', 'Git', 'CI/CD'],
  'Data & Security': ['Scikit-learn', 'TensorFlow.js', 'Prophet', 'Pandas', 'Hugging Face', 'TextBlob', 'VADER', 'Custom Cryptography', 'OWASP', 'Streamlit', 'Plotly']
};

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'WebStack Academy (Emertxe)',
    location: 'Remote',
    period: 'Sep 2025 – Nov 2025',
    achievements: [
      'Built MERN-based project prototypes in a collaborative remote environment using Git-based workflows',
      'Learned cloud deployment concepts on Oracle Cloud Infrastructure (OCI), including VPCs, compute instances, machine images, Nginx reverse proxy, and domain configuration',
      'Implemented core MERN features such as email verification and other utilities, gaining exposure to production-oriented application design'
    ]
  },
  {
    role: 'Brand Web Developer',
    company: 'Freelance',
    location: 'Ahmedabad, Gujarat',
    period: 'Jul 2025 – Aug 2025',
    achievements: [
      'Developed and deployed 2 client websites (Insperia Technology & Brandvia Digital) achieving 90+ Lighthouse SEO score and improved responsiveness by 35%',
      'Enhanced user engagement through optimized design, Bootstrap framework, and modern web practices (Swiper.js, AOS, GLightbox) across devices',
      'Optimized performance with lazy loading, optimized assets, and semantic HTML'
    ]
  },
  {
    role: 'MERN Developer',
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

const certifications = [
  {
    title: 'Frontend Domination',
    issuer: 'Sheryians',
    date: '2024',
    description: 'Built advanced web interfaces and animations using React and modern CSS.',
    icon: Award
  },
  {
    title: 'Software Engineering Virtual Experience',
    issuer: 'J.P. Morgan',
    date: '2024',
    description: 'Resolved data feed issues and implemented live stock data visualization using Python.',
    icon: Award
  },
  {
    title: 'Agile Job Simulation',
    issuer: 'J.P. Morgan',
    date: '2024',
    description: 'Learned Agile frameworks, drafted user stories, and simulated sprint review sessions.',
    icon: Award
  }
];

const memberships = [
  {
    title: 'Member of IEEE',
    organization: 'Institute of Electrical and Electronics Engineers',
    date: '2023 - Present',
    description: 'Active member participating in technical workshops and research initiatives.',
    icon: Award
  },
  {
    title: 'Member of Google Developers Club',
    organization: 'Google Developers',
    date: '2023 - Present',
    description: 'Contributing to community events and collaborative development projects.',
    icon: Award
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentExpIndex, setCurrentExpIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectsPerPage = 3;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_ls4qv1f', // Service ID
        'template_27mfmkn', // Template ID
        {
          to_email: 'iamrohitkandpal@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 4 seconds
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextExperience = () => {
    setCurrentExpIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentExpIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const nextProjects = () => {
    setCurrentProjectIndex((prev) =>
      Math.min(prev + projectsPerPage, projects.length - projectsPerPage)
    );
  };

  const prevProjects = () => {
    setCurrentProjectIndex((prev) => Math.max(prev - projectsPerPage, 0));
  };

  const displayedProjects = projects.slice(currentProjectIndex, currentProjectIndex + projectsPerPage);
  const canGoPrev = currentProjectIndex > 0;
  const canGoNext = currentProjectIndex + projectsPerPage < projects.length;

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <Suspense fallback={null}>
        <ParticlesBackground />
      </Suspense>

      {/* Enhanced Animated background effects */}
      <div className="fixed inset-0 pointer-events-none hidden md:block">
        {/* Animated gradient orbs with multiple colors */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-linear-to-tl from-pink-500/20 via-indigo-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-linear-to-br from-cyan-500/15 via-teal-500/15 to-transparent rounded-full blur-3xl"
        />

        {/* Subtle light beams */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-linear-to-b from-foreground/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-linear-to-b from-foreground/8 via-transparent to-transparent" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl text-foreground"
          >
            RK
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <a
              href="https://github.com/iamrohitkandpal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-all hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-kandpal-"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-all hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/u/rohitkandpal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-lg transition-all hover:scale-110"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Hero Section - Redesigned */}
        <section id="hero" className="min-h-[calc(100vh-73px)] flex items-center py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-foreground/30" />
                <span className="text-sm tracking-widest text-muted-foreground uppercase">
                  Portfolio 2025
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-foreground">Rohit</span>
                <br />
                <span className="text-foreground/70">Kandpal</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-3">
                  Full Stack Developer
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  A developer who writes code, breaks things, fixes them,
                  and calls it "learning experience."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="rounded-full px-8"
                >
                  Get In Touch
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4 mt-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Open to Opportunities</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <span>🇮🇳 Based in India</span>
              </motion.div>
            </motion.div>

            {/* Right side - Animated visual element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block relative"
            >
              <div className="relative w-full aspect-square">
                {/* Animated code blocks */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 right-0 w-48 h-32 bg-card border border-border rounded-lg p-4 backdrop-blur-sm"
                >
                  <Code2 className="w-6 h-6 mb-2 text-foreground/70" />
                  <div className="space-y-2">
                    <div className="h-2 bg-foreground/20 rounded w-3/4" />
                    <div className="h-2 bg-foreground/10 rounded w-1/2" />
                    <div className="h-2 bg-foreground/20 rounded w-2/3" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-0 left-0 w-56 h-40 bg-card border border-border rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                    <span className="text-xs text-muted-foreground">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-foreground/20 rounded w-full" />
                    <div className="h-2 bg-foreground/10 rounded w-4/5" />
                    <div className="h-2 bg-foreground/20 rounded w-3/5" />
                    <div className="h-2 bg-foreground/10 rounded w-2/3" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 right-1/4 w-32 h-32 bg-linear-to-br from-foreground/10 to-transparent rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-1 h-1 rounded-full bg-foreground/20"
              />
            ))}
          </div>
        </div>

        {/* About Section */}
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
              className="bg-card border border-dashed border-border rounded-xl p-8 mb-12 max-w-3xl mx-auto hover:border-solid transition-all"
            >
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                I'm a 20-year-old full-stack developer who writes code, Googles errors, and hopes everything compiles before losing motivation.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                My workflow? Write code → pray it works → celebrate when it actually does (rare, but magical).
                Mostly just trying to make things work without breaking the entire project in the process.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Professional debugger at 3 AM. If it compiles, it ships. If it doesn't... that's what Stack Overflow is for.
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
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-md border border-border hover:bg-accent hover:border-solid transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        {/* Experience Section */}
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

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="min-h-80 md:min-h-[280px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentExpIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="bg-card border border-dashed border-border rounded-xl p-6 hover:border-solid transition-all"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-muted rounded-lg border border-border">
                          <Briefcase className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">{experiences[currentExpIndex].role}</h3>
                          <p className="text-muted-foreground font-medium mb-0.5">{experiences[currentExpIndex].company}</p>
                          <p className="text-sm text-muted-foreground">{experiences[currentExpIndex].location} • {experiences[currentExpIndex].period}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 ml-11">
                        {experiences[currentExpIndex].achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-foreground/50 mt-1 shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevExperience}
                    className="rounded-full hover:scale-110 transition-transform"
                    aria-label="Previous experience"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  <div className="flex gap-2">
                    {experiences.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentExpIndex(idx)}
                        className={`h-2 rounded-full transition-all ${idx === currentExpIndex
                            ? 'bg-foreground w-8'
                            : 'bg-foreground/30 w-2'
                          }`}
                        aria-label={`Go to experience ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextExperience}
                    className="rounded-full hover:scale-110 transition-transform"
                    aria-label="Next experience"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  {currentExpIndex + 1} of {experiences.length}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        {/* Projects Section - Redesigned */}
        <section id="projects" className="py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Featured Projects
              </h2>

              {/* Carousel Navigation */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevProjects}
                  disabled={!canGoPrev}
                  className="rounded-full hover:scale-110 transition-transform disabled:opacity-30"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextProjects}
                  disabled={!canGoNext}
                  className="rounded-full hover:scale-110 transition-transform disabled:opacity-30"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto min-h-[400px]">
              <AnimatePresence mode="wait">
                {displayedProjects.map((project, idx) => (
                  <motion.div
                    key={`${currentProjectIndex}-${project.id}`}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="bg-card border border-dashed border-border rounded-xl overflow-hidden hover:border-solid transition-all group flex flex-col h-full"
                  >
                    {/* Card Content - Fixed Layout */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 3 && (
                            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded border border-border">
                              +{project.stack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Buttons - Always at bottom */}
                      <div className="flex gap-3 mt-auto pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm bg-muted text-foreground rounded-md border border-border hover:bg-accent transition-all flex-1"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <button
                          onClick={() => navigate(`/project/${project.id}`)}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 text-sm bg-foreground text-background rounded-md hover:bg-foreground/90 transition-all flex-1 group/btn"
                          aria-label={`View ${project.title} details`}
                        >
                          Details
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, idx) => {
                const pageStart = idx * projectsPerPage;
                const isActive = currentProjectIndex === pageStart;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentProjectIndex(pageStart)}
                    className={`h-2 rounded-full transition-all ${isActive
                        ? 'bg-foreground w-8'
                        : 'bg-foreground/30 w-2 hover:bg-foreground/50'
                      }`}
                    aria-label={`Go to projects page ${idx + 1}`}
                  />
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        {/* Education & Achievements Section */}
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

            <div className="max-w-5xl mx-auto space-y-6">
              {/* Education */}
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

              {/* Certifications Grid */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Certifications</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-card border border-dashed border-border rounded-xl p-5 hover:border-solid transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-muted rounded-lg border border-border group-hover:bg-accent transition-all">
                          <Award className="w-4 h-4 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1 text-sm">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {cert.issuer} • {cert.date}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Memberships Grid */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Memberships</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {memberships.map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-card border border-dashed border-border rounded-xl p-5 hover:border-solid transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-muted rounded-lg border border-border group-hover:bg-accent transition-all">
                          <Award className="w-4 h-4 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {member.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {member.organization}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">
                            {member.date}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="py-12">
          <div className="flex items-center gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        {/* Contact Section */}
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
                whileHover={{ scale: 1.02 }}
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
                whileHover={{ scale: 1.02 }}
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
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-foreground transition-all"
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
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-foreground transition-all"
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
                    disabled={isSubmitting}
                    className="bg-background border-border focus:border-foreground resize-none transition-all"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full group"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 text-sm text-center"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 text-sm text-center"
                  >
                    ❌ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border/50 mt-20 mb-20 lg:mb-0">
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