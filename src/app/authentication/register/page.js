"use client";

import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [role, setRole] = useState(''); // kung unsay imo ge select na role sa pag register
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (role === 'client') {
      router.push('/dashboard/clientdashboard');
    } else if (role === 'talent') {
      router.push('/dashboard/talentdashboard');
    } else {
      alert('Please select a role to proceed.');
    }
  };

  return (
    <>
      <Head>
        <title>Create an Account</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />

            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>

            <input
              type="password"
              placeholder="Create Password"
              className="border border-gray-300 p-3 rounded w-full mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />

            <div className="flex space-x-4 mb-6">
              <button
                type="button"
                onClick={() => setRole('client')}
                className={`w-1/2 py-2 px-4 rounded-md text-white font-semibold ${role === 'client' ? 'bg-gray-800' : 'bg-gray-600'} hover:bg-gray-700`}
              >
                CLIENT
              </button>
              <button
                type="button"
                onClick={() => setRole('talent')}
                className={`w-1/2 py-2 px-4 rounded-md text-white font-semibold ${role === 'talent' ? 'bg-gray-800' : 'bg-gray-600'} hover:bg-gray-700`}
              >
                TALENT
              </button>
            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" required />
              <label className="text-sm">
                I accept the{' '}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-700"
            >
              Create account
            </button>

            <p className="text-sm mt-4 text-center">
              Already have an account?{' '}
              <a href="/authentication/login" className="text-indigo-600 hover:underline">
                Log in now
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
