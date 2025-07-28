import { useEffect, useState } from "react";
import axios from "axios";
import RiskDetailModal from "./RiskDetailModal";

interface RiskEntry {
  id: string;
  user: string;
  score: number;
  time: string;
  reason: string;
}

export default function RiskTable() {
  const [data, setData] = useState<RiskEntry[]>([]);
  const [selected, setSelected] = useState<RiskEntry | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get("/alerts.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error loading alerts:", err));
  }, []);

  const openModal = (entry: RiskEntry) => {
    setSelected(entry);
    setModalOpen(true);
  };

  const getRiskLevel = (score: number) => {
    if (score > 0.7) return "High";
    if (score > 0.4) return "Medium";
    return "Low";
  };

  const getBadgeStyle = (score: number) => {
    if (score > 0.7) return "bg-red-700 text-red-100";
    if (score > 0.4) return "bg-amber-600 text-amber-100";
    return "bg-emerald-600 text-emerald-100";
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border border-slate-700 rounded-lg overflow-hidden shadow bg-slate-800">
        <thead className="bg-slate-700 text-slate-200">
          <tr>
            <th className="p-3 text-left">Session</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Risk Score</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Reason</th>
            <th className="p-3 text-left">Risk Level</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr
              key={i}
              onClick={() => openModal(entry)}
              className={`cursor-pointer transition hover:bg-slate-700 ${
                entry.score > 0.7
                  ? "bg-red-900/20"
                  : entry.score > 0.4
                  ? "bg-amber-900/20"
                  : "bg-emerald-900/20"
              }`}
            >
              <td className="p-3">{entry.id}</td>
              <td className="p-3">{entry.user}</td>
              <td className="p-3">{(entry.score * 100).toFixed(0)}%</td>
              <td className="p-3">{entry.time}</td>
              <td className="p-3">{entry.reason}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${getBadgeStyle(entry.score)}`}
                >
                  {getRiskLevel(entry.score)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <RiskDetailModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        data={selected}
      />
    </div>
  );
}
