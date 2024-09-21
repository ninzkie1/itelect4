"use client"; // Ensure this is a Client Component

import Head from 'next/head';

export default function ClientDashboard() {
  return (
    <>
      <Head>
        <title>TALENTO - Book a Talent for Your Event</title>
      </Head>
      <div>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logotalentos.png" alt="Talento Logo" className="h-8 mr-3" />
              <div className="text-xl font-bold">TALENTO</div>
            </div>
            <div className="space-x-6">
              <a href="/" className="hover:text-gray-700">Home</a>
              <a href="/category" className="hover:text-gray-700">Category</a>
              <a href="#about" className="hover:text-gray-700">About Us</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/authentication/login" className="hover:text-gray-700">Login</a>
            </div>
          </div>
        </nav>

        {/* Booking Section */}
        <section className="bg-gray-800 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Book a Talent for your Event!</h1>
            <div className="flex justify-center space-x-4">
              <select className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-black">
                <option>Select Event</option>
              </select>
              <select className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-black">
                <option>Select Theme</option>
              </select>
              <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">Search</button>
            </div>
          </div>
        </section>

        {/* Category Section */}
        <section className="container mx-auto py-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Browse By Category</h2>
            <a href="/categories" className="hover:text-gray-700">View All (6)</a>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <img src="/singer.png" alt="Singer" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Singer</h3>
            </div>
            <div className="text-center">
              <img src="/dancer.png" alt="Dancer" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Dancer</h3>
            </div>
            <div className="text-center">
              <img src="/musician.png" alt="Musician" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Musician</h3>
            </div>
            <div className="text-center">
              <img src="/band.png" alt="Band" className="rounded-lg mb-2" />
              <h3 className="text-lg font-semibold">Band</h3>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <ul className="flex space-x-2">
              <li className="px-3 py-1 border border-gray-300 rounded">1</li>
              <li className="px-3 py-1 border border-gray-300 rounded">2</li>
              <li className="px-3 py-1 border border-gray-300 rounded">3</li>
            </ul>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-200 py-16">
          <div className="container mx-auto flex items-center">
            <div className="w-1/2 pr-8">
              <img src="/background.png" alt="About Us" className="rounded-lg" />
            </div>
            <div className="w-1/2 pl-8">
              <h2 className="text-2xl font-bold mb-4">About us</h2>
              <p>
                Talento is a web-based and mobile-responsive talent booking management system designed
                to streamline the process of finding and booking performers for events.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
