import { Heart } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-6">
            <Heart className="size-10 text-white fill-white" />
          </div>
          
          <h2 className="text-4xl mb-4 text-gray-800">
            Stay In Touch
          </h2>
          
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest updates, exclusive content, 
            and all things beautiful delivered straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-pink-50/50"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-6 flex-wrap text-gray-600">
            <a href="#" className="hover:text-pink-600 transition-colors">About</a>
            <span className="text-pink-300">•</span>
            <a href="#" className="hover:text-pink-600 transition-colors">Blog</a>
            <span className="text-pink-300">•</span>
            <a href="#" className="hover:text-pink-600 transition-colors">Contact</a>
            <span className="text-pink-300">•</span>
            <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
          </div>
          
          <p className="text-gray-500 mt-6">
            © 2024 Girly Aesthetic. Made with love & sparkles ✨
          </p>
        </div>
      </div>
    </section>
  );
}
