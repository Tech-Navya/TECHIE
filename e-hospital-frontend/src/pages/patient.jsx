import { Link } from "react-router-dom";

function Patient() {
  return (
    <div className="min-h-screen flex flex-col bg-black">

      {/* ================= HEADER ================= */}
      <header className="relative w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Patient Dashboard
          </h1>

          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md
                       text-white text-sm font-medium
                       hover:bg-white/30 hover:scale-105
                       transition-all duration-300"
          >
            Logout
          </Link>
        </div>
      </header>

      {/* ================= PAGE ================= */}
      <main
        className="flex-1 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url('/assets/patient.jpeg')",
        }}
      >
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-14">

          {/* Welcome */}
          <div className="mb-12 text-white">
            <h2 className="text-4xl font-extrabold tracking-tight animate-[fadeUp_0.8s_ease-out]">
              Welcome, Patient 👋
            </h2>
            <p className="mt-3 text-lg text-white/80 animate-[fadeUp_1s_ease-out]">
              Book appointments with doctors in seconds.
            </p>
          </div>

          {/* ================= 3D CARD ================= */}
          <div className="perspective-[1200px]">
            <div
              className="
                max-w-xl
                bg-white/10 backdrop-blur-2xl
                border border-white/20
                rounded-3xl p-8
                shadow-[0_40px_100px_rgba(0,0,0,0.6)]
                transform transition-all duration-500
                hover:-translate-y-3 hover:rotateX-2 hover:rotateY-1
              "
            >
              <h3 className="text-2xl font-bold text-white mb-6 drop-shadow">
                Book Appointment
              </h3>

              <form className="space-y-5">

                {/* Select Fields */}
                {[
                  { label: "Department", options: ["Cardiology", "Neurology", "Orthopedics", "General Medicine"] },
                  { label: "Doctor", options: ["Dr. Alex", "Dr. Sarah", "Dr. John"] },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-white/80 mb-1">
                      {field.label}
                    </label>
                    <select
                      className="
                        w-full rounded-xl px-4 py-3
                        bg-white/20 text-white
                        border border-white/30
                        focus:ring-2 focus:ring-cyan-400
                        outline-none transition
                      "
                    >
                      <option className="text-black">Select {field.label}</option>
                      {field.options.map((opt) => (
                        <option key={opt} className="text-black">{opt}</option>
                      ))}
                    </select>
                  </div>
                ))}

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    className="
                      w-full rounded-xl px-4 py-3
                      bg-white/20 text-white
                      border border-white/30
                      focus:ring-2 focus:ring-emerald-400
                      outline-none transition
                    "
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">
                    Time Slot
                  </label>
                  <select
                    className="
                      w-full rounded-xl px-4 py-3
                      bg-white/20 text-white
                      border border-white/30
                      focus:ring-2 focus:ring-emerald-400
                      outline-none transition
                    "
                  >
                    <option className="text-black">Select Time</option>
                    <option className="text-black">09:00 AM</option>
                    <option className="text-black">10:30 AM</option>
                    <option className="text-black">01:00 PM</option>
                    <option className="text-black">03:00 PM</option>
                  </select>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="
                    w-full py-4 rounded-xl font-bold text-white tracking-wide
                    bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600
                    shadow-[0_15px_40px_rgba(16,185,129,0.6)]
                    transition-all duration-300
                    hover:scale-105 hover:shadow-[0_20px_60px_rgba(59,130,246,0.8)]
                    active:scale-95
                  "
                >
                  Confirm Appointment 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* ================= CUSTOM ANIMATION ================= */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Patient;


