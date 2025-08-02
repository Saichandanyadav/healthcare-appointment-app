import { motion } from "framer-motion"
import { FaUserMd, FaCheckCircle, FaClock } from "react-icons/fa"
import type { Booking, Doctor } from "../types/doctor"
import DoctorProfile from "./DoctorProfile"
import { useState } from "react"

const badgeVariants = [
  "bg-pink-100 text-pink-700",
  "bg-green-100 text-green-700",
  "bg-orange-100 text-orange-700",
  "bg-yellow-100 text-yellow-700",
  "bg-cyan-100 text-cyan-700",
  "bg-purple-100 text-purple-700",
  "bg-indigo-100 text-indigo-700",
  "bg-blue-100 text-blue-700",
  "bg-red-100 text-red-700",
  "bg-teal-100 text-teal-700"
]

const getBadgeColor = (specialization: string) => {
  let hash = 0
  for (let i = 0; i < specialization.length; i++) {
    hash = specialization.charCodeAt(i) + ((hash << 5) - hash)
  }
  return badgeVariants[Math.abs(hash) % badgeVariants.length]
}

export default function DoctorCard({ doctor, onBooked }: { doctor: Doctor; onBooked?: (booking: Booking) => void }) {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
        className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-200 flex flex-col items-center p-6 group cursor-pointer"
        onClick={() => setShowProfile(true)}
      >
        <img
          src={doctor.profileImage}
          alt={doctor.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-400 shadow mb-3"
          width={96}
          height={96}
        />
        <span className="flex items-center gap-1 font-semibold text-lg text-gray-800">
          <FaUserMd className="text-blue-400 mr-1" />
          {doctor.name}
        </span>
        <span className={`mt-2 mb-3 px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(doctor.specialization)}`}>
          {doctor.specialization}
        </span>
        <div className="flex items-center gap-2 text-sm">
          <span className={doctor.availability.length ? "text-green-600" : "text-gray-400"}>
            <FaCheckCircle className="inline mr-1" />
            {doctor.availability.length ? "Available" : "Not Available"}
          </span>
          <span className="text-gray-400">·</span>
          <span className="text-gray-500 flex items-center">
            <FaClock className="inline mr-1" />
            {doctor.availability[0] || "N/A"}
          </span>
        </div>
      </motion.div>
      {showProfile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
          <div className="absolute inset-0" onClick={() => setShowProfile(false)} />
          <div className="relative z-10 max-w-lg w-full">
            <DoctorProfile doctor={doctor} onClose={() => setShowProfile(false)} onBooked={onBooked} />
          </div>
        </div>
      )}
    </>
  )
}