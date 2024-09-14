import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h1>
          <form>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />

            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <Link href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Link href="/dashboard/clientdasboard" passHref>
              <button
                type="button"
                className="w-full py-2 px-4 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-700"
              >
                Log In
              </button>
            </Link>

            <p className="text-sm mt-4 text-center text-gray-600">
              Don’t have an account?{' '}
              <Link href="/authentication/register" className="text-indigo-600 hover:underline">
                Sign up now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
