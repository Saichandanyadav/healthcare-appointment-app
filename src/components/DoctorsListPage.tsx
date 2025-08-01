import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import DoctorList from "../components/DoctorList"
import ShowMyBookings from "../components/ShowMyBookings"
import { FaArrowLeft, FaCalendarCheck } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { Booking } from "../types/doctor"

function getStoredBookings(): Booking[] {
  try {
    const raw = localStorage.getItem("bookings")
    if (raw) return JSON.parse(raw)
  } catch (error) {
    console.error(error)
    return []
  }
  return []
}

export default function DoctorsListPage() {
  const ctx = useContext(AppContext)
  const nav = useNavigate()
  const [search, setSearch] = useState("")
  const [showBookings, setShowBookings] = useState(false)
  const [bookings, setBookings] = useState<Booking[]>(getStoredBookings())

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings))
  }, [bookings])

  if (!ctx) return null
  const { doctors } = ctx

  const filtered = doctors.filter(
    doc =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  )

  function handleBooked(newBooking: Booking) {
    setBookings(prev => [...prev, newBooking])
  }

  function handleDelete(index: number) {
    setBookings(prev => prev.filter((_, i) => i !== index))
  }

  function handleEdit(index: number) {
    const edited = prompt("Enter new day (e.g., Monday):", bookings[index].slot)
    if (edited) {
      setBookings(prev =>
        prev.map((b, i) => (i === index ? { ...b, slot: edited } : b))
      )
    }
  }

  return (
    <main className="container mx-auto px-4 py-10 min-h-[80vh]">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <button onClick={() => nav("/")} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-full shadow hover:scale-105 transition">
          <FaArrowLeft /> Back to Home
        </button>
        <div className="flex gap-2 w-full max-w-xl justify-end">
          <button
            onClick={() => setShowBookings(v => !v)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            <FaCalendarCheck /> {showBookings ? "Hide My Bookings" : "Show My Bookings"}
          </button>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={search}
              className="w-full pl-10 pr-4 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={e => setSearch(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
              <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor"><path d="M10 2a8 8 0 105.293 14.293l4.354 4.354a1 1 0 001.414-1.414l-4.354-4.354A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"></path></svg>
            </span>
          </div>
        </div>
      </div>
      {showBookings ? (
        <ShowMyBookings
          bookings={bookings}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <DoctorList overrideDoctors={filtered} onBooked={handleBooked} />
      )}
    </main>
  )
}
