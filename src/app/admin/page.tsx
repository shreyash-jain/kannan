import type { Metadata } from "next";
import { Dashboard } from "./Dashboard";

export const metadata: Metadata = {
  title: "Executive Dashboard · Admin",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  return <Dashboard />;
}
