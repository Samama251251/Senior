"use client"

import { useEffect, useState } from "react"
import Navbar from "@/app/components/navbar"
import ActiveUsers from "@/app/components/active--users"
import PageViewsChart from "@/app/components/page-views-chart"
import MetricsOverview from "@/app/components/metrics-overview"
import AlertsSection from "@/app/components/alerts-section"
import DevicesBreakdown from "@/app/components/device-breakdown"
import DevicesSources from "@/app/components/device-sources"
import TopPages from "@/app/components/top-pages"
import MoreStats from "@/app/components/more-stats"
import { fetchDashboardData } from "@/app/lib/api"

interface DashboardData {
  activeUsers: number;
  pageViews: number[];
  metrics: {
    users: { value: string; change: string; positive: boolean };
    sessions: { value: string; change: string; positive: boolean };
    bounceRate: { value: string; change: string; positive: boolean };
    sessionDuration: { value: string; change: string; positive: boolean };
  };
  devices: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  sources: Array<{ name: string; value: number }>;
  topPages: Array<{ name: string; visits: number }>;
  moreStats: {
    visits: { value: string; label: string };
    percentage: { value: string; label: string };
  };
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const dashboardData = await fetchDashboardData()
        setData(dashboardData)
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a0f1e]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ActiveUsers activeUsers={data?.activeUsers} />
          <div className="col-span-1 md:col-span-3">
            <PageViewsChart pageViews={data?.pageViews} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
          <MetricsOverview metrics={data?.metrics} />
        </div>

        <div className="mt-4">
          <AlertsSection />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <DevicesBreakdown devices={data?.devices} />
          </div>
          <div className="lg:col-span-1">
            <DevicesSources sources={data?.sources} />
          </div>
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 gap-4">
              <TopPages topPages={data?.topPages} />
              <MoreStats stats={data?.moreStats} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

