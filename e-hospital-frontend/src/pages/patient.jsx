import { Link } from "react-router-dom";

function Patient() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================= HEADER ================= */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-primaryBlue">
            Patient Dashboard
          </h1>

          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-primaryBlue"
          >
            Logout
          </Link>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome, Patient 👋
          </h2>
          <p className="text-gray-600 mt-2">
            Book an appointment with available doctors easily.
          </p>
        </div>

        {/* ================= BOOK APPOINTMENT CARD ================= */}
        <div className="max-w-xl bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-primaryBlue mb-6">
            Book Appointment
          </h3>

          <form className="space-y-5">
            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryBlue">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>General Medicine</option>
              </select>
            </div>

            {/* Doctor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Doctor
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryBlue">
                <option>Select Doctor</option>
                <option>Dr. Alex</option>
                <option>Dr. Sarah</option>
                <option>Dr. John</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Appointment Date
              </label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Slot
              </label>
              <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryBlue">
                <option>Select Time</option>
                <option>09:00 AM</option>
                <option>10:30 AM</option>
                <option>01:00 PM</option>
                <option>03:00 PM</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-primaryGreen text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Patient;
