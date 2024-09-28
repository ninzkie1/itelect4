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
