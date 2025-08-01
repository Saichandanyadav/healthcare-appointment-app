# NiroggyanCare

NiroggyanCare is a modern, responsive healthcare appointment booking platform built with React and TypeScript. It allows users to find doctors, explore hospital services, book appointments seamlessly, and view their upcoming bookings. The project features an elegant UI, animations, persistent booking data, and a fully responsive design.

## Features

- **Hero Section**: Eye-catching hospital introduction with animation and call-to-action.
- **Book Appointment**: Full-width booking card with engaging text and an animated hospital image.
- **Doctor Directory**: Browse/search doctors by name or specialization, view profiles, and book appointments.
- **Hospital Services**: Overview of hospital facilities and services.
- **Happy Patients**: Testimonials and patient success stories.
- **Contact & Support**: Multiple ways to reach the hospital, including phone, email, address, and support topics.
- **Footer**: Social links, quick navigation, and additional details.
- **Show My Bookings**: Users can view all their booked appointments, which are saved in local storage for persistence after refresh.

## Tech Stack

- **React** with functional components and hooks
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **Radix UI** for accessible modals/dialogs
- **React Icons** for icons

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/niroggyan-care.git
cd niroggyan-care
npm install
# or
yarn install
````

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Build for Production

```bash
npm run build
# or
yarn build
```

## Folder Structure

```
healthcare-appointment-app/
├── public/
│   └── doctors/
│       ├── doctor-1.jpg
│       ├── doctor-2.jpeg
│       ├── doctor-3.jpg
│       ├── doctor-4.jpg
│       ├── doctor-5.jpg
│       ├── doctor-6.jpg
│       ├── doctor-7.webp
│       └── doctor-8.webp
├── public/
│   └── hero/
│       ├── contact.avif
│       ├── hospital.avif
│       ├── .....
├── src/
│   ├── components/
│   │   ├── BookAppointmentForm.tsx
│   │   ├── DoctorCard.tsx
│   │   ├── DoctorProfilePage.tsx
│   │   ├── DoctorList.tsx
│   │   ├── DoctorProfile.tsx
│   │   ├── DoctorListPage.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ShowMyBookings.tsx
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

## Packages Used

### Dependencies

* `@radix-ui/react-dialog`: ^1.1.14
* `autoprefixer`: ^10.4.21
* `clsx`: ^2.1.1
* `framer-motion`: ^12.23.12
* `postcss`: ^8.5.6
* `react`: ^19.1.0
* `react-datepicker`: ^8.4.0
* `react-dom`: ^19.1.0
* `react-icons`: ^5.5.0
* `react-router-dom`: ^7.7.1
* `tailwindcss`: ^3.4.17

### Dev Dependencies

* `@eslint/js`: ^9.30.1
* `@types/react`: ^19.1.9
* `@types/react-dom`: ^19.1.7
* `@types/react-router-dom`: ^5.3.3
* `@vitejs/plugin-react`: ^4.6.0
* `eslint`: ^9.30.1
* `eslint-plugin-react-hooks`: ^5.2.0
* `eslint-plugin-react-refresh`: ^0.4.20
* `globals`: ^16.3.0
* `typescript`: \~5.8.3
* `typescript-eslint`: ^8.35.1
* `vite`: ^7.0.4

## Customization

* **Images**: Replace images in the `/public/doctors/` directory with your own.
* **Doctor Data**: Update doctor information in `src/data/doctors.json`.
* **Styling**: Modify Tailwind classes for your brand and color preferences.

## Contributing

Pull requests are welcome! Please open an issue first to discuss major changes.

## License

This project is licensed under the MIT License.

---

**Made with ❤️ by Sai Chandan**