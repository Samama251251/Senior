"use client"

import { useEffect, useRef } from "react"

export default function PageViewsChart({ pageViews = [] }: { pageViews?: number[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Default data if none provided
  const defaultData = [
    18, 25, 30, 22, 17, 29, 32, 15, 28, 23, 20, 27, 35, 25, 18, 22, 30, 25, 20, 15, 28, 32, 24, 18, 22, 27, 30, 25, 20,
    15,
  ]

  const data = pageViews.length > 0 ? pageViews : defaultData

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const barWidth = width / data.length - 2
    const maxValue = Math.max(...data)

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw bars
    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * (height - 20)
      const x = index * (barWidth + 2)
      const y = height - barHeight

      ctx.fillStyle = "#3b82f6"
      ctx.fillRect(x, y, barWidth, barHeight)
    })
  }, [data])

  return (
    <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">Page views per minutes</h3>
        <div className="rounded bg-[#1a2142] px-2 py-1 text-xs text-white">
          <span>All page views</span>
          <span className="ml-1 font-bold">48,958</span>
        </div>
      </div>
      <div className="mt-4 h-32 w-full">
        <canvas ref={canvasRef} width={600} height={120} className="h-full w-full"></canvas>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <a href="#" className="flex items-center text-xs font-medium text-blue-500 hover:text-blue-400 transition-colors">
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

