// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Сторінка не знайдена
        </h2>
        <p className="text-gray-600 mb-8">
          На жаль, сторінка за адресою, яку ви ввели, не існує.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
        >
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
}
