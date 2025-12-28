import {
  Zap,
  PackageSearch,
  CircleStar,
  FolderCog,
  ChartCandlestick,
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
    id: "Gestionaire",
    label: "Gestionaire",
    icon: FolderCog,
  },
];

const SideBar = () => {
  return (
    <div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700/50 flex flex-col  relative z-10 ">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex  items-center space-x-3">
          <div className="w-10 h-10 bg-gradiant-to-r from-blue-600 to-purple-600 rounded-xl flex  items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-blue-500 hover:cursor-pointer" />
            {/*  Conditionala Rende   */}
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800 dark:text-blue-700 ">
              DATA
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              ADMIN PANEL
            </p>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className={
                "w-full flex items-center justify-between p-3 transition-all duration-200 border-b hover:border-blue-500 focus:outline-4 focus:outline-offset-0 focus:outline-blue-500 focus-visible:outline-4 hover:cursor-pointer"
              }
            >
              <div className="flex items-center space-x-3 transition-all duration-200  ">
                <item.icon className={"w-6 h-6 text-blue-500 "} />
                <>
                  <span className="font-medium ml-2 ">{item.label}</span>
                </>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
