import { useState } from 'react';
import { getDeviceFingerprint } from '@/utils/fingerprint';
import axios from 'axios';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [keystrokes, setKeystrokes] = useState<number[]>([]);

  const handleKeyDown = () => {
    setKeystrokes((prev) => [...prev, Date.now()]);
  };

  

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const fingerprint = await getDeviceFingerprint();

//   const payload = {
//     name,
//     phone,
//     fingerprint,
//     keystrokes,
//   };

//   try {
//     const response = await axios.post('http://localhost:8000/api/register', payload);
//     console.log('Backend response:', response.data);
//     // TODO: Redirect based on response (we'll do this next)
//   } catch (err) {
//     console.error('Registration failed:', err);
//   }
// };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const fingerprint = await getDeviceFingerprint();

  const payload = {
    name,
    phone,
    fingerprint,
    keystrokes,
  };

  console.log('Sending payload:', payload);

  // TEMP MOCK RESPONSE
  const response = {
    data: {
      status: name.toLowerCase().includes('bot') ? 'flagged' : 'approved',
    },
  };

  // Redirect based on fake response
  if (response.data.status === 'flagged') {
  window.location.href = '/cognitive';
  } else {
  window.location.href = '/result?status=success';
  }

};




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-extrabold mb-4 text-center text-black">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block mb-1 font-semibold text-gray-800 text-sm">Name</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-black"
            placeholder="John Doe"
            />
        </div>
        <div>
            <label className="block mb-1 font-semibold text-gray-800 text-sm">Phone Number</label>
            <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300 text-black"
            placeholder="+91-XXXXXXXXXX"
            />
        </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
