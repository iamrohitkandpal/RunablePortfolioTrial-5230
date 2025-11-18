import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Code2, Workflow, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="font-semibold text-lg text-foreground">RK</div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          {/* Project Header */}
          <div className="mb-12">
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-1 w-12 bg-foreground/30 rounded-full" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {project.period}
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-foreground"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8"
            >
              {project.subtitle}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </motion.div>
          </div>

          {/* Overview Section */}
          <motion.section
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-foreground" />
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
            </div>
            <div className="bg-card border border-dashed border-border rounded-xl p-8 hover:border-solid transition-all">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                  className="px-4 py-2 bg-muted text-foreground rounded-lg border border-border hover:bg-accent hover:border-solid transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Project Flow */}
          <motion.section
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="w-6 h-6 text-foreground" />
              <h2 className="text-3xl font-bold text-foreground">Project Flow</h2>
            </div>
            <div className="bg-card border border-dashed border-border rounded-xl p-8 hover:border-solid transition-all">
              <div className="font-mono text-sm md:text-base text-muted-foreground overflow-x-auto">
                {project.flow}
              </div>
            </div>
          </motion.section>

          {/* Architecture */}
          <motion.section
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Architecture</h2>
            <div className="bg-card border border-dashed border-border rounded-xl p-8 hover:border-solid transition-all">
              <p className="text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
            </div>
          </motion.section>

          {/* Key Achievements */}
          <motion.section
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-foreground" />
              <h2 className="text-3xl font-bold text-foreground">Key Achievements</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                  className="bg-card border border-dashed border-border rounded-xl p-6 hover:border-solid transition-all group"
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center mt-0.5 group-hover:bg-foreground/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-foreground" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center py-12"
          >
            <div className="bg-card border border-dashed border-border rounded-xl p-12 hover:border-solid transition-all">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Interested in this project?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Check out the source code on GitHub or try the live demo to see it in action.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full border border-border hover:bg-accent transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Try Live Demo
                </a>
                <Button
                  onClick={() => navigate('/#contact')}
                  variant="outline"
                  className="rounded-full px-6"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rohit Navinchandra Kandpal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}