const HeroPreview = () => {
  return (
    <div className="relative hidden lg:flex h-[560px] w-[520px] rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">

      {/* Sidebar */}
      <aside className="w-20 border-r border-slate-800 bg-slate-950 p-4">
        <div className="mb-6 h-10 w-10 rounded-xl bg-blue-600" />

        <div className="space-y-4">
          <div className="h-8 rounded-lg bg-slate-800" />
          <div className="h-8 rounded-lg bg-slate-800" />
          <div className="h-8 rounded-lg bg-slate-800" />
          <div className="h-8 rounded-lg bg-slate-800" />
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 p-6">

        {/* Search */}
        <div className="mb-6 h-12 rounded-xl bg-slate-800" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-xl bg-slate-800 p-4">
            <div className="mb-2 h-3 w-20 rounded bg-slate-700" />
            <div className="h-7 w-12 rounded bg-blue-600" />
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <div className="mb-2 h-3 w-20 rounded bg-slate-700" />
            <div className="h-7 w-12 rounded bg-green-500" />
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <div className="mb-2 h-3 w-20 rounded bg-slate-700" />
            <div className="h-7 w-12 rounded bg-purple-500" />
          </div>

        </div>

        {/* Chart */}
        <div className="mt-6 h-40 rounded-2xl bg-slate-800" />

        {/* Repository */}
        <div className="mt-6 rounded-2xl bg-slate-800 p-5">

          <div className="mb-4 h-5 w-44 rounded bg-slate-700" />

          <div className="space-y-3">

            <div className="h-3 rounded bg-slate-700" />
            <div className="h-3 w-3/4 rounded bg-slate-700" />
            <div className="h-3 w-1/2 rounded bg-slate-700" />

          </div>

          <div className="mt-6 flex gap-3">

            <div className="h-9 w-28 rounded-lg bg-blue-600" />

            <div className="h-9 w-28 rounded-lg bg-slate-700" />

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroPreview;