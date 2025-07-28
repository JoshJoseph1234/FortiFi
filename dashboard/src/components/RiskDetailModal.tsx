import React from "react";

interface RiskDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    id: string;
    user: string;
    score: number;
    time: string;
    reason: string;
  } | null;
}

export default function RiskDetailModal({ isOpen, onClose, data }: RiskDetailModalProps) {
  if (!isOpen || !data) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-slate-800 text-slate-100 rounded-xl w-[400px] p-6 shadow-2xl border border-slate-700">
        <h2 className="text-xl font-bold mb-4 text-emerald-400">🕵️ Session Details</h2>

        <div className="space-y-3 text-sm">
          <div>
            <span className="text-slate-400">Session ID:</span>
            <div className="font-mono text-slate-100">{data.id}</div>
          </div>

          <div>
            <span className="text-slate-400">User:</span>
            <div>{data.user}</div>
          </div>

          <div>
            <span className="text-slate-400">Risk Score:</span>
            <div>{(data.score * 100).toFixed(0)}%</div>
          </div>

          <div>
            <span className="text-slate-400">Time:</span>
            <div>{data.time}</div>
          </div>

          <div>
            <span className="text-slate-400">Reason:</span>
            <div>{data.reason}</div>
          </div>

          <div>
            <span className="text-slate-400">Risk Level:</span>
            <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getBadgeStyle(data.score)}`}>
              {getRiskLevel(data.score)}
            </div>
          </div>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded shadow"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
