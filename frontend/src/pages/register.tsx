import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [keystrokes, setKeystrokes] = useState<number[]>([]);

  const handleKeyDown = () => {
    setKeystrokes((prev) => [...prev, Date.now()]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Keystrokes:', keystrokes);
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
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
