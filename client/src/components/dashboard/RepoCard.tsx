type RepoCardProps = {
  name: string;
  description: string;
  language: string;
};

const RepoCard = ({
  name,
  description,
  language,
}: RepoCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-semibold">{name}</h3>

      <p className="mt-3 text-sm text-slate-400">
        {description || "No description"}
      </p>

      <span className="mt-6 inline-block rounded-full bg-blue-600 px-3 py-1 text-sm">
        {language || "Unknown"}
      </span>
    </div>
  );
};

export default RepoCard;