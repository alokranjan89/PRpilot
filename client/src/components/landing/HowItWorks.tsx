import StepCard from "./StepCard";

const steps = [
  {
    number: "1",
    title: "Login with GitHub",
    description:
      "Authenticate securely using GitHub OAuth to access your repositories.",
  },
  {
    number: "2",
    title: "Choose Repository",
    description:
      "Select any public or private repository to begin AI-powered analysis.",
  },
  {
    number: "3",
    title: "Analyze with AI",
    description:
      "PRPilot generates summaries, tech stack, roadmap, and contribution guides.",
  },
  {
    number: "4",
    title: "Start Contributing",
    description:
      "Find beginner-friendly issues and chat with AI to understand the codebase.",
  },
];

const HowItWorks = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">

      <div className="mb-20 text-center">

        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-blue-400">
          Workflow
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          How PRPilot Works
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          Start contributing to open source in minutes with an AI-powered workflow.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {steps.map((step) => (
          <StepCard
            key={step.number}
            {...step}
          />
        ))}

      </div>

    </section>
  );
};

export default HowItWorks;