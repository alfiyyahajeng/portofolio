import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Star, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-white via-[#FFF9F0] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#A64253] rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ring-4 ring-[#F2E8C6]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1724304013246-1abe63567e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0MjIzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data workspace"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#800000] to-[#A64253] text-[#F2E8C6] rounded-3xl p-6 shadow-2xl border-4 border-white">
              <div className="flex items-center gap-2 mb-1">
                <Star className="size-5 fill-current" />
                <p className="text-4xl font-bold">3+</p>
              </div>
              <p className="text-sm">Years Experience</p>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-br from-[#F2E8C6] to-[#E8B598] rounded-2xl p-3 shadow-xl animate-bounce border-2 border-white">
              <Sparkles className="size-6 text-[#800000]" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[#A64253] mb-2 flex items-center gap-2">
                <Heart className="size-4 fill-current" />
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl mb-4">
                <span className="bg-gradient-to-r from-[#800000] via-[#A64253] to-[#C97A6C] bg-clip-text text-transparent">
                  Passionate About Data & Design
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-[#2D1B1B] leading-relaxed">
              <p>
                I'm a data analyst who believes that beautiful visualizations and smart 
                insights go hand in hand. My approach combines technical expertise with 
                creative problem-solving to deliver solutions that are both powerful and 
                aesthetically pleasing. ✨
              </p>

              <p>
                With experience in SQL, Python, Tableau, and Power BI, I transform raw data 
                into compelling stories that drive strategic decisions. Whether it's building 
                interactive dashboards, conducting deep-dive analyses, or presenting complex 
                findings in simple terms, I'm here to make data work for you.
              </p>

              <p>
                When I'm not analyzing datasets, you'll find me exploring new visualization 
                techniques, staying updated with the latest analytics trends, and finding 
                creative ways to present data in meaningful ways. 💕
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="group relative bg-gradient-to-br from-[#FFF9F0] to-white border-2 border-[#F2E8C6] rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="absolute top-3 right-3">
                  <Star className="size-5 text-[#F2E8C6] group-hover:text-[#800000] transition-colors fill-current" />
                </div>
                <p className="text-3xl bg-gradient-to-r from-[#800000] to-[#A64253] bg-clip-text text-transparent mb-1">25+</p>
                <p className="text-sm text-[#6B5454]">Projects Delivered</p>
              </div>
              <div className="group relative bg-gradient-to-br from-[#FFF9F0] to-white border-2 border-[#F2E8C6] rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="absolute top-3 right-3">
                  <Heart className="size-5 text-[#F2E8C6] group-hover:text-[#800000] transition-colors fill-current" />
                </div>
                <p className="text-3xl bg-gradient-to-r from-[#800000] to-[#A64253] bg-clip-text text-transparent mb-1">10+</p>
                <p className="text-sm text-[#6B5454]">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}