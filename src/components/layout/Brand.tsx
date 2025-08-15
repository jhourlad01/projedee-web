import { FaCode } from 'react-icons/fa'

export function Brand() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
          <FaCode className="w-5 h-5 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ProjeDee
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
          Filipino Developers
        </span>
      </div>
    </div>
  )
} 