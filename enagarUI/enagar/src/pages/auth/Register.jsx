import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/authApi";

import {
  User,
  Mail,
  Lock,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "CITIZEN",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      setLoading(true);

      await registerUser(form);

      alert("Registered Successfully");

      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0b1120] text-white overflow-hidden">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center p-16">
        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cyan-500 p-4 rounded-2xl">
              <Building2 size={40} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                e-Nagar
              </h1>

              <p className="text-gray-300">
                Online Building Approval System
              </p>
            </div>
          </div>

          {/* Hero Text */}
          <h2 className="text-5xl font-bold leading-tight">
            Create Your Digital Approval Account
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Join the smart municipal platform for building
            plan approvals, transparent verification, and
            real-time workflow tracking.
          </p>

          {/* Feature Cards */}
          <div className="mt-10 space-y-5">
            <div className="bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-xl flex items-center gap-4">
              <ShieldCheck className="text-cyan-400" />

              <span>
                Secure authentication & protected access
              </span>
            </div>

            <div className="bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-xl flex items-center gap-4">
              <ShieldCheck className="text-cyan-400" />

              <span>
                Track approvals in real-time
              </span>
            </div>

            <div className="bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-xl flex items-center gap-4">
              <ShieldCheck className="text-cyan-400" />

              <span>
                Fast digital building approval workflow
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center items-center gap-3 mb-8">
            <div className="bg-cyan-500 p-3 rounded-xl">
              <Building2 />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                e-Nagar
              </h1>

              <p className="text-sm text-gray-300">
                Smart Approval Portal
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h2>

          <p className="text-center text-gray-300 mb-8">
            Register to access the approval system
          </p>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>

            <div className="flex items-center bg-white/10 border border-white/10 rounded-2xl px-4">
              <User size={18} className="text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm text-gray-300 mb-2">
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
          <div className="mb-5">
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <div className="flex items-center bg-white/10 border border-white/10 rounded-2xl px-4">
              <Lock size={18} className="text-gray-400" />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                className="w-full bg-transparent outline-none p-4 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="block text-sm text-gray-300 mb-2">
              Select Role
            </label>

            <select
              name="role"
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 text-white outline-none"
            >
              <option
                value="CITIZEN"
                className="text-black"
              >
                Citizen
              </option>

              <option
                value="ENGINEER"
                className="text-black"
              >
                Engineer
              </option>

              <option
                value="OFFICER"
                className="text-black"
              >
                Officer
              </option>

              <option
                value="ADMIN"
                className="text-black"
              >
                Admin
              </option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="cursor-pointer w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            {loading ? "Creating Account..." : "Register"}

            {!loading && <ArrowRight size={18} />}
          </button>

          {/* Footer */}
          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-cyan-400 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}