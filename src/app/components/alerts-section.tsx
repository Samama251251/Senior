"use client"

export default function AlertsSection() {
    return (
      <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
        <div className="flex items-start">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-medium text-white">No alerts set</h3>
            <p className="mt-1 text-sm text-gray-400">Get notified when your data drastically change</p>
          </div>
          <button className="rounded-md border border-gray-700 bg-[#1a2142] px-4 py-2 text-sm font-medium text-white hover:bg-[#232a4e] transition-colors">
            Set alert
          </button>
        </div>
      </div>
    )
  }
  
  