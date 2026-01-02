import { Mail, Linkedin, Github, Download, Sparkles, Heart, Star } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-[#800000] to-[#A64253]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
      color: "from-[#A64253] to-[#C97A6C]"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourprofile",
      href: "https://github.com/yourprofile",
      color: "from-[#C97A6C] to-[#E8B598]"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white via-[#FFF9F0] to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[#F2E8C6]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-[#A64253]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Floating hearts and stars */}
        <div className="absolute top-40 right-1/3 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "3s" }}>
          <Heart className="size-8 text-[#A64253]/20 fill-current" />
        </div>
        <div className="absolute bottom-60 left-1/4 animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "4s" }}>
          <Star className="size-6 text-[#800000]/20 fill-current" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#A64253] mb-2 flex items-center justify-center gap-2">
            <Heart className="size-4 fill-current" />
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#800000] via-[#A64253] to-[#C97A6C] bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-[#6B5454] max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Let's turn data into insights together! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3 border-2 border-[#F2E8C6]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2E8C6]/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <link.icon className="size-8 text-white" />
                </div>
                <h3 className="text-lg text-[#800000] mb-2 flex items-center gap-2">
                  {link.label}
                  <Heart className="size-3 text-[#A64253] fill-current opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-[#6B5454] text-sm break-all">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Download Resume Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#A64253] rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative bg-gradient-to-br from-[#800000] via-[#A64253] to-[#C97A6C] rounded-[2.5rem] p-12 text-center shadow-2xl overflow-hidden border-4 border-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-8 left-8 animate-bounce">
              <Star className="size-6 text-[#F2E8C6] fill-current" />
            </div>
            <div className="absolute bottom-8 right-8 animate-bounce" style={{ animationDelay: "0.5s" }}>
              <Heart className="size-6 text-[#F2E8C6] fill-current" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 border-2 border-white/30">
                <Sparkles className="size-10 text-[#F2E8C6]" />
              </div>

              <h3 className="text-3xl md:text-4xl text-white mb-4">
                Interested in Working Together?
              </h3>

              <p className="text-[#F2E8C6] mb-8 max-w-2xl mx-auto leading-relaxed">
                Download my resume to learn more about my experience, skills, and achievements. 
                I'd love to discuss how I can help your team make better data-driven decisions. 💕
              </p>

              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#800000] rounded-full hover:bg-[#F2E8C6] transition-all hover:shadow-2xl hover:scale-105 border-2 border-white/50">
                <Download className="size-5" />
                <span>Download Resume</span>
                <Sparkles className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-[#FFF9F0] border-2 border-[#F2E8C6] text-[#6B5454] hover:bg-gradient-to-br hover:from-[#800000] hover:to-[#A64253] hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-lg"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-[#FFF9F0] border-2 border-[#F2E8C6] text-[#6B5454] hover:bg-gradient-to-br hover:from-[#800000] hover:to-[#A64253] hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-lg"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="group p-3 rounded-full bg-[#FFF9F0] border-2 border-[#F2E8C6] text-[#6B5454] hover:bg-gradient-to-br hover:from-[#800000] hover:to-[#A64253] hover:text-white hover:border-transparent transition-all hover:scale-110 shadow-lg"
            >
              <Mail className="size-5" />
            </a>
          </div>

          <p className="text-[#6B5454] flex items-center justify-center gap-2">
            © 2024 Data Analyst Portfolio. Made with{" "}
            <Heart className="size-4 text-[#A64253] fill-current animate-pulse" />{" "}
            and data
          </p>

          <p className="text-[#6B5454] text-sm mt-2 flex items-center justify-center gap-2">
            <Sparkles className="size-3 text-[#A64253]" />
            Designed for GitHub Pages hosting
          </p>
        </div>
      </div>
    </section>
  );
}