import { Send, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

async function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/10 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-background/10 rounded-full blur-3xl"></div>

      {/* Formas geométricas */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-background/10 rounded-lg rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-accent/20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-background/10 rounded-lg rotate-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-foreground mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Entre em contato para discutirmos seu próximo projeto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-6 flex items-center">
                <span className="w-8 h-0.5 bg-secondary rounded-full mr-3"></span>
                Vamos conversar!
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-primary-foreground/70">
                      henripires123@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-primary-foreground/70">
                      +55 (15) 9 9603-1850
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-primary-foreground/90">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-primary-foreground/70">
                      Sorocaba-SP, Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociais */}
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-4">
                Me siga nas redes
              </h4>
              <div className="flex gap-6">
                <Link
                  href="https://www.linkedin.com/in/henriqueadh/"
                  target="_blank"
                  className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </Link>

                <Link
                  href="https://github.com/HenriAdh"
                  target="_blank"
                  className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </Link>

                <a
                  href="#"
                  className="w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/20 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-primary-foreground mb-3 font-medium"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-primary-foreground mb-3 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-primary-foreground mb-3 font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-background py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-secondary/90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
              >
                Enviar Mensagem
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-16">
          <p className="text-primary-foreground/60">
            © 2025 Henrique Adhmann Pires. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
