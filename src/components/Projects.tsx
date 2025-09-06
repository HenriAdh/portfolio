import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
      image: "/project1.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias e lembretes inteligentes.",
      image: "/project2.jpg",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Portfolio Creative",
      description:
        "Site portfolio interativo com animações CSS, efeitos parallax e design responsivo.",
      image: "/project3.jpg",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projetos"
      className="min-h-screen py-20 bg-gradient-to-tr from-background via-background/95 to-muted/20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo - igual ao Hero */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-medium"></div>

      {/* Padrão geométrico de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-primary rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-40 w-10 h-10 bg-accent rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 relative inline-block">
            Meus Projetos
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos mais recentes e desafiadores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Imagem do projeto com overlay */}
              <div className="relative h-60 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-foreground/80">Imagem do Projeto</p>
                  </div>
                </div>

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-foreground/10 text-foreground px-4 py-2 rounded-full flex items-center gap-2 hover:bg-foreground/20 transition-colors backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )}
                  </div>
                </div>

                {/* Badge de tecnologias */}
                <div className="absolute top-4 left-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-background/80 backdrop-blur-sm text-xs text-foreground/80 px-2 py-1 rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="bg-background/80 backdrop-blur-sm text-xs text-foreground/80 px-2 py-1 rounded-full border border-border/50">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-foreground/5 text-foreground/70 text-xs px-3 py-1.5 rounded-full border border-border/30 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-1 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )}
                  </div>

                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Call to action no final */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Gostou do que viu?</p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Vamos trabalhar juntos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
