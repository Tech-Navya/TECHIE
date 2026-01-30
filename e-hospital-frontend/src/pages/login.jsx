import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-emerald-50">

      {/* ================= LOGIN CARD ================= */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-cyan-500
                          flex items-center justify-center text-white text-2xl font-bold">
            +
          </div>
          <h2 className="text-2xl font-bold text-cyan-700">
            Login to E-Hospital
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Secure access for doctors, patients & admins
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="doctor@hospital.com"
              className="w-full px-4 py-2.5 rounded-lg border
                         focus:ring-2 focus:ring-cyan-500
                         outline-none transition"
            />
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

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-cyan-600" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-cyan-600 hover:underline"
            >
              Forgot password?
            </Link>
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
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <Link
            to="/register"
            className="text-cyan-600 font-medium ml-1 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
