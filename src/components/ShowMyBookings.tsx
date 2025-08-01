import { useState } from "react"
import { FaCalendarCheck, FaTrash, FaEdit } from "react-icons/fa"
import { Booking, Doctor } from "../types/doctor"
import doctors from "../data/doctors.json"

export default function ShowMyBookings({
  bookings,
  onDelete,
  onEdit
}: {
  bookings: Booking[]
  onDelete?: (index: number) => void
  onEdit?: (index: number, newSlot: string) => void
}) {
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string>("")
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  const handleEditConfirm = () => {
    if (editIndex !== null && selectedSlot) {
      onEdit?.(editIndex, selectedSlot)
      setEditIndex(null)
      setSelectedSlot("")
    }
  }

  const getAvailableSlots = (doctorName: string) => {
    const doctor: Doctor | undefined = doctors.find(d => d.name === doctorName)
    return doctor?.availability || []
  }

  if (bookings.length === 0)
    return (
      <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center justify-center text-center">
        <FaCalendarCheck className="text-4xl text-blue-600 mb-2" />
        <div className="text-gray-500">No appointments booked yet.</div>
      </div>
    )

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {bookings.map((booking, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center relative">
            <img
              src={booking.profileImage}
              alt={booking.doctorName}
              className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-blue-200"
            />
            <div className="font-bold text-lg text-blue-700">{booking.doctorName}</div>
            <div className="text-xs text-gray-500 mb-1">{booking.specialization}</div>
            <div className="font-semibold text-gray-700 mb-2">{booking.patientName}</div>

            {editIndex === idx ? (
              <>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="border p-1 rounded mb-2"
                >
                  <option value="" disabled>Select a day</option>
                  {getAvailableSlots(booking.doctorName).map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <button onClick={handleEditConfirm} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Confirm</button>
                  <button onClick={() => setEditIndex(null)} className="bg-gray-400 text-white px-2 py-1 rounded text-sm">Cancel</button>
                </div>
              </>
            ) : (
              <>
                <div className="text-blue-600 text-sm mb-1">{booking.slot}</div>
                <div className="text-gray-400 text-xs mb-3">{booking.patientEmail}</div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setEditIndex(idx)
                      setSelectedSlot(booking.slot)
                    }}
                    className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => setDeleteIndex(idx)}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {deleteIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow p-6 w-72 text-center">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this booking?</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={() => {
                  onDelete?.(deleteIndex)
                  setDeleteIndex(null)
                }}
              >
                Yes
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-1 rounded"
                onClick={() => setDeleteIndex(null)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
