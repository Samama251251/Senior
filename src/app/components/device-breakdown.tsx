"use client"

interface DeviceData {
  desktop: number;
  tablet: number;
  mobile: number;
}

interface DeviceBarProps {
  label: string;
  percentage: number;
}

export default function DevicesBreakdown({ devices }: { devices?: DeviceData }) {
  const defaultDevices = {
    desktop: 52,
    tablet: 12,
    mobile: 36,
  }

  const data = devices || defaultDevices

  return (
    <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
      <h3 className="text-sm font-medium text-gray-300">Devices</h3>

      <div className="mt-4 flex space-x-4">
        <button className="rounded-md bg-[#1a2142] px-3 py-1 text-xs font-medium text-white">May</button>
        <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-400 hover:bg-[#1a2142]">June</button>
        <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-400 hover:bg-[#1a2142]">July</button>
        <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-400 hover:bg-[#1a2142]">August</button>
      </div>

      <div className="mt-4 space-y-3">
        <DeviceBar label="Desktop" percentage={data.desktop} />
        <DeviceBar label="Tablet" percentage={data.tablet} />
        <DeviceBar label="Mobile" percentage={data.mobile} />
      </div>
    </div>
  )
}

function DeviceBar({ label, percentage }: DeviceBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-300">
          {label} | {percentage}%
        </span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-[#1a2142]">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}
  
  