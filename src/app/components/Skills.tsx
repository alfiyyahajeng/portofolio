import { Database, ChartLine, FileSpreadsheet, Code, TrendingUp, Sparkles, Heart, Star } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Data Analysis",
      icon: ChartLine,
      color: "from-[#800000] to-[#A64253]",
      skills: ["SQL", "Python", "R", "Excel", "Statistical Analysis"]
    },
    {
      title: "Visualization",
      icon: TrendingUp,
      color: "from-[#A64253] to-[#C97A6C]",
      skills: ["Tableau", "Power BI", "Looker", "Data Studio", "Matplotlib"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-[#C97A6C] to-[#E8B598]",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery", "Snowflake"]
    },
    {
      title: "Tools & Others",
      icon: Sparkles,
      color: "from-[#E8B598] to-[#F2E8C6]",
      skills: ["Git", "Jupyter", "Google Analytics", "A/B Testing", "Data Modeling"]
    }
  ];

  const tools = [
    { name: "SQL", level: 95 },
    { name: "Python", level: 90 },
    { name: "Tableau", level: 88 },
    { name: "Power BI", level: 85 },
    { name: "Excel", level: 92 },
    { name: "R", level: 75 }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#F2E8C6]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-[#A64253]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#A64253] mb-2 flex items-center justify-center gap-2">
            <Star className="size-4 fill-current" />
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#800000] via-[#A64253] to-[#C97A6C] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-[#6B5454] max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for turning data into insights and insights into action ✨
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3 border-2 border-[#F2E8C6] hover:border-[#800000]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2E8C6]/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="size-8 text-white" />
                </div>
                <h3 className="text-xl text-[#800000] mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-[#6B5454] text-sm flex items-center gap-2">
                      <Heart className="size-3 text-[#A64253] fill-current" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="relative bg-gradient-to-br from-white to-[#FFF9F0] rounded-[2.5rem] p-8 md:p-10 shadow-2xl border-4 border-white ring-4 ring-[#F2E8C6]">
          <div className="absolute top-6 right-6">
            <Sparkles className="size-8 text-[#F2E8C6]" />
          </div>
          
          <h3 className="text-3xl text-center mb-8">
            <span className="bg-gradient-to-r from-[#800000] to-[#A64253] bg-clip-text text-transparent">
              Technical Proficiency
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#2D1B1B] flex items-center gap-2">
                    <Star className="size-3 text-[#A64253] fill-current" />
                    {tool.name}
                  </span>
                  <span className="text-[#A64253]">{tool.level}%</span>
                </div>
                <div className="h-4 bg-gradient-to-r from-[#F2E8C6] to-[#E8B598] rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#800000] to-[#A64253] rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
                    style={{ width: `${tool.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}