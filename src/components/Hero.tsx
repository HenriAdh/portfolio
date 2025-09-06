const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-background flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-medium"></div>

      {/* Padrão geométrico de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-primary rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-40 w-10 h-10 bg-accent rounded-lg rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Elemento decorativo antes do título */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-2"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Olá, eu sou{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-text-shimmer relative">
            Henrique Adhmann Pires
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Desenvolvedor{" "}
          <span className="text-primary font-medium">Full-stack</span> |
          Especialista em{" "}
          <span className="text-accent font-medium">ReactJS & NodeJS</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-16">
          <a
            href="#projetos"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-primary-foreground font-medium shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-1.5"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Ver Projetos
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>

            {/* Efeito de shimmer animado */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Overlay escuro para melhor contraste do texto */}
            <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Efeito de brilho externo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </a>

          <a
            href="#contato"
            className="group relative overflow-hidden border border-primary/25 bg-background/95 backdrop-blur-lg px-8 py-4 rounded-full text-foreground font-medium shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-1.5 hover:border-primary/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Entrar em Contato
            </span>

            {/* Efeito de preenchimento gradiente animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/12 to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-800 transform group-hover:scale-110"></div>

            {/* Linha de destaque animada */}
            <div className="absolute left-1/2 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-x-1/2 scale-x-0 group-hover:scale-x-75 transition-transform duration-900 origin-center"></div>

            {/* Efeito de brilho dinâmico */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full w-12 bg-white/15 transform -skew-x-12 -translate-x-24 group-hover:translate-x-[calc(100%+6rem)] transition-transform duration-1200"></div>
            </div>

            {/* Pontos luminosos interativos */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600">
              <div className="absolute top-3 left-6 w-1 h-1 bg-primary rounded-full animate-ping-slow"></div>
              <div className="absolute bottom-2 right-7 w-0.5 h-0.5 bg-accent rounded-full animate-ping-medium"></div>
            </div>
          </a>
        </div>

        {/* Elemento decorativo de scroll indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
