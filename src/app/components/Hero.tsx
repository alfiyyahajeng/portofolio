import { Sparkles, ChartLine, TrendingUp, Heart, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#F2E8C6]/40 via-[#E8B598]/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-[#A64253]/20 via-[#C97A6C]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-[#800000]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-32 right-1/4 animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "3s" }}>
          <Sparkles className="size-6 text-[#A64253]/40" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce" style={{ animationDelay: "1.5s", animationDuration: "4s" }}>
          <Star className="size-5 text-[#800000]/30" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDelay: "2s", animationDuration: "3.5s" }}>
          <Heart className="size-4 text-[#C97A6C]/40" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F2E8C6] to-[#E8B598] text-[#800000] px-5 py-2.5 rounded-full shadow-lg border border-[#800000]/10">
            <Sparkles className="size-4 animate-pulse" />
            <span className="text-sm">Welcome to my creative space</span>
          </div>

          <div>
            <p className="text-[#A64253] mb-2 flex items-center gap-2">
              <Heart className="size-4 fill-current" />
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl mb-4">
              <span className="bg-gradient-to-r from-[#800000] via-[#A64253] to-[#C97A6C] bg-clip-text text-transparent">
                Data Analyst
              </span>
            </h1>
            <p className="text-xl text-[#2D1B1B] mb-6 italic">
              Transforming data into actionable insights with a touch of creativity ✨
            </p>
          </div>

          <p className="text-[#6B5454] max-w-lg leading-relaxed">
            I specialize in analyzing complex datasets, building interactive dashboards, 
            and delivering data-driven solutions that drive business growth. 
            Let's turn your data into meaningful stories.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-8 py-3.5 bg-gradient-to-r from-[#800000] to-[#A64253] text-[#F2E8C6] rounded-full hover:shadow-2xl hover:shadow-[#800000]/30 transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <Sparkles className="size-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A64253] to-[#C97A6C] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3.5 border-2 border-[#800000] text-[#800000] rounded-full hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#A64253] hover:text-[#F2E8C6] hover:border-transparent transition-all hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#A64253] rounded-[2.5rem] blur-2xl opacity-30"></div>
          <div className="relative bg-gradient-to-br from-[#800000] via-[#A64253] to-[#C97A6C] rounded-[2.5rem] p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-6 space-y-6 border border-white/20">
              {/* Simulated data cards */}
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-[#F2E8C6] text-sm mb-1 flex items-center gap-2">
                    <Star className="size-4 fill-current" />
                    Projects Completed
                  </p>
                  <p className="text-4xl font-bold">25+</p>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <ChartLine className="size-12 text-[#F2E8C6]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all border border-white/10">
                  <TrendingUp className="size-8 text-[#F2E8C6] mb-2" />
                  <p className="text-[#F2E8C6] text-sm">SQL Analysis</p>
                  <p className="text-white text-2xl">15+</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 hover:bg-white/20 transition-all border border-white/10">
                  <Sparkles className="size-8 text-[#F2E8C6] mb-2" />
                  <p className="text-[#F2E8C6] text-sm">Dashboards</p>
                  <p className="text-white text-2xl">10+</p>
                </div>
              </div>

              {/* Decorative chart bars */}
              <div className="flex items-end gap-2 h-24 bg-white/5 rounded-2xl p-3">
                {[40, 70, 50, 90, 60, 80].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#F2E8C6] to-[#E8B598] rounded-lg transition-all hover:from-white hover:to-[#F2E8C6] hover:scale-105"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#F2E8C6] to-[#E8B598] rounded-3xl p-5 shadow-2xl rotate-6 hover:rotate-0 transition-all hover:scale-110 border-2 border-white">
            <Sparkles className="size-8 text-[#800000]" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#A64253] to-[#C97A6C] rounded-3xl p-5 shadow-2xl -rotate-6 hover:rotate-0 transition-all hover:scale-110 border-2 border-white">
            <ChartLine className="size-8 text-[#F2E8C6]" />
          </div>
          <div className="absolute top-1/2 -right-4 bg-gradient-to-br from-[#C97A6C] to-[#E8B598] rounded-full p-3 shadow-xl animate-bounce">
            <Heart className="size-5 text-white fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}