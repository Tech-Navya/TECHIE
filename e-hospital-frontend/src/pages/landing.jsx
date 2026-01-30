import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50 text-gray-800">

{/* ================= NAVBAR ================= */}
<header className="sticky top-0 z-50 bg-cyan-500 shadow-md">
  <div className="w-full flex items-center justify-between px-8 py-4">

    {/* LOGO */}
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-xl bg-white/20
                      flex items-center justify-center
                      text-white font-bold">
        +
      </div>
      <span className="text-lg font-semibold text-white">
        E-Hospital Management Portal
      </span>
    </div>

    {/* NAV */}
    <nav className="hidden md:flex gap-10 text-white font-medium">
      <a href="#home" className="hover:text-white/80 transition">Home</a>
      <a href="#features" className="hover:text-white/80 transition">Features</a>
      <a href="#about" className="hover:text-white/80 transition">About</a>
      <a href="#contact" className="hover:text-white/80 transition">Contact</a>
    </nav>

    {/* LOGIN */}
    <Link
      to="/login"
      className="
        bg-white text-cyan-600 px-6 py-2 rounded-lg font-medium
        hover:bg-slate-100 hover:shadow-md
        transition-all active:scale-95
      "
    >
      Login
    </Link>

  </div>
</header>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden"
      >
        {/* background shapes */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-cyan-800">
              Smart Hospital <br /> Management System
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl text-lg">
              A secure, reliable, and modern platform designed for doctors,
              patients, and hospital administrators.
            </p>

            <div className="mt-10 flex gap-5">
              <Link
                to="/select-role"
                className="
                  bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium
                  shadow-lg shadow-emerald-500/30
                  hover:-translate-y-1 hover:shadow-2xl
                  transition-all active:scale-95
                "
              >
                Get Started
              </Link>

              <a
                href="#features"
                className="
                  border border-cyan-600 text-cyan-700 px-8 py-3 rounded-xl font-medium
                  hover:bg-cyan-600 hover:text-white
                  transition-all active:scale-95
                "
              >
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center">
            <div
              className="
                w-full max-w-md h-80 rounded-3xl
                bg-white/70 backdrop-blur-xl
                border border-white
                shadow-[0_30px_80px_rgba(0,0,0,0.15)]
                flex items-center justify-center
                transition hover:scale-105
              "
            >
              <span className="text-cyan-700 font-semibold text-lg">
                Hospital Dashboard Preview
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-cyan-700">
            Core Hospital Features
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              { title: "Patient Records", desc: "Secure digital patient history." },
              { title: "Doctor Scheduling", desc: "Smart appointment management." },
              { title: "Online Appointments", desc: "Book visits seamlessly." },
              { title: "Admin Control", desc: "Full hospital oversight." },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-gradient-to-br from-slate-50 to-white
                  rounded-2xl p-6 text-center
                  border border-slate-100
                  shadow hover:shadow-lg
                  transition-all hover:-translate-y-1
                "
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl
                                bg-cyan-100 text-cyan-700
                                flex items-center justify-center text-xl font-bold">
                  +
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Landing;


