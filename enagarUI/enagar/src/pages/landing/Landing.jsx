import { useNavigate } from "react-router-dom";
import {
  Building2,
  ShieldCheck,
  FileCheck,
  Users,
  ArrowRight,
} from "lucide-react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b1120] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-500 p-2 rounded-xl">
            <Building2 size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              e-Nagar
            </h1>
            <p className="text-sm text-gray-300">
              Smart Building Approval Portal
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#workflow" className="hover:text-white transition">
            Workflow
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-8 md:px-16 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-[fadeIn_1s_ease]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-lg">
              <ShieldCheck className="text-cyan-400" size={18} />
              <span className="text-sm">
                Secure & Transparent Approval System
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Smart Digital
              <span className="text-cyan-400"> Building Plan </span>
              Approval System
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              Modern municipal approval platform where citizens can
              submit building plans online, engineers verify designs,
              and authorities approve applications digitally with
              complete transparency.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => navigate("/login")}
                className="group cursor-pointer bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-lg hover:scale-105 flex items-center gap-2"
              >
                Login
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button
                onClick={() => navigate("/register")}
                className="cursor-pointer border border-white/20 hover:bg-white/10 px-8 py-4 rounded-2xl transition duration-300 backdrop-blur-lg hover:scale-105"
              >
                Register
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 flex-wrap">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  10K+
                </h2>
                <p className="text-gray-400">
                  Applications Processed
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  99%
                </h2>
                <p className="text-gray-400">
                  Approval Transparency
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  24/7
                </h2>
                <p className="text-gray-400">
                  Online Access
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="relative flex justify-center">
            <div className="bg-white/10 border border-white/10 backdrop-blur-2xl p-8 rounded-[30px] shadow-2xl w-full max-w-md hover:scale-105 transition duration-500">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  Approval Dashboard
                </h2>

                <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>

              <div className="space-y-5">
                <div className="bg-white/10 p-5 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <FileCheck className="text-cyan-400" />
                    <div>
                      <h3 className="font-semibold">
                        Plan Verification
                      </h3>
                      <p className="text-sm text-gray-300">
                        Engineers review building designs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 p-5 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <Users className="text-indigo-300" />
                    <div>
                      <h3 className="font-semibold">
                        Citizen Portal
                      </h3>
                      <p className="text-sm text-gray-300">
                        Submit & track applications online
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 p-5 rounded-2xl">
                  <h3 className="font-bold text-lg">
                    Fast Approval Workflow
                  </h3>

                  <p className="text-sm mt-2 text-white/90">
                    Reduce paperwork and streamline approvals
                    digitally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 px-8 md:px-16 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Online Submission",
              desc: "Citizens can upload plans and documents digitally.",
            },
            {
              title: "Real-time Tracking",
              desc: "Track application status from review to approval.",
            },
            {
              title: "Secure Workflow",
              desc: "Role-based authentication for officers & engineers.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:-translate-y-2 hover:bg-white/15 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="relative z-10 px-8 md:px-16 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Approval Workflow
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            "Citizen Uploads Plan",
            "Engineer Reviews Plan",
            "Officer Verifies Documents",
            "Final Approval Granted",
          ].map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-white/10 to-white/5 p-8 rounded-3xl border border-white/10 text-center hover:scale-105 transition"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-xl">
                {index + 1}
              </div>

              <h3 className="font-semibold text-lg">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="relative z-10 border-t border-white/10 mt-10 px-8 md:px-16 py-8 text-center text-gray-400"
      >
        <p>
          © 2026 e-Nagar | Online Building Plan Approval
          System
        </p>

        <p className="mt-2 text-sm">
          Built with React + Tailwind CSS
        </p>
      </footer>
    </div>
  );
}