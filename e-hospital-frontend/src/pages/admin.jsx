function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>

          <button className="px-4 py-2 rounded-lg text-sm font-medium text-white 
            bg-gradient-to-r from-red-500 to-pink-500 
            hover:scale-105 hover:shadow-lg transition">
            Logout
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Welcome */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Welcome, Admin 👋
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Manage doctors and patients from one place.
          </p>
        </div>

        {/* ================= MANAGEMENT PANELS ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ===== Doctor Management ===== */}
          <div className="group bg-white/70 backdrop-blur-xl rounded-3xl 
            shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
            hover:-translate-y-2 transition-all duration-300 p-6">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-blue-600">
                Doctor Management
              </h3>

              <button className="px-4 py-2 rounded-xl text-sm font-medium text-white
                bg-gradient-to-r from-blue-500 to-indigo-500
                hover:scale-105 hover:shadow-lg transition">
                + Add Doctor
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-6 text-sm">
              <span className="text-gray-700">
                <strong className="text-lg text-blue-600">13</strong> Active Doctors
              </span>
              <span className="text-gray-700">
                <strong className="text-lg text-yellow-600">2</strong> Pending
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2">Doctor</th>
                    <th>Specialty</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Dr. Alex P.", "Cardiology", "Active"],
                    ["Dr. Sarah M.", "Neurology", "Active"],
                    ["Dr. John D.", "Orthopedics", "Pending"],
                    ["Dr. Amy C.", "General Medicine", "Active"],
                  ].map(([name, spec, status], i) => (
                    <tr
                      key={i}
                      className="hover:bg-blue-50/50 transition"
                    >
                      <td className="py-3 font-medium">{name}</td>
                      <td>{spec}</td>
                      <td
                        className={`font-medium ${
                          status === "Active"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ===== Patient Management ===== */}
          <div className="group bg-white/70 backdrop-blur-xl rounded-3xl 
            shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
            hover:-translate-y-2 transition-all duration-300 p-6">

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-green-600">
                Patient Management
              </h3>

              <button className="px-4 py-2 rounded-xl text-sm font-medium text-white
                bg-gradient-to-r from-green-500 to-emerald-500
                hover:scale-105 hover:shadow-lg transition">
                + Register Patient
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-6 text-sm">
              <span className="text-gray-700">
                <strong className="text-lg text-green-600">167</strong> Active Patients
              </span>
              <span className="text-gray-700">
                <strong className="text-lg text-indigo-600">4</strong> New Today
              </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-2">Patient</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Jane Doe", "Cardiology"],
                    ["John Smith", "Cardiology"],
                    ["Emma R.", "General Medicine"],
                    ["Michael L.", "General Medicine"],
                  ].map(([name, dept], i) => (
                    <tr
                      key={i}
                      className="hover:bg-green-50/50 transition"
                    >
                      <td className="py-3 font-medium">{name}</td>
                      <td>{dept}</td>
                      <td className="text-green-600 font-medium">Active</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Admin;