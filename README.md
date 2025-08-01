# NiroggyanCare

**NiroggyanCare** is a modern, responsive healthcare appointment booking platform built with **React** and **TypeScript**. It allows users to find doctors, explore hospital services, book appointments seamlessly, and view their upcoming bookings. The project features an elegant UI, animations, persistent booking data, and a fully responsive design.

🔗 **Live Demo**: [https://healthcare-appointment-app.vercel.app](https://healthcare-appointment-app.vercel.app)

📦 **GitHub Repo**: [https://github.com/Saichandanyadav/healthcare-appointment-app](https://github.com/Saichandanyadav/healthcare-appointment-app)

---

## ✨ Features

* **Hero Section** – Engaging intro with animation and call-to-action.
* **Book Appointment** – Full-width booking form with animated hospital visuals.
* **Doctor Directory** – Searchable doctor list with profile pages and appointment booking.
* **Hospital Services** – Overview of offered facilities and departments.
* **Happy Patients** – Testimonials and patient success stories.
* **Contact & Support** – Address, email, phone, and support links.
* **Footer** – Quick navigation and social links.
* **My Bookings** – Local storage-based persistence of user bookings.

---

## 🛠 Tech Stack

* **React** + **TypeScript**
* **Tailwind CSS**
* **Framer Motion**
* **Radix UI**
* **React Icons**

---

## 🚀 Getting Started

### 📦 Prerequisites

* Node.js (v18+)
* npm or yarn

### 📥 Installation

```bash
git clone https://github.com/Saichandanyadav/healthcare-appointment-app.git
cd healthcare-appointment-app
npm install
# or
yarn install
```

### 🧪 Run Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 🏗 Build for Production

```bash
npm run build
# or
yarn build
```

---

## 📁 Folder Structure

```
healthcare-appointment-app/
├── public/
│   ├── doctors/
│   │   ├── doctor-1.jpg
│   │   ├── ...
│   └── hero/
│       ├── hospital.avif
│       └── ...
├── src/
│   ├── components/
│   │   ├── BookAppointmentForm.tsx
│   │   ├── DoctorCard.tsx
│   │   ├── DoctorList.tsx
│   │   ├── DoctorProfile.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── context/
│   │   └── AppContext.tsx
│   ├── data/
│   │   └── doctors.json
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── DoctorDetails.tsx
│   ├── types/
│   │   └── doctor.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📦 Packages Used

### Dependencies

* `@radix-ui/react-dialog`
* `autoprefixer`
* `clsx`
* `framer-motion`
* `postcss`
* `react`
* `react-datepicker`
* `react-dom`
* `react-icons`
* `react-router-dom`
* `tailwindcss`

### Dev Dependencies

* `@eslint/js`
* `@types/react`
* `@types/react-dom`
* `@types/react-router-dom`
* `@vitejs/plugin-react`
* `eslint`
* `eslint-plugin-react-hooks`
* `eslint-plugin-react-refresh`
* `globals`
* `typescript`
* `typescript-eslint`
* `vite`

---

## 🛠 Customization

* Replace doctor images in `public/doctors/`
* Update doctor details in `src/data/doctors.json`
* Tweak Tailwind CSS classes to match your brand

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

This project is licensed under the **MIT License**.

---

**Made with ❤️ by Sai Chandan**
