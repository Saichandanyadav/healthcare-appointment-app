export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-bold text-lg">NiroggyanCare &copy; {new Date().getFullYear()}</span>
        <span className="text-sm">Empowering health, one appointment at a time. All rights reserved.</span>
        <span className="text-sm">Contact: support@niroggyan.com</span>
      </div>
    </footer>
  )
}