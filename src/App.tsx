import React from "react";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">Welcome to LightBook</h1>
          <p className="text-xl mb-6">
            A new social media platform where you connect, share, and grow
            together.
          </p>
          <button className="bg-yellow-500 text-gray-800 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-yellow-600 transition duration-300">
            Join Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Why LightBook?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Connect Easily</h3>
            <p className="text-gray-700">
              Find friends, follow creators, and stay updated with the latest
              trends.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">
              <i className="fas fa-share-alt"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Share Your Thoughts</h3>
            <p className="text-gray-700">
              Share photos, videos, and posts with your community. It's fun and
              easy.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-4xl mb-4">
              <i className="fas fa-lock"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-700">
              Your privacy is our priority. Control who sees your content.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">© 2025 LightBook. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-4">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-4">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-4">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
