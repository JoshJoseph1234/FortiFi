import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

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
    axios
      .get("/alerts.json")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error loading chart data:", err));
  }, []);

  return (
    <div className="mt-10 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
      <h2 className="text-emerald-400 text-lg font-semibold mb-4">📈 Risk Score Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
          <XAxis
            dataKey="time"
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#475569" }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 1]}
            stroke="#94a3b8"
            tickFormatter={(val) => `${Math.round(val * 100)}%`}
            tick={{ fontSize: 12 }}
            axisLine={{ stroke: "#475569" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "6px",
              color: "#e2e8f0",
            }}
            labelStyle={{ color: "#94a3b8", fontSize: "0.8rem" }}
            formatter={(value: number) => `${(value * 100).toFixed(0)}%`}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#22d3ee"
            strokeWidth={2}
            dot={{ r: 3, fill: "#22d3ee" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
