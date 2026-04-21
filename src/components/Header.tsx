export default function Header() {
  return (
    <header className="w-full bg-[#1A3263]">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-[#FAB95B] font-semibold text-lg">
          Country Explorer
        </h1>

        <nav className="flex gap-6">
          <span className="text-white font-medium cursor-pointer hover:opacity-80 transition">
            Home
          </span>
          <span className="text-white font-medium cursor-pointer hover:opacity-80 transition">
            Países
          </span>
        </nav>

      </div>

    </header>
  );
}