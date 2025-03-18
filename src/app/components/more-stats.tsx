"use client"

interface StatItem {
  value: string;
  label: string;
}

interface StatsData {
  visits: StatItem;
  percentage: StatItem;
}

export default function MoreStats({ stats }: { stats?: StatsData }) {
  const defaultStats = {
    visits: {
      value: "42K",
      label: "More visits",
    },
    percentage: {
      value: "47.45%",
      label: "More stats",
    },
  }

  const data = stats || defaultStats

  return (
    <div className="rounded-lg bg-blue-600 p-4 text-white shadow-lg">
      <h3 className="text-sm font-medium">More stats</h3>

      <div className="mt-4">
        <p className="text-3xl font-bold">{data.visits.value}</p>
        <p className="text-sm">{data.visits.label}</p>
      </div>

      <div className="mt-4">
        <p className="text-3xl font-bold">{data.percentage.value}</p>
        <p className="text-sm">{data.percentage.label}</p>
      </div>

      <button className="mt-4 flex items-center text-sm font-medium transition-transform hover:translate-x-1">
        <span>More stats</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}
  
  