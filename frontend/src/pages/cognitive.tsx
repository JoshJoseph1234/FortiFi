import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CognitiveChallenge() {
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  const correctIndex = 2; // hardcoded for now

  const handleSubmit = () => {
    if (selected === correctIndex) {
    router.push('/result?status=success');
    } else {
    router.push('/result?status=blocked');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Cognitive Challenge 🧠</h1>
        <p className="text-gray-700 mb-6">Which one is the red square?</p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`w-20 h-20 mx-auto cursor-pointer rounded-md border-2 ${
                index === correctIndex
                  ? 'bg-red-500'
                  : 'bg-blue-500'
              } ${selected === index ? 'ring-4 ring-black' : ''}`}
            ></div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
