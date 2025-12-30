import { PackageSearch, CircleStar, FolderCog, User } from "lucide-react";
const StatGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
      {/* Card 1 */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-blue-900 to-purple-600 shadow rounded-xl p-6 flex-1 hover:border hover:border-blue-500 focus:outline-4 focus:outline-offset-0 focus:outline-blue-500 focus-visible:outline-4 hover:cursor-pointer">
        <div className="text-indigo-500">
          <PackageSearch className="h-8 w-8" />
        </div>
        <div>
          <p className="text-2xl text-bold text-gray-500 relative -translate-y-5">
            Product
          </p>
          <p className="text-2xl font-bold text-gray-900 relative -translate-y-3">
            31K <span className="text-green-500">↗</span>
          </p>
          <p className="text-xs text-gray-400">Jan 1st - Feb 1st</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-blue-900 to-purple-600 shadow rounded-xl p-6 flex-1 hover:border hover:border-blue-500 focus:outline-4 focus:outline-offset-0 focus:outline-blue-500 focus-visible:outline-4 hover:cursor-pointer">
        <div className="text-indigo-500">
          <CircleStar className="h-8 w-8" />
        </div>

        <div>
          <p className="text-2xl text-bold text-gray-500 relative -translate-y-5">
            Agence
          </p>
          <p className="text-2xl font-bold text-gray-900 relative -translate-y-3">
            31K <span className="text-green-500">↗</span>
          </p>
          <p className="text-xs text-gray-400">Jan 1st - Feb 1st</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center gap-4 bg-gradient-to-r from-blue-900 to-purple-600 shadow rounded-xl p-6 flex-1 hover:border hover:border-blue-500 focus:outline-4 focus:outline-offset-0 focus:outline-blue-500 focus-visible:outline-4 hover:cursor-pointer">
        <div className="text-indigo-500">
          <FolderCog className="h-8 w-8" />
        </div>
        <div>
          <p className="text-2xl text-bold text-gray-500 relative -translate-y-5">
            Manager
          </p>
          <p className="text-2xl font-bold text-gray-900 relative -translate-y-3">
            31K <span className="text-green-500">↗</span>
          </p>
          <p className="text-xs text-gray-400">Jan 1st - Feb 1st</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-gradient-to-r from-blue-900 to-purple-600 shadow rounded-xl p-6 flex-1 hover:border hover:border-blue-500 focus:outline-4 focus:outline-offset-0 focus:outline-blue-500 focus-visible:outline-4 hover:cursor-pointer">
        <div className="text-indigo-500">
          <User className="h-8 w-8" />
        </div>

        <div>
          <p className="text-2xl text-bold text-gray-500 relative -translate-y-5">
            Depositor
          </p>
          <p className="text-2xl font-bold text-gray-900 relative -translate-y-3">
            31K <span className="text-green-500">↗</span>
          </p>
          <p className="text-xs text-gray-400">Jan 1st - Feb 1st</p>
        </div>
      </div>
    </div>
  );
};

export default StatGrid;
