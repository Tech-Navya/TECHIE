function Doctor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-slate-100">
      {/* ================= HEADER ================= */}
      <header className="bg-cyan-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-white tracking-wide">
            Doctor Dashboard
          </h1>

          <button className="text-sm text-white/90 hover:text-white transition">
            Logout
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome, Dr. Alex 👋
          </h2>
          <p className="text-gray-600 mt-2">
            Here is your schedule for today.
          </p>
        </div>

        {/* ================= SCHEDULE CARD ================= */}
        <div className="
          max-w-2xl
          bg-white
          rounded-2xl
          p-8
          shadow-2xl
          transform
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-[1.01]
        ">
          <h3 className="text-2xl font-semibold text-cyan-600 mb-6">
            Today&apos;s Schedule
          </h3>

          <div className="space-y-4">
            {[
              {
                patient: "Jane Doe",
                time: "09:00 AM",
                department: "Cardiology",
                room: "Room 202",
              },
              {
                patient: "John Smith",
                time: "10:30 AM",
                department: "Cardiology",
                room: "Room 303",
              },
              {
                patient: "Emma R.",
                time: "12:45 PM",
                department: "General Medicine",
                room: "Room 105",
              },
              {
                patient: "Michael L.",
                time: "03:00 PM",
                department: "General Medicine",
                room: "Room 108",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  justify-between
                  items-center
                  border
                  rounded-xl
                  px-5
                  py-4
                  bg-white
                  shadow-md
                  transform
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {item.patient}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.department} • {item.room}
                  </p>
                </div>

                <span className="font-semibold text-emerald-600">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Doctor;

