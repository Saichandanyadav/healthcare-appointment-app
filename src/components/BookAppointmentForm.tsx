import { useState } from "react"
import type { Booking, Doctor } from "../types/doctor"
import { FaCheckCircle } from "react-icons/fa"
import { motion } from "framer-motion"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function BookAppointmentForm({
  doctor,
  onClose,
  onBooked
}: {
  doctor: Doctor
  onClose: () => void
  onBooked: (booking: Booking) => void
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [confirmation, setConfirmation] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; date?: string }>({})

  const weekdayMap: Record<string, number> = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
  }

  const allowedDays = doctor.availability.map(day => weekdayMap[day])
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  function validate() {
    const e: typeof errors = {}
    if (!name.trim()) e.name = "Name required"
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) e.email = "Valid email required"
    if (!selectedDate) e.date = "Please select a valid appointment date"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const dateStr = selectedDate?.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    })
    setConfirmation(
      `Appointment booked with ${doctor.name} on ${dateStr} for ${name} (${email})`
    )
    onBooked({
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      profileImage: doctor.profileImage,
      patientName: name,
      patientEmail: email,
      slot: dateStr || ""
    })
  }

  function isDayAllowed(date: Date) {
    return date >= today && allowedDays.includes(date.getDay())
  }

  if (confirmation)
    return (
      <motion.div
        className="text-center px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <p className="text-base sm:text-lg font-semibold mb-4">{confirmation}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-bold text-sm sm:text-base"
        >
          Close
        </button>
      </motion.div>
    )

  return (
    <div
      className="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-center sm:text-left">Book Appointment</h3>

        <div>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <span className="text-red-600 text-xs">{errors.name}</span>}
        </div>

        <div>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <span className="text-red-600 text-xs">{errors.email}</span>}
        </div>

        <div>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            filterDate={isDayAllowed}
            minDate={today}
            placeholderText="Select an available date"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.date && <span className="text-red-600 text-xs">{errors.date}</span>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-bold text-sm sm:text-base mt-2"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  )
}
