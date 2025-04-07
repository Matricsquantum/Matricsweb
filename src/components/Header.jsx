import React, { useState } from 'react';
import { Search, Sun, Moon, Bell } from 'lucide-react';

function Header() {
  const [dark, setDark] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm border-b border-white/20 py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Matrics Dashboard</h1>
      <div className="flex items-center justify-end w-full">
        <div className="relative w-80 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-10 pr-4 bg-transparent text-white placeholder-white rounded-full border border-white/20 focus:outline-none"
          />
          <span className="absolute top-2 left-3 text-white">
            <Search size={18} />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-white/20 transition">
            <Bell size={20} className="text-white" />
          </button>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-white/20 transition"
          >
            {dark ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-white" />}
          </button>
          <div className="w-10 h-10 rounded-full bg-white/30"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;