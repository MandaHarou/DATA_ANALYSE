import { ChevronDown, Menu } from "lucide-react";
import { Search } from "lucide-react";
import { Sun } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white/-80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5 text-blue-500" />
          </button>
          <div className="hidden md:block">
            <h2 className="text-2xl font-black text-blue-500 ">Dashboard</h2>
            <p>ANALYSE YOUR DATA</p>
          </div>
        </div>
        {/* center */}
        <div className="flex-1 max-w-md mw-8">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 " />
            <input
              className="w-full pl-18 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-200 rounded-xl text-white placeholder-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:borderborder-transparent transition-all"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-50 hover:bg-slate-100 dark:hover:slate-800 transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/male-profile-icon-svg-download-png-4730400.png?f=webp&w=128"
              alt="User Avatar"
              className="w-8 h-8 rounded-full ring-2 ring-blue-500"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                John Doe
              </p>
              <p className=" text-xs text-slate-500 dark:text-slate-400">
                Administrator
              </p>
            </div>
            <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
