// This is a dummy API service that simulates fetching data from a backend

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export interface DashboardData {
  activeUsers: number;
  pageViews: number[];
  metrics: {
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
    desktop: number;
    tablet: number;
    mobile: number;
  };
  sources: Array<{
    name: string;
    value: number;
  }>;
  topPages: Array<{
    name: string;
    visits: number;
  }>;
  moreStats: {
    visits: {
      value: string;
      label: string;
    };
    percentage: {
      value: string;
      label: string;
    };
  };
}

export async function fetchDashboardData(): Promise<DashboardData> {
  // Simulate API call delay
  await delay(800)

  // Return mock data
  return {
    activeUsers: 72,
    pageViews: [
      18, 25, 30, 22, 17, 29, 32, 15, 28, 23, 20, 27, 35, 25, 18, 22, 30, 25, 20, 15, 28, 32, 24, 18, 22, 27, 30, 25,
      20, 15,
    ],
    metrics: {
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
    },
    devices: {
      desktop: 52,
      tablet: 12,
      mobile: 36,
    },
    sources: [
      { name: "Direct", value: 24 },
      { name: "Organic", value: 14 },
      { name: "Email", value: 9 },
      { name: "Referral", value: 5 },
      { name: "Social", value: 2 },
    ],
    topPages: [
      { name: "/about", visits: 565 },
      { name: "/pricing", visits: 477 },
      { name: "/products/watch-pro-max-search-day-1120", visits: 452 },
      { name: "/products/gaming-vr-card-combo-day-1116", visits: 447 },
      { name: "/products/watch-static-na-latest-combo-day-1120", visits: 395 },
      { name: "/products/desk-c-ergos-box-day-1117", visits: 362 },
      { name: "/products/message-me-vr-day-0051", visits: 358 },
      { name: "/products/mobile-discount-day-0061", visits: 340 },
    ],
    moreStats: {
      visits: {
        value: "42K",
        label: "More visits",
      },
      percentage: {
        value: "47.45%",
        label: "More stats",
      },
    },
  }
}

