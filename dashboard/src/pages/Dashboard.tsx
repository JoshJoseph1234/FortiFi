import RiskTable from "../components/RiskTable";
import RiskChart from "../components/RiskChart";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">📊 FortiFi Admin Dashboard</h1>
      <RiskTable />
      <RiskChart />
    </div>
  );
}
