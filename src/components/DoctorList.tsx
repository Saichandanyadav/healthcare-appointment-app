import { AppContext } from "../context/AppContext"
import { useContext } from "react"
import DoctorCard from "./DoctorCard"
import { motion, AnimatePresence } from "framer-motion"
import type { Booking, Doctor } from "../types/doctor"

export default function DoctorList({
  overrideDoctors,
  onBooked,
}: {
  overrideDoctors?: Doctor[]
  onBooked?: (booking: Booking) => void
}) {
  const ctx = useContext(AppContext)
  const doctors = overrideDoctors ?? ctx?.doctors ?? []

  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 sm:px-4">
      <AnimatePresence>
        {doctors.length > 0 ? (
          doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <DoctorCard doctor={doctor} onBooked={onBooked} />
            </motion.div>
          ))
        ) : (
          <motion.p
            className="col-span-full text-center text-gray-400 py-16 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No doctors found.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
