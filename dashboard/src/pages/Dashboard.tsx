import React from "react";
import RiskChart from "../components/RiskChart";
import RiskTable from "../components/RiskTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-inter px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-emerald-400">
            🔐 FortiFi Risk Intelligence Dashboard
          </h1>
          <p className="text-slate-400 mt-1">
            Real-time session risk scoring, alerts, and behavioral insights.
          </p>
        </header>

        {/* Risk Line Chart */}
        <section className="mb-10">
          <RiskChart />
        </section>

        {/* Risk Table */}
        <section>
          <h2 className="text-xl font-semibold text-emerald-300 mb-3">
            🧾 Recent Risk Events
          </h2>
          <RiskTable />
        </section>
      </div>
    </div>
  );
}
