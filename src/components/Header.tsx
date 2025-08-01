import { useNavigate } from "react-router-dom"
import { FaUserMd, FaHospital } from "react-icons/fa"

export default function Header() {
  const nav = useNavigate()
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <span  onClick={() => window.scrollTo({top: document.getElementById("home")?.offsetTop || 0, behavior: "smooth"})} className="flex items-center gap-2 text-blue-600 font-bold text-2xl tracking-tight select-none">
          <FaHospital className="text-3xl text-pink-600" />
          NiroggyanCare
        </span>
        <nav className="flex items-center gap-4 text-base font-medium">
          <button className="hover:text-blue-600 transition" onClick={() => nav("/")}>Home</button>
          <button className="hover:text-blue-600 transition" onClick={() => window.scrollTo({top: document.getElementById("services")?.offsetTop || 0, behavior: "smooth"})}>Services</button>
          <button className="hover:text-blue-600 transition" onClick={() => window.scrollTo({top: document.getElementById("patients")?.offsetTop || 0, behavior: "smooth"})}>Happy Patients</button>
          <button className="hover:text-blue-600 transition" onClick={() => window.scrollTo({top: document.getElementById("contact")?.offsetTop || 0, behavior: "smooth"})}>Contact</button>
          <button
            className="ml-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow hover:scale-105 active:scale-95 transition flex items-center gap-2"
            onClick={() => nav("/doctors")}
          >
            <FaUserMd /> Book a Doctor
          </button>
        </nav>
      </div>
    </header>
  )
}