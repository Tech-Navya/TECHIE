import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

      {/* ================= REGISTER CARD ================= */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-cyan-500
                          flex items-center justify-center text-white text-2xl font-bold">
            +
          </div>
          <h2 className="text-2xl font-bold text-cyan-700">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Register to access E-Hospital Portal
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Dr. John Doe"
              className="w-full px-4 py-2.5 rounded-lg border
                         focus:ring-2 focus:ring-cyan-500
                         outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="user@hospital.com"
              className="w-full px-4 py-2.5 rounded-lg border
                         focus:ring-2 focus:ring-cyan-500
                         outline-none transition"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Register As
            </label>
            <select
              className="w-full px-4 py-2.5 rounded-lg border
                         focus:ring-2 focus:ring-cyan-500
                         outline-none transition"
            >
              <option>Select Role</option>
              <option>Patient</option>
              <option>Doctor</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border
                         focus:ring-2 focus:ring-cyan-500
                         outline-none transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border
                         focus:ring-2 focus:ring-cyan-500
                         outline-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold
              hover:bg-cyan-600 shadow-md hover:shadow-lg
              transition-all active:scale-95
            "
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="text-cyan-600 font-medium ml-1 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
