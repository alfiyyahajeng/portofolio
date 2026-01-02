import { useState } from "react";
import { ChartLine, FileSpreadsheet, Database, ExternalLink, Github, Sparkles, Heart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type ProjectCategory = "all" | "dashboard" | "business" | "sql";

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      category: "dashboard",
      description: "Interactive Tableau dashboard analyzing sales trends, regional performance, and KPIs with real-time data updates.",
      tags: ["Tableau", "SQL", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY2Mzk0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      category: "business",
      description: "Comprehensive analysis of customer behavior patterns using RFM analysis and clustering techniques to drive targeted marketing.",
      tags: ["Python", "Machine Learning", "Business Intelligence"],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjBjaGFydHN8ZW58MXx8fHwxNzY2NDIyMzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "E-commerce Database Analysis",
      category: "sql",
      description: "Complex SQL queries analyzing transaction data, user behavior, and product performance across multiple dimensions.",
      tags: ["SQL", "PostgreSQL", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1724304013246-1abe63567e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0MjIzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Marketing Campaign ROI Dashboard",
      category: "dashboard",
      description: "Power BI dashboard tracking campaign performance, conversion rates, and ROI metrics across multiple channels.",
      tags: ["Power BI", "DAX", "Marketing Analytics"],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY2Mzk0MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      liveLink: "#"
    },
    {
      id: 5,
      title: "Revenue Forecasting Model",
      category: "business",
      description: "Time series analysis and forecasting model predicting revenue trends with 92% accuracy using Python and statistical methods.",
      tags: ["Python", "Time Series", "Forecasting"],
      image: "https://images.unsplash.com/photo-1724304013246-1abe63567e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjY0MjIzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Supply Chain Optimization Query",
      category: "sql",
      description: "Advanced SQL analysis optimizing inventory levels, reducing costs, and improving delivery times through data-driven insights.",
      tags: ["SQL", "Optimization", "Supply Chain"],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhdGElMjBjaGFydHN8ZW58MXx8fHwxNzY2NDIyMzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      githubLink: "#"
    }
  ];

  const categories = [
    { id: "all" as ProjectCategory, label: "All Projects", icon: Sparkles },
    { id: "dashboard" as ProjectCategory, label: "Dashboards", icon: ChartLine },
    { id: "business" as ProjectCategory, label: "Business Cases", icon: FileSpreadsheet },
    { id: "sql" as ProjectCategory, label: "SQL Analysis", icon: Database }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white via-[#FFF9F0] to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-[#A64253]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-[#F2E8C6]/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#A64253] mb-2 flex items-center justify-center gap-2">
            <Star className="size-4 fill-current" />
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#800000] via-[#A64253] to-[#C97A6C] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-[#6B5454] max-w-2xl mx-auto leading-relaxed">
            Explore my collection of data analysis projects, from interactive dashboards 
            to complex SQL queries and business case studies ✨
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-6 py-3.5 rounded-full transition-all shadow-lg ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#800000] to-[#A64253] text-[#F2E8C6] scale-105 shadow-2xl shadow-[#800000]/30"
                  : "bg-white text-[#800000] hover:bg-gradient-to-r hover:from-[#F2E8C6] hover:to-[#E8B598] border-2 border-[#F2E8C6]"
              }`}
            >
              <category.icon className="size-4" />
              {category.label}
              {activeCategory === category.id && (
                <Heart className="size-3 fill-current animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3 border-2 border-[#F2E8C6]"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/90 via-[#800000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-end p-4 gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all hover:scale-110 border border-white/30"
                    >
                      <ExternalLink className="size-5 text-white" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all hover:scale-110 border border-white/30"
                    >
                      <Github className="size-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-[#800000] mb-2 group-hover:text-[#A64253] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#6B5454] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-[#F2E8C6] to-[#E8B598] text-[#800000] text-xs rounded-full border border-[#800000]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}