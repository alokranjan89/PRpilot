import RepoCard from "./RepoCard";
import { useRepositories } from "../../hooks/useRepositories";
import type { Repository } from "../../types/repository";

const RepoGrid = () => {
  const { data, isLoading, isError } = useRepositories();

  if (isLoading) {
    return (
      <div className="mt-10">
        Loading repositories...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-10 text-red-500">
        Failed to load repositories.
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {data.repositories.map((repo: Repository) => (
        <RepoCard
          key={repo.id}
          name={repo.name}
          description={repo.description ?? ""}
          language={repo.language ?? ""}
        />
      ))}
    </div>
  );
};

export default RepoGrid;