import { useRouter } from 'next/router';

export default function ResultPage() {
  const router = useRouter();
  const status = router.query.status;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-6 max-w-md w-full text-center">
        {status === 'success' ? (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-4">Access Granted ✅</h1>
            <p className="text-gray-700">You have successfully registered/logged in.</p>
          </>
        ) : status === 'blocked' ? (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-4">Access Blocked ❌</h1>
            <p className="text-gray-700">Your attempt was flagged as suspicious.</p>
          </>
        ) : (
          <p className="text-gray-600">Loading result...</p>
        )}
      </div>
    </div>
  );
}
