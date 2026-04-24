export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b px-6 md:px-16 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          Accredian
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#features" className="hover:text-blue-600 transition">
            Programs
          </a>

          <a href="#stats" className="hover:text-blue-600 transition">
            Results
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
            Login
          </button>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 shadow-md transition">
            Book Demo
          </button>
        </div>

      </div>
    </nav>
  );
}
