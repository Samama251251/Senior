"use client"

interface MetricItem {
  value: string;
  change: string;
  positive: boolean;
}

interface MetricsData {
  users: MetricItem;
  sessions: MetricItem;
  bounceRate: MetricItem;
  sessionDuration: MetricItem;
}

export default function MetricsOverview({ metrics }: { metrics?: MetricsData }) {
  const defaultMetrics = {
    users: {
      value: "15K",
      change: "+1.02%",
      positive: true,
    },
    sessions: {
      value: "17K",
      change: "+2.04%",
      positive: true,
    },
    bounceRate: {
      value: "62.57%",
      change: "+13.45%",
      positive: false,
    },
    sessionDuration: {
      value: "1m 37s",
      change: "-29.7%",
      positive: false,
    },
  }

  const data = metrics || defaultMetrics

  return (
    <>
      <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
        <h3 className="text-sm font-medium text-gray-300">Users</h3>
        <p className="mt-2 text-2xl font-bold text-white">{data.users.value}</p>
        <p className={`mt-1 text-xs ${data.users.positive ? 'text-green-500' : 'text-red-500'}`}>
          {data.users.change}
        </p>
      </div>

      <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
        <h3 className="text-sm font-medium text-gray-300">Sessions</h3>
        <p className="mt-2 text-2xl font-bold text-white">{data.sessions.value}</p>
        <p className={`mt-1 text-xs ${data.sessions.positive ? 'text-green-500' : 'text-red-500'}`}>
          {data.sessions.change}
        </p>
      </div>

      <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
        <h3 className="text-sm font-medium text-gray-300">Bounce Rate</h3>
        <p className="mt-2 text-2xl font-bold text-white">{data.bounceRate.value}</p>
        <p className={`mt-1 text-xs ${data.bounceRate.positive ? 'text-green-500' : 'text-red-500'}`}>
          {data.bounceRate.change}
        </p>
      </div>

      <div className="rounded-lg bg-[#0f1631] p-4 shadow-lg">
        <h3 className="text-sm font-medium text-gray-300">Session Duration</h3>
        <p className="mt-2 text-2xl font-bold text-white">{data.sessionDuration.value}</p>
        <p className={`mt-1 text-xs ${data.sessionDuration.positive ? 'text-green-500' : 'text-red-500'}`}>
          {data.sessionDuration.change}
        </p>
      </div>
    </>
  )
}
  
  