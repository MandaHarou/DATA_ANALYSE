import {
  Zap,
  PackageSearch,
  CircleStar,
  FolderCog,
  ChartCandlestick,
  User,
  Sun,
} from "lucide-react";
const menuItems = [
  {
    id: "Dashboard",
    label: "Dashboard",
    icon: ChartCandlestick,
  },
  {
    id: "Product",
    label: "Product",
    icon: PackageSearch,
  },
  {
    id: "Agence",
    label: "Agence",
    icon: CircleStar,
  },
  {
    id: "Manager",
    label: "Manager",
    icon: FolderCog,
  },
  {
    id: "Depositor",
    label: "Depositor",
    icon: User,
  },
];

interface SideBarProps {
  collapsed: boolean;
  currentPage: string;
  onPageChange: (pageId: string) => void;
}

const SideBar = ({ collapsed, currentPage, onPageChange }: SideBarProps) => {
  return (
    <div
      className={`${collapsed ? "w-20" : "w-64"} transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700/50 flex flex-col  relative z-10`}
    >
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 linear-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            {/* Added onClick for onToggle */}
            <a href="/">
              <Zap className="w-6 h-6 text-blue-500 hover:cursor-pointer" />
            </a>
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-sm font-bold text-slate-800 dark:text-blue-700 ">
                HAROU
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                ADMIN PANEL
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div className="w-full flex items-center justify-between p-3 transition-all duration-200 border-b hover:border-blue-500 focus:outline-4 focus:outline-offset-0 focus:outline-blue-500 focus-visible:outline-4 hover:cursor-pointer">
          <Sun className="w-5 h-5" />
        </div>
        {menuItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <div key={item.id}>
              <div
                // Fixed className syntax (template literal) and typo (text-text-slate-600)
                className={`w-full flex items-center justify-between p-3 transition-all duration-200 border-b hover:border-blue-500 focus:outline-4 focus:outline-offset-0 focus:outline-blue-500 focus-visible:outline-4 hover:cursor-pointer ${
                  isActive
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => onPageChange(item.id)} // Added onClick for onPageChange
              >
                <div className="flex items-center space-x-3 transition-all duration-200">
                  {/* Adjusted icon color based on active state */}
                  <item.icon
                    className={`w-6 h-6 ${isActive ? "text-white" : "text-blue-500"}`}
                  />
                  {/* Conditionally render label based on collapsed state */}
                  {!collapsed && (
                    <span className="font-medium ml-2">{item.label}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
