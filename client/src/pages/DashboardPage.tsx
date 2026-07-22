import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import RepoGrid from "../components/dashboard/RepoGrid";

const DashboardPage = () => {
  return (
    <>
      <DashboardHeader />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Repositories"
          value="24"
          color="text-blue-500"
        />

        <StatCard
          title="AI Analyses"
          value="126"
          color="text-green-500"
        />

        <StatCard
          title="Open Issues"
          value="58"
          color="text-orange-500"
        />

        <StatCard
          title="AI Score"
          value="92%"
          color="text-purple-500"
        />
      </div>

      {/* Repository Grid */}
      <RepoGrid />
    </>
  );
};

export default DashboardPage;