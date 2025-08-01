import { FaUserMd, FaStethoscope, FaCalendarAlt, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa"
import BookAppointmentForm from "./BookAppointmentForm"
import type { Booking, Doctor } from "../types/doctor"
import { useState } from "react"

export default function DoctorProfile({ doctor, onClose, onBooked }: { doctor: Doctor; onClose: () => void; onBooked?: (booking: Booking) => void }) {
  const [open, setOpen] = useState(true)
  const [showExperience, setShowExperience] = useState(false)

  return (
    open && (
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center relative h-[620px] overflow-y-auto">
        <button
          onClick={() => { setOpen(false); onClose() }}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-xl"
        >
          <FaTimes />
        </button>
        <img
          src={doctor.profileImage}
          alt={doctor.name}
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 shadow mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaUserMd className="text-blue-400" /> {doctor.name}
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs uppercase font-semibold tracking-wide flex items-center gap-1">
            <FaStethoscope /> {doctor.specialization}
          </span>
        </div>
        <button
          onClick={() => setShowExperience(!showExperience)}
          className="text-sm text-blue-500 mt-2 flex items-center gap-1"
        >
          {showExperience ? <FaChevronUp /> : <FaChevronDown />} Experience
        </button>
        {showExperience && (
          <p className="mt-1 mb-2 text-gray-600 text-sm text-center max-w-sm">{doctor.experience}</p>
        )}
        <div className="mt-2 text-gray-600">
          <FaCalendarAlt className="inline mr-1" />
          Available Slots:
        </div>
        <ul className="mt-1 mb-6 text-center text-sm text-gray-800">
          {doctor.availability.map((day, idx) => (
            <li key={idx}>{day}</li>
          ))}
        </ul>
        <BookAppointmentForm doctor={doctor} onClose={() => { setOpen(false); onClose() }} onBooked={onBooked || (() => {})} />
      </div>
    )
  )
}
