type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

const StepCard = ({
  number,
  title,
  description,
}: StepCardProps) => {
  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
        {number}
      </div>

      <h3 className="mb-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-slate-400 leading-7">
        {description}
      </p>
    </div>
  );
};

export default StepCard;