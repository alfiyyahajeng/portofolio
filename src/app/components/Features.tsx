import { Heart, Sparkles, Star, Palette } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every detail crafted with care and passion",
      color: "text-pink-500",
      bgColor: "bg-pink-100"
    },
    {
      icon: Sparkles,
      title: "Sparkle & Shine",
      description: "Add a touch of magic to your everyday",
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      icon: Star,
      title: "Simply Stunning",
      description: "Beauty in simplicity and elegance",
      color: "text-rose-500",
      bgColor: "bg-rose-100"
    },
    {
      icon: Palette,
      title: "Aesthetic Vibes",
      description: "Perfectly curated colors and designs",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-800">
            Why You'll Love It Here
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a world where beauty meets functionality, 
            and every moment feels special
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-pink-100"
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`size-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
