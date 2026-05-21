import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import {
  Mail,
  Lock,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await loginUser(form);

      const user = res.data;

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      // ROLE BASED REDIRECT

      if (user.role === "ADMIN") {
        navigate("/admin");
      } else if (user.role === "ENGINEER") {
        navigate("/engineer");
      } else if (user.role === "OFFICER") {
        navigate("/officer");
      } else {
        navigate("/citizen");
      }
    } catch (err) {
      console.error(err);
      alert("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0b1120] text-white overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center p-16">
        {/* Background Glow */}
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cyan-500 p-4 rounded-2xl">
              <Building2 size={38} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                e-Nagar
              </h1>

              <p className="text-gray-300">
                Smart Approval System
              </p>
            </div>
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Secure Digital Building Approval Platform
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Submit plans, verify approvals, and manage
            municipal workflows efficiently with a modern
            digital approval ecosystem.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4 bg-white/10 border border-white/10 p-4 rounded-2xl backdrop-blur-lg">
              <ShieldCheck className="text-cyan-400" />
              <span>
                Secure role-based authentication system
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/10 p-4 rounded-2xl backdrop-blur-lg">
              <ShieldCheck className="text-cyan-400" />
              <span>
                Real-time application tracking
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/10 p-4 rounded-2xl backdrop-blur-lg">
              <ShieldCheck className="text-cyan-400" />
              <span>
                Fast engineer & officer approvals
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="bg-cyan-500 p-3 rounded-xl">
              <Building2 />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                e-Nagar
              </h1>

              <p className="text-sm text-gray-300">
                Approval Portal
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-gray-300 mb-8">
            Login to continue your workflow
          </p>

          {/* Email */}
          <div className="mb-5">
            <label className="text-sm text-gray-300 mb-2 block">
              Email Address
            </label>

            <div className="flex items-center bg-white/10 border border-white/10 rounded-2xl px-4">
              <Mail size={18} className="text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-sm text-gray-300 mb-2 block">
              Password
            </label>

            <div className="flex items-center bg-white/10 border border-white/10 rounded-2xl px-4">
              <Lock size={18} className="text-gray-400" />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="cursor-pointer w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            {loading ? "Signing In..." : "Login"}

            {!loading && (
              <ArrowRight
                size={18}
                className="transition"
              />
            )}
          </button>

          {/* Bottom */}
          <p className="text-center text-gray-400 mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-cyan-400 cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}