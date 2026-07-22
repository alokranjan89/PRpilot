type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20 text-3xl">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;