import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import DoctorList from "../components/DoctorList"
import ShowMyBookings from "../components/ShowMyBookings"
import { FaArrowLeft, FaCalendarCheck, FaTimesCircle } from "react-icons/fa"
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
  const [currentPage, setCurrentPage] = useState(1)

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

  const doctorsPerPage = 8
  const totalPages = Math.ceil(filtered.length / doctorsPerPage)
  const paginatedDoctors = filtered.slice(
    (currentPage - 1) * doctorsPerPage,
    currentPage * doctorsPerPage
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

  function handleSearchChange(value: string) {
    setSearch(value)
    setCurrentPage(1)
  }

  return (
    <main className="container mx-auto px-4 py-10 min-h-[80vh]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <button
          onClick={() => nav("/")}
          className="flex items-center gap-2 px-4 py-2 w-full sm:w-fit bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-full shadow hover:scale-105 transition"
        >
          <FaArrowLeft /> Back to Home
        </button>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-fit sm:items-center">
          <button
            onClick={() => setShowBookings(v => !v)}
            className="flex items-center justify-center gap-2 px-4 py-2 w-full sm:w-fit bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            <FaCalendarCheck /> {showBookings ? "Hide My Bookings" : "Show My Bookings"}
          </button>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search doctor or specialty..."
              value={search}
              className="w-full pl-10 pr-10 py-2 rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={e => handleSearchChange(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
              <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                <path d="M10 2a8 8 0 105.293 14.293l4.354 4.354a1 1 0 001.414-1.414l-4.354-4.354A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"></path>
              </svg>
            </span>
            {search && (
              <FaTimesCircle
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400 cursor-pointer hover:text-red-600"
                onClick={() => handleSearchChange("")}
              />
            )}
          </div>
        </div>
      </div>

      {showBookings ? (
        <ShowMyBookings
          bookings={bookings}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : filtered.length > 0 ? (
        <>
          <DoctorList overrideDoctors={paginatedDoctors} onBooked={handleBooked} />
          <div className="flex justify-center mt-6 gap-2 items-center">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-3 py-1 rounded-full border disabled:opacity-50 bg-blue-100 hover:bg-blue-200"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-full ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-3 py-1 rounded-full border disabled:opacity-50 bg-blue-100 hover:bg-blue-200"
            >
              &gt;
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="text-6xl animate-bounce mb-4">🩺</div>
          <p className="text-blue-500 text-xl font-semibold">No doctors found</p>
          <p className="text-gray-500 text-sm mt-2">Try a different name or specialty</p>
        </div>
      )}
    </main>
  )
}
