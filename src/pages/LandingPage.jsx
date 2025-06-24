// File: src/pages/LandingPage.jsx

import React from 'react';

// Tailwind UI icons (optional - you can install @heroicons/react)
import { ShoppingBagIcon, GlobeAltIcon, PhoneIcon } from '@heroicons/react/24/outline';

/**
 * LandingPage Component
 * This is the homepage for the Artisans Marketplace.
 * It introduces the platform, explains the mission, and guides users to explore or register.
 */

const features = [
  {
    name: 'Support Local Artisans',
    description:
      'Connect with talented craftspeople from rural communities and purchase handmade, authentic products.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Global Reach',
    description:
      'Our platform helps small-scale artisans access broader markets and achieve sustainable income.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Easy Vendor Onboarding',
    description:
      'Vendors can register their shop quickly with just a phone number — no complicated forms.',
    icon: PhoneIcon,
  },
];

function LandingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-orange-100 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Empowering Local Artisans
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A digital platform that bridges the gap between rural creativity and global consumers.
        </p>
        <div className="mt-6">
          <a
            href="/customer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Products
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 border rounded-xl shadow hover:shadow-md transition"
              >
                <feature.icon className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-orange-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Are you an artisan?
        </h2>
        <p className="text-gray-700 mb-6">
          Register your shop today and connect with customers who value your craft.
        </p>
        <a
          href="/vendor/register"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition"
        >
          Register as Vendor
        </a>
      </section>
    </div>
  );
}

export default LandingPage;
