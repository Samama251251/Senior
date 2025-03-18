"use client"

interface PageItem {
  name: string;
  visits: number;
}

export default function TopPages({ topPages }: { topPages?: PageItem[] }) {
  const defaultTopPages = [
    { name: "/about", visits: 565 },
    { name: "/pricing", visits: 477 },
    { name: "/products/watch-pro-max-search-day-1120", visits: 452 },
    { name: "/products/gaming-vr-card-combo-day-1116", visits: 447 },
    { name: "/products/watch-static-na-latest-combo-day-1120", visits: 395 },
    { name: "/products/desk-c-ergos-box-day-1117", visits: 362 },
    { name: "/products/message-me-vr-day-0051", visits: 358 },
    { name: "/products/mobile-discount-day-0061", visits: 340 },
  ]

  const data = topPages || defaultTopPages

  return (
    <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
      <h3 className="text-sm font-medium text-gray-300">Top pages</h3>

      <div className="mt-4 space-y-3">
        {data.map((page) => (
          <div key={page.name} className="flex items-center justify-between">
            <span className="max-w-[70%] truncate text-xs text-gray-300">{page.name}</span>
            <span className="text-xs font-medium text-white">{page.visits}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
  
  