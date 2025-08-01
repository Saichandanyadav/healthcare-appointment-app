import { motion } from "framer-motion"
import { FaHeartbeat, FaHospitalAlt, FaUserMd, FaSmile, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const navigate = useNavigate()
  return (
    <div className="mb-10 sm:mb-14">
      <section id="home" className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center h-auto md:min-h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-500 to-pink-400 shadow-2xl px-4 sm:px-6 md:px-8 py-8 md:py-20">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1 flex flex-col text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <FaHeartbeat className="text-pink-200 text-3xl sm:text-4xl animate-pulse" />
            <span className="text-white/90 text-base sm:text-lg font-light">Welcome to</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-4">NiroggyanCare</h1>
          <p className="text-white/90 text-base sm:text-lg md:text-2xl max-w-xl mb-6 font-light">Book trusted doctors, explore world-class hospital services, and enjoy the care your family deserves.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex-1 flex justify-center">
          <img alt="Hospital" src="/hero/hospital.avif" className="rounded-2xl shadow-lg w-[220px] sm:w-[280px] md:w-[340px] h-[140px] sm:h-[180px] md:h-[220px] object-cover border-4 border-pink-200" />
        </motion.div>
      </section>

      <section id="services" className="mt-10 sm:mt-14">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Our Hospital Services</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">Discover a wide range of healthcare services designed to meet every need. From diagnostics to advanced surgeries, our facilities are equipped with the latest technology and expert care teams.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <FaUserMd className="text-3xl sm:text-4xl text-blue-500 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-700">Expert Doctors</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">Choose from a curated list of leading specialists in every field.</p>
            <img src="/hero/services.avif" alt="Services" className="w-28 sm:w-32 md:w-40 h-16 sm:h-20 md:h-24 object-cover rounded shadow" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <FaHospitalAlt className="text-3xl sm:text-4xl text-pink-500 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-pink-700">World-Class Facilities</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">Hospitals equipped with advanced technology and exceptional care.</p>
            <img src="/hero/facility.avif" alt="Facility" className="w-28 sm:w-32 md:w-40 h-16 sm:h-20 md:h-24 object-cover rounded shadow" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
            <FaSmile className="text-3xl sm:text-4xl text-green-500 mb-3" />
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-green-700">Comprehensive Support</h3>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">We offer support at every step, from consultation to recovery. Your health is our mission.</p>
            <img src="/hero/patient.avif" alt="Happy Patients" className="w-28 sm:w-32 md:w-40 h-16 sm:h-20 md:h-24 object-cover rounded shadow" />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mt-10 sm:mt-14">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">How It Works</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">NiroggyanCare is an aggregator that connects patients with doctors and hospitals. We do not provide treatment but make accessing quality care fast, transparent, and hassle-free.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
            <img src="/hero/search-doctor.jpg" alt="Search Doctor" className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2">Search Doctors</h3>
            <p className="text-gray-600 text-sm sm:text-base">Find verified specialists across top hospitals using filters and reviews.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
            <img src="/hero/book-slot.jpg" alt="Book Slot" className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-2">Book Instantly</h3>
            <p className="text-gray-600 text-sm sm:text-base">Choose your preferred date and time. No long waiting queues or confusion.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center">
            <img src="/hero/consultation.jpg" alt="Consultation" className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2">Get Consultation</h3>
            <p className="text-gray-600 text-sm sm:text-base">Visit your doctor at the scheduled time. We ensure smooth follow-ups too.</p>
          </div>
        </div>
      </section>

      <section id="why-choose" className="mt-10 sm:mt-14">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">Why Choose NiroggyanCare?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">We simplify your healthcare journey. Here's why thousands trust us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <FaUserMd className="text-3xl sm:text-4xl text-blue-500" />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-blue-700">Verified Doctors Only</h4>
              <p className="text-gray-600 text-xs sm:text-sm">We partner with certified professionals from reputed hospitals.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <FaHospitalAlt className="text-3xl sm:text-4xl text-pink-500" />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-pink-700">Pan-India Access</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Consult top doctors across India — wherever you are.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <FaClock className="text-3xl sm:text-4xl text-indigo-500" />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-indigo-700">24x7 Booking</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Book appointments anytime — even on Sundays and holidays.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <FaSmile className="text-3xl sm:text-4xl text-green-500" />
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-green-700">Happy Patients</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Thousands of success stories and trusted user experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="book-appointment" className="mt-10 sm:mt-14 flex flex-col items-center justify-center">
        <div className="w-full bg-gradient-to-r from-blue-50 to-pink-50 shadow-xl rounded-2xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 mb-3">Book Your Appointment Today</h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4 max-w-lg">Experience seamless healthcare booking. Choose your specialist, select your slot, and get the care you deserve. Fast, reliable, and secure appointment system for you and your family.</p>
            <div className="text-indigo-600 font-semibold text-sm sm:text-md mb-3">
              <FaHospitalAlt className="inline mr-2 animate-bounce" />
              Trusted by thousands of patients and top hospitals
            </div>
            <p className="text-gray-600 mb-6 max-w-lg text-sm sm:text-base">Your health journey starts here. We ensure every step is convenient and stress-free.</p>
            <button onClick={() => navigate("/doctors")} className="mx-auto md:mx-0 inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full shadow-lg text-base sm:text-lg hover:scale-105 active:scale-95 transition">Book a Doctor</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60, scale: 0.8 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-40 sm:w-60 h-40 sm:h-60 flex items-center justify-center">
              <img src="/hero/hospital-animation.png" alt="Hospital Animation" className="w-40 sm:w-60 h-40 sm:h-60 object-contain rounded-2xl shadow-lg border-4 border-blue-100" />
              <div className="absolute top-2 sm:top-5 right-2 sm:right-5 animate-pulse bg-white rounded-full p-2 sm:p-3 shadow">
                <FaUserMd className="text-blue-500 text-2xl sm:text-3xl" />
              </div>
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 animate-bounce bg-white rounded-full p-2 sm:p-3 shadow">
                <FaSmile className="text-pink-400 text-2xl sm:text-3xl" />
              </div>
            </div>
            <div className="mt-2 sm:mt-4 text-center text-blue-700 font-medium text-xs sm:text-base">24x7 Online Booking • Zero Wait Time • Personalised Care</div>
          </motion.div>
        </div>
      </section>

      <section id="partners" className="mt-10 sm:mt-14">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">Our Partner Hospitals</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">We collaborate with top-rated hospitals to ensure quality treatment and patient safety. You're in trusted hands.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-center">
          <img src="/hero/hospital1.jpg" alt="Hospital 1" className="w-full object-contain h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
          <img src="/hero/hospital2.jpg" alt="Hospital 2" className="w-full object-contain h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
          <img src="/hero/hospital3.jpg" alt="Hospital 3" className="w-full object-contain h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
          <img src="/hero/hospital4.jpg" alt="Hospital 4" className="w-full object-contain h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
        </div>
      </section>

      <section id="resources" className="mt-10 sm:mt-14">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">Health Resources & Tips</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">Stay informed and healthy with doctor-approved resources. Because good health begins with knowledge.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col">
            <div className="w-full h-32 sm:h-44 overflow-hidden rounded-lg mb-4">
              <img src="/hero/health-tip1.jpeg" alt="Health Tip 1" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-blue-700 mb-2">Top 5 Ways to Boost Immunity</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Simple changes to strengthen your immune system naturally. Learn how small habits make a big difference.</p>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col">
            <div className="w-full h-32 sm:h-44 overflow-hidden rounded-lg mb-4">
              <img src="/hero/health-tip2.jpg" alt="Health Tip 2" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-pink-700 mb-2">Managing Stress in Daily Life</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Mental health is just as important. Discover calming techniques for busy lifestyles.</p>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col">
            <div className="w-full h-32 sm:h-44 overflow-hidden rounded-lg mb-4">
              <img src="/hero/health-tip3.webp" alt="Health Tip 3" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-green-700 mb-2">Preventive Health Checkups</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Early detection saves lives. Learn why routine checkups are essential even when you're feeling fine.</p>
          </div>
        </div>
      </section>

      <section id="patients" className="mt-10 sm:mt-14">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700">Happy Patients & Success Stories</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">Our commitment to care is reflected in the smiles of our patients. Hear from those who have experienced our dedication first-hand.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg flex flex-col items-center">
            <img src="/hero/patient1.avif" alt="Amit Singh" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-2 border-pink-200 mb-3"/>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">"I found the best cardiologist here and booking was a breeze! Highly recommended."</p>
            <span className="text-xs sm:text-sm font-semibold text-blue-700">Amit Singh</span>
          </div>
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg flex flex-col items-center">
            <img src="/hero/patient2.jpg" alt="Fatima Shaikh" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-2 border-pink-200 mb-3"/>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">"The hospital facilities were fantastic. The staff made me feel at home."</p>
            <span className="text-xs sm:text-sm font-semibold text-blue-700">Fatima Shaikh</span>
          </div>
          <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg flex flex-col items-center">
            <img src="/hero/patient3.avif" alt="Rohan Das" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-2 border-pink-200 mb-3"/>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">"My surgery went smoothly and follow-up appointments were easy to book online."</p>
            <span className="text-xs sm:text-sm font-semibold text-blue-700">Rohan Das</span>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-14 sm:mt-20 mb-6 sm:mb-8">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700">Contact & Support</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">We’re always here to help. Reach out to our support team for any queries or assistance you need on your health journey.</p>
        </div>
        <div className="bg-gradient-to-br from-pink-100 via-blue-50 to-white rounded-2xl shadow-lg p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="flex flex-col gap-4 sm:gap-5 text-blue-800">
            <div className="flex items-center gap-2 sm:gap-3">
              <FaPhoneAlt className="text-pink-600" />
              <span className="font-semibold">Phone:</span>
              <span>+91-9876543210</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaEnvelope className="text-blue-600" />
              <span className="font-semibold">Email:</span>
              <span>support@niroggyan.com</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaMapMarkerAlt className="text-green-600" />
              <span className="font-semibold">Visit Us:</span>
              <span>123 Health Avenue, MedCity, India</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaClock className="text-purple-600" />
              <span className="font-semibold">Working Hours:</span>
              <span>Mon - Sun: 7:00 AM - 9:00 PM</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="font-semibold text-blue-700 mb-1 sm:mb-2">Quick Help</div>
            <div className="bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col gap-1 sm:gap-2 text-gray-700">
              <div>Appointment queries</div>
              <div>Billing & insurance support</div>
              <div>Find a specialist</div>
              <div>Feedback & suggestions</div>
            </div>
            <div className="font-semibold text-gray-500 mt-2 sm:mt-3 text-xs sm:text-base">We respond to all messages within 24 hours.</div>
          </div>
        </div>
      </section>
    </div>
  )
}