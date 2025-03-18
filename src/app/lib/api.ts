// API service for fetching dashboard data from the backend

export interface DashboardData {
  _id?: string;
  activeUsers: number;
  pageViews: number[];
  metrics: {
    _id?: string;
    users: {
      value: string;
      change: string;
      positive: boolean;
    };
    sessions: {
      value: string;
      change: string;
      positive: boolean;
    };
    bounceRate: {
      value: string;
      change: string;
      positive: boolean;
    };
    sessionDuration: {
      value: string;
      change: string;
      positive: boolean;
    };
  };
  devices: {
    _id?: string;
    desktop: number;
    tablet: number;
    mobile: number;
  };
  sources: Array<{
    _id?: string;
    name: string;
    value: number;
  }>;
  topPages: Array<{
    _id?: string;
    name: string;
    visits: number;
  }>;
  moreStats: {
    _id?: string;
    visits: {
      value: string;
      label: string;
    };
    percentage: {
      value: string;
      label: string;
    };
  };
  createdAt?: string;
  __v?: number;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
export async function fetchDashboardData(): Promise<DashboardData> {
  try {
    const response = await fetch(`${API_BASE_URL}/dashboard`);
    if (!response.ok) {
      throw new Error("Failed to fetch dashboard data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}
