import {
  Braces,
  Server,
  Boxes,
  Database,
  Smartphone,
  Share2,
  Code,
  Package,
} from "lucide-react";
import Image from "next/image";

async function About() {
  const skills = [
    {
      name: "React",
      icon: <Braces className="w-5 h-5" />,
      color: "text-cyan-500",
    },
    {
      name: "React Native",
      icon: <Smartphone className="w-5 h-5" />,
      color: "text-indigo-500",
    },
    {
      name: "Node.js",
      icon: <Server className="w-5 h-5" />,
      color: "text-green-600",
    },
    {
      name: "TypeScript",
      icon: <Code className="w-5 h-5" />,
      color: "text-blue-600",
    },
    {
      name: "GraphQL",
      icon: <Share2 className="w-5 h-5" />,
      color: "text-pink-500",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-5 h-5" />,
      color: "text-sky-700",
    },
    {
      name: "SQL",
      icon: <Boxes className="w-5 h-5" />,
      color: "text-violet-600",
    },
    {
      name: "Docker",
      icon: <Package className="w-5 h-5" />,
      color: "text-blue-500",
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo - Mais sutis e elegantes */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse-medium"></div>

      {/* Padrão geométrico sutil - Mais discreto */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/10 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-accent/10 rounded-lg rotate-45 opacity-60"></div>
      <div className="absolute top-1/3 left-20 w-10 h-10 bg-primary/8 rounded-lg rotate-12 opacity-40"></div>

      {/* Linhas decorativas sutis */}
      <div className="absolute top-40 right-10 w-24 h-px bg-gradient-to-l from-primary/20 to-transparent"></div>
      <div className="absolute bottom-60 left-10 w-20 h-px bg-gradient-to-r from-accent/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 relative inline-block">
            Sobre Mim
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg font-light">
            Conheça um pouco mais sobre minha jornada e habilidades
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Container da foto */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-gradient-to-br from-primary/15 to-accent/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center relative group border border-border/30">
                <Image
                  alt="my-self"
                  src={"/me.jpeg"}
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Efeitos decorativos */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Elementos geométricos flutuantes */}
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-primary/25 rounded-full animate-ping-slow"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-accent/25 rounded-full animate-ping-medium"></div>

                {/* Overlay sutil no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Destaque de forma geométrica */}
              <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-primary/8 to-accent/6 rounded-2xl rotate-3 blur-sm"></div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="space-y-6 mb-10">
              <p className="text-xl text-foreground/90 leading-relaxed bg-background/60 backdrop-blur-md p-6 rounded-2xl border border-border/30 shadow-sm hover:shadow-md transition-all duration-400 hover:border-primary/25 hover:bg-background/70">
                Sou{" "}
                <span className="text-primary font-medium">
                  desenvolvedor Full-Stack
                </span>{" "}
                com experiência prática em todo o ecossistema{" "}
                <span className="text-accent font-medium">JavaScript</span>,
                atuando no desenvolvimento de aplicações web e mobile. Trabalho
                com <span className="text-accent font-medium">React</span>,{" "}
                <span className="text-accent font-medium">Next.js</span> e{" "}
                <span className="text-accent font-medium">React Native</span>{" "}
                para criar interfaces modernas e responsivas, além de{" "}
                <span className="text-accent font-medium">Node.js</span> no
                backend para construir APIs escaláveis e bem estruturadas. Tenho
                também sólida experiência em bancos de dados relacionais,
                principalmente{" "}
                <span className="text-accent font-medium">PostgreSQL</span> e{" "}
                <span className="text-accent font-medium">SQL</span>, sempre
                buscando escrever código limpo, performático e de fácil
                manutenção. Minha motivação é transformar ideias em soluções
                digitais que realmente geram valor para o usuário.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></span>
                Tecnologias que domino
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-background/70 backdrop-blur-sm border border-border/40 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-1.5 group hover:border-primary/30 flex flex-col items-center justify-center gap-2 hover:bg-background/80"
                  >
                    <div
                      className={`p-3 rounded-xl bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-400 ${skill.color} group-hover:scale-110`}
                    >
                      {skill.icon}
                    </div>
                    <span className="font-medium text-foreground/90 text-sm text-center group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
