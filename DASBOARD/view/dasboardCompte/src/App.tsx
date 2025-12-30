import SideBar from "./component/layot/SideBar";
import Header from "./component/layot/Header";
import Dashboard from "./component/layot/Dashboard";
import React from "react";
const App = () => {
  const [curentPage, setCurrentPage] = React.useState("dashboard");
  const [sideBarCollapsed, setSideBarCollapsed] = React.useState(false);
  return (
    <div className="flex min-h-screen bg-gradiant-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 z-10">
      <SideBar
        collapsed={sideBarCollapsed}
        currentPage={curentPage}
        onPageChange={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden fix">
        <Header
          sideBarCollapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
        />
        <main className="flex-1 overflow-y-auto bg-white dark:bg-slate-900">
          <div className="p-6 space-y-6">
            {curentPage === "dashboard" && <Dashboard />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
