import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaUserMd, FaHospital, FaBars, FaTimes } from "react-icons/fa"

export default function Header() {
  const nav = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <span
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById("home")?.offsetTop || 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 text-blue-600 font-bold text-xl sm:text-2xl tracking-tight select-none cursor-pointer whitespace-nowrap"
            >
              <FaHospital className="text-2xl sm:text-3xl text-pink-600" />
              NiroggyanCare
            </span>
            <button
              className="md:hidden px-2.5 py-1.5 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-xs sm:text-sm whitespace-nowrap"
              onClick={() => nav("/doctors")}
            >
              <div className="flex items-center gap-1">
                <FaUserMd />
                Book a Doctor
              </div>
            </button>
          </div>
          <button
            className="md:hidden text-2xl text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center md:items-center md:space-x-5 text-sm sm:text-base font-medium mt-2 md:mt-0 w-full md:w-auto`}
        >
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => nav("/")}>Home</button>
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSection("services")}>Services</button>
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSection("how-it-works")}>How It Works</button>
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSection("why-choose")}>Why Choose Us</button>
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSection("partners")}>Partners</button>
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSection("resources")}>Resources</button>
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSection("patients")}>Happy Patients</button>
          <button className="hover:text-blue-600 transition whitespace-nowrap" onClick={() => scrollToSection("contact")}>Contact</button>
          <button className="hidden md:flex px-3 sm:px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow hover:scale-105 active:scale-95 transition items-center gap-1 sm:gap-2 text-xs sm:text-base whitespace-nowrap" onClick={() => nav("/doctors")}>
            <FaUserMd /> Book a Doctor
          </button>
        </nav>
      </div>
    </header>
  )
}
