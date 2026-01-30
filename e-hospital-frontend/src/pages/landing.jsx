import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-slate-50 text-gray-800">
      {/* ================= NAVBAR ================= */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primaryGreen rounded-md flex items-center justify-center text-white font-bold">
              +
            </div>
            <span className="text-xl font-semibold">
              E-Hospital <span className="text-primaryBlue">Management Portal</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-6 text-gray-600">
            <a href="#home" className="hover:text-primaryBlue">Home</a>
            <a href="#features" className="hover:text-primaryBlue">Features</a>
            <a href="#about" className="hover:text-primaryBlue">About</a>
            <a href="#contact" className="hover:text-primaryBlue">Contact</a>
          </nav>

          {/* Login */}
          <Link
            to="/login"
            className="bg-primaryGreen text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primaryBlue">
              Manage Hospital Services Efficiently
            </h1>

            <p className="mt-4 text-gray-600 max-w-lg">
              Streamline your hospital operations with our all-in-one management
              platform for patients, doctors, and administrators.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/select-role"
                className="bg-primaryGreen text-white px-6 py-3 rounded-lg font-medium hover:opacity-90"
              >
                Get Started
              </Link>

              <a
                href="#features"
                className="border border-primaryBlue text-primaryBlue px-6 py-3 rounded-lg font-medium hover:bg-primaryBlue hover:text-white transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="relative">
            <div className="w-full h-80 bg-linear-to-br from-primaryBlue/20 to-primaryGreen/20 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500">
                Doctor Illustration / Image
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN FEATURES CARDS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-4">
          {[
            {
              title: "Patient Registration",
              desc: "Register and manage patient records.",
            },
            {
              title: "Doctor Schedules",
              desc: "View and manage doctor availability.",
            },
            {
              title: "Book Appointments",
              desc: "Easily schedule visits online.",
            },
            {
              title: "Admin Dashboard",
              desc: "Oversee hospital activities and data.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primaryBlue/10 text-primaryBlue rounded-lg flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primaryBlue">
            Key Features
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Easy Patient Management
              </h3>
              <p className="text-gray-600 text-sm">
                Efficiently register and track patients with a user-friendly system.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Doctor Scheduling
              </h3>
              <p className="text-gray-600 text-sm">
                Manage timetables and patient visits effortlessly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 text-sm">
                HIPAA-compliant architecture with encrypted data storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-linear-to-r from-primaryBlue/10 to-primaryGreen/10 text-center">
        <h2 className="text-3xl font-bold text-primaryBlue">
          Join Us Today!
        </h2>
        <p className="mt-3 text-gray-600">
          Get started with efficient hospital management now.
        </p>

        <Link
          to="/select-role"
          className="inline-block mt-8 bg-primaryGreen text-white px-8 py-3 rounded-lg font-medium hover:opacity-90"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Landing;
