export const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">ARTiFACT</h3>
            <p className="text-gray-400 mb-6">
              Where Film, Fashion, Art and AI collide. Presented by Rehoboth
              Media and Technologies LLC.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-white">📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-white">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-white">🌐</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Convener: Olawunmi Oyedeji</p>
              <p>Managing Partner: Adenike Fadina</p>
              <p>📧 rehobothmediaandtech@gmail.com</p>
              <p>📞 +1 (347) 990-8717</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Event Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 New York Film Academy</p>
              <p>📅 October 10-12, 2025</p>
              <p>🌐 www.rehobothmedia.net</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Rehoboth Media and Technologies LLC. All rights reserved.
            Content is confidential.
          </p>
        </div>
      </div>
    </footer>
  );
};
