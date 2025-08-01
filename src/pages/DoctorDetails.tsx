import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorProfile from "../components/DoctorProfile";

export default function DoctorDetails() {
  const { id } = useParams();
  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  if (!ctx) return null;
  const doctor = ctx.doctors.find(doc => doc.id === Number(id));
  if (!doctor)
    return (
      <p className="mt-10 text-center">
        Doctor not found.{" "}
        <button className="text-blue-600 underline" onClick={() => navigate("/")}>
          Go Home
        </button>
      </p>
    );
  return (
    <main className="container mx-auto px-4">
      <div className="max-w-xl mx-auto mt-12">
        <DoctorProfile doctor={doctor} />
      </div>
    </main>
  );
}