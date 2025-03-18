"use client"

interface ActiveUsersProps {
  activeUsers?: number;
}

export default function ActiveUsers({ activeUsers }: ActiveUsersProps) {
    return (
      <div className="rounded-lg bg-[#0f1631] p-4">
        <h3 className="text-sm font-medium text-gray-400">Active Users</h3>
        <div className="mt-2">
          <p className="text-4xl font-bold">{activeUsers || 72}</p>
        </div>
        <div className="mt-4">
          <a href="#" className="flex items-center text-xs font-medium text-blue-500">
            VIEW REFERRALS
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    )
  }
  
  