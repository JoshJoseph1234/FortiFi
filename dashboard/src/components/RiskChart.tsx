import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface RiskEntry {
  id: string;
  user: string;
  score: number;
  time: string;
  reason: string;
}

export default function RiskChart() {
  const [data, setData] = useState<RiskEntry[]>([]);

  useEffect(() => {
    axios.get("/alerts.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Chart load failed:", err));
  }, []);

  const chartData = data.map((entry) => ({
    time: entry.time,
    score: Number((entry.score * 100).toFixed(0)), // Convert to %
  }));

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-4">📊 Risk Score Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
