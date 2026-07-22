import { useNavigate } from "react-router-dom";
import HeroPreview from "./HeroPreview";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between px-6">
      {/* Left Content */}
      <div className="max-w-2xl">
        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
          AI Powered Open Source Mentor
        </span>

        <h1 className="mt-6 text-6xl font-bold leading-tight">
          Understand
          <br />
          Any GitHub Repository
          <br />
          with AI
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          Analyze repositories, understand architecture, discover contribution
          opportunities, and learn faster with Gemini AI.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
          >
            Open Dashboard
          </button>

          <button className="rounded-lg border border-slate-700 px-6 py-3 text-white hover:bg-slate-800 transition">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Side */}
      <HeroPreview />
    </section>
  );
};

export default Hero;