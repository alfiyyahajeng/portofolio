import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const galleryItems = [
    {
      url: "https://images.unsplash.com/photo-1613040599929-df37463471cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbnMlMjBwYXN0ZWx8ZW58MXx8fHwxNzY2NDIxNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pink macarons",
      title: "Sweet Treats",
      span: "md:col-span-2"
    },
    {
      url: "https://images.unsplash.com/photo-1653854960145-749554cab141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1pbmluZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NjQyMTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Beauty products",
      title: "Beauty Essentials",
      span: ""
    },
    {
      url: "https://images.unsplash.com/photo-1609073470762-cd7e5f7d3cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbGF0dGUlMjBhcnR8ZW58MXx8fHwxNzY2NDIxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pink latte",
      title: "Café Vibes",
      span: ""
    },
    {
      url: "https://images.unsplash.com/photo-1597737175203-3b86b744081a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJseSUyMGZhc2hpb24lMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjY0MjE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fashion accessories",
      title: "Accessories",
      span: "md:col-span-2"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Aesthetic Gallery
          </h2>
          <p className="text-gray-600">
            A collection of beautiful moments and inspiration
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${item.span} group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
            >
              <ImageWithFallback
                src={item.url}
                alt={item.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h3 className="text-2xl text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
