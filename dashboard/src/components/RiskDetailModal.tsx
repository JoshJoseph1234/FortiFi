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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
        <h2 className="text-xl font-bold mb-4">🕵️‍♂️ Session Details</h2>
        <p><strong>Session ID:</strong> {data.id}</p>
        <p><strong>User:</strong> {data.user}</p>
        <p><strong>Risk Score:</strong> {(data.score * 100).toFixed(0)}%</p>
        <p><strong>Time:</strong> {data.time}</p>
        <p><strong>Reason:</strong> {data.reason}</p>

        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
