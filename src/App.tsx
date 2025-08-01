import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Header from "./components/Header"
import Home from "./pages/Home"
import DoctorsListPage from "./components/DoctorsListPage"
import DoctorDetails from "./pages/DoctorDetails"
import Footer from "./components/Footer"

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsListPage />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  )
}