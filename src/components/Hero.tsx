import { motion } from "framer-motion"
import { FaHeartbeat, FaHospitalAlt, FaUserMd, FaSmile, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="mb-16">
      <section id="home" className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center h-auto md:min-h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-pink-400 shadow-2xl px-8 py-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col text-center md:text-left"
        >
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <FaHeartbeat className="text-pink-200 text-4xl animate-pulse" />
            <span className="text-white/90 text-lg font-light">Welcome to</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-4">NiroggyanCare</h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-xl mb-6 font-light">
            Book trusted doctors, explore world-class hospital services, and enjoy the care your family deserves.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 flex justify-center"
        >
          <img alt="Hospital" src="/hero/hospital.avif" className="rounded-2xl shadow-lg w-[340px] h-[220px] object-cover border-4 border-pink-200" />
        </motion.div>
      </section>

      <section id="book-appointment" className="mt-16 flex flex-col items-center justify-center">
        <div className="w-full bg-gradient-to-r from-blue-50 to-pink-50 shadow-xl rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center md:items-start"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-3">Book Your Appointment Today</h2>
            <p className="text-gray-700 text-lg mb-4 max-w-lg">
              Experience seamless healthcare booking. Choose your specialist, select your slot, and get the care you deserve. Fast, reliable, and secure appointment system for you and your family. 
            </p>
            <div className="text-indigo-600 font-semibold text-md mb-3">
              <FaHospitalAlt className="inline mr-2 animate-bounce" />
              Trusted by thousands of patients and top hospitals
            </div>
            <p className="text-gray-600 mb-6 max-w-lg">
              Your health journey starts here. We ensure every step is convenient and stress-free.
            </p>
            <button
              onClick={() => navigate("/doctors")}
              className="mx-auto md:mx-0 inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full shadow-lg text-lg hover:scale-105 active:scale-95 transition"
            >
              Book a Doctor
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center justify-center"
          >
            <div className="relative w-60 h-60 flex items-center justify-center">
              <img
                src="/hero/hospital-animation.png"
                alt="Hospital Animation"
                className="w-60 h-60 object-contain rounded-2xl shadow-lg border-4 border-blue-100"
              />
              <div className="absolute top-5 right-5 animate-pulse bg-white rounded-full p-3 shadow">
                <FaUserMd className="text-blue-500 text-3xl" />
              </div>
              <div className="absolute bottom-6 left-6 animate-bounce bg-white rounded-full p-3 shadow">
                <FaSmile className="text-pink-400 text-3xl" />
              </div>
            </div>
            <div className="mt-4 text-center text-blue-700 font-medium">
              24x7 Online Booking • Zero Wait Time • Personalised Care
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mt-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-700">Our Hospital Services</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Discover a wide range of healthcare services designed to meet every need. From diagnostics to advanced surgeries, our facilities are equipped with the latest technology and expert care teams.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <FaUserMd className="text-4xl text-blue-500 mb-3" />
            <h3 className="text-xl font-bold mb-2 text-blue-700">Expert Doctors</h3>
            <p className="text-gray-600 mb-3">Choose from a curated list of leading specialists in every field.</p>
            <img src="/hero/services.avif" alt="Services" className="w-40 h-24 object-cover rounded shadow" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <FaHospitalAlt className="text-4xl text-pink-500 mb-3" />
            <h3 className="text-xl font-bold mb-2 text-pink-700">World-Class Facilities</h3>
            <p className="text-gray-600 mb-3">Hospitals equipped with advanced technology and exceptional care.</p>
            <img src="/hero/facility.avif" alt="Facility" className="w-40 h-24 object-cover rounded shadow" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <FaSmile className="text-4xl text-green-500 mb-3" />
            <h3 className="text-xl font-bold mb-2 text-green-700">Comprehensive Support</h3>
            <p className="text-gray-600 mb-3">We offer support at every step, from consultation to recovery. Your health is our mission.</p>
            <img src="/hero/patient.avif" alt="Happy Patients" className="w-40 h-24 object-cover rounded shadow" />
          </div>
        </div>
      </section>

      <section id="patients" className="mt-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-indigo-700">Happy Patients & Success Stories</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Our commitment to care is reflected in the smiles of our patients. Hear from those who have experienced our dedication first-hand.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow-lg flex flex-col items-center">
            <img src="/hero/patient1.avif" alt="Amit Singh" className="w-16 h-16 rounded-full object-cover border-2 border-pink-200 mb-3"/>
            <p className="text-gray-700 mb-3">"I found the best cardiologist here and booking was a breeze! Highly recommended."</p>
            <span className="text-sm font-semibold text-blue-700">Amit Singh</span>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-lg flex flex-col items-center">
            <img src="/hero/patient2.jpg" alt="Fatima Shaikh" className="w-16 h-16 rounded-full object-cover border-2 border-pink-200 mb-3"/>
            <p className="text-gray-700 mb-3">"The hospital facilities were fantastic. The staff made me feel at home."</p>
            <span className="text-sm font-semibold text-blue-700">Fatima Shaikh</span>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-lg flex flex-col items-center">
            <img src="/hero/patient3.avif" alt="Rohan Das" className="w-16 h-16 rounded-full object-cover border-2 border-pink-200 mb-3"/>
            <p className="text-gray-700 mb-3">"My surgery went smoothly and follow-up appointments were easy to book online."</p>
            <span className="text-sm font-semibold text-blue-700">Rohan Das</span>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-20 mb-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-pink-700">Contact & Support</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We’re always here to help. Reach out to our support team for any queries or assistance you need on your health journey.</p>
        </div>
        <div className="bg-gradient-to-br from-pink-100 via-blue-50 to-white rounded-2xl shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5 text-blue-800">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-600" />
              <span className="font-semibold">Phone:</span>
              <span>+91-9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span className="font-semibold">Email:</span>
              <span>support@niroggyan.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-600" />
              <span className="font-semibold">Visit Us:</span>
              <span>123 Health Avenue, MedCity, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-purple-600" />
              <span className="font-semibold">Working Hours:</span>
              <span>Mon - Sun: 7:00 AM - 9:00 PM</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-blue-700 mb-2">Quick Help</div>
            <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 text-gray-700">
              <div>Appointment queries</div>
              <div>Billing & insurance support</div>
              <div>Find a specialist</div>
              <div>Feedback & suggestions</div>
            </div>
            <div className="font-semibold text-gray-500 mt-3">We respond to all messages within 24 hours.</div>
          </div>
        </div>
      </section>
    </div>
  )
}