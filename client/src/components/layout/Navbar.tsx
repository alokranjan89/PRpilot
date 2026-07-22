const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            P
          </div>

          <h1 className="text-xl font-bold text-white">PRPilot</h1>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-slate-300 hover:text-white">Features</a>
          <a href="#" className="text-slate-300 hover:text-white">Docs</a>
          <a href="#" className="text-slate-300 hover:text-white">About</a>
        </nav>

        <button
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          onClick={() => {
            window.location.href = "http://localhost:5000/api/auth/github";
          }}
        >
          Continue with GitHub
        </button>
      </div>
    </header>
  );
};

export default Navbar;