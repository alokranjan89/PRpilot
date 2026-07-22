import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "📦",
    title: "Repository Analysis",
    description:
      "Analyze any GitHub repository using AI to understand architecture and project structure.",
  },
  {
    icon: "🤖",
    title: "AI Learning Roadmap",
    description:
      "Generate a personalized roadmap based on the repository and your experience level.",
  },
  {
    icon: "🎯",
    title: "Good First Issues",
    description:
      "Find beginner-friendly issues and start contributing confidently.",
  },
  {
    icon: "💬",
    title: "AI Code Mentor",
    description:
      "Chat with the repository using Gemini AI and understand unfamiliar code instantly.",
  },
];

const Features = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 text-center">
        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
          Features
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Everything You Need to
          <br />
          Start Contributing
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          PRPilot helps developers understand repositories,
          learn technologies, discover contribution opportunities,
          and collaborate with confidence.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;