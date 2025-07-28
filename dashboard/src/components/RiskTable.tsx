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

  return (
    <div>
      <table className="w-full border mt-6">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Session</th>
            <th className="p-2">User</th>
            <th className="p-2">Risk Score</th>
            <th className="p-2">Time</th>
            <th className="p-2">Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr
              key={i}
              className={`cursor-pointer ${entry.score > 0.7 ? "bg-red-100" : "hover:bg-gray-100"}`}
              onClick={() => openModal(entry)}
            >
              <td className="p-2">{entry.id}</td>
              <td className="p-2">{entry.user}</td>
              <td className="p-2">{(entry.score * 100).toFixed(0)}%</td>
              <td className="p-2">{entry.time}</td>
              <td className="p-2">{entry.reason}</td>
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
