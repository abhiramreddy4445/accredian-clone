export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Accredian</h2>
          <p className="mt-4 text-gray-400">
            Enterprise learning solutions for modern teams.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Programs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email</li>
            <li>Help Center</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-gray-500 text-sm">
        © 2026 Accredian Enterprise Clone • Built by Abhiram
      </div>
    </footer>
  );
}