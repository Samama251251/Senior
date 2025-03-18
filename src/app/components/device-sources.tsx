"use client"

interface SourceItem {
  name: string;
  value: number;
}

export default function DevicesSources({ sources }: { sources?: SourceItem[] }) {
  const defaultSources = [
    { name: "Direct", value: 24 },
    { name: "Organic", value: 14 },
    { name: "Email", value: 9 },
    { name: "Referral", value: 5 },
    { name: "Social", value: 2 },
  ]

  const data = sources || defaultSources

  return (
    <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">Sources</h3>
        <button className="rounded-full p-1 text-gray-400 hover:bg-[#1a2142] hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {data.map((source) => (
          <div key={source.name} className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{source.name}</span>
            <span className="text-sm font-medium text-white">{source.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
  
  