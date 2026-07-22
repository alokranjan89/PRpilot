const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-blue-500">
        PRPilot
      </h2>

      <nav className="mt-10 space-y-4">
        <button className="block w-full rounded-lg bg-slate-800 p-3 text-left hover:bg-slate-700">
          Dashboard
        </button>

        <button className="block w-full rounded-lg p-3 text-left hover:bg-slate-800">
          Repositories
        </button>

        <button className="block w-full rounded-lg p-3 text-left hover:bg-slate-800">
          AI Analysis
        </button>

        <button className="block w-full rounded-lg p-3 text-left hover:bg-slate-800">
          AI Chat
        </button>

        <button className="block w-full rounded-lg p-3 text-left hover:bg-slate-800">
          Settings
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;