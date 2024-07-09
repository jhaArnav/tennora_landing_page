// pages/privacy-policy.tsx
import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import NavBar from '../components/navBar'; // Adjust the path based on your folder structure

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Head>
        <title>Privacy Policy - Tennora</title>
        <meta name="description" content="Privacy Policy of Tennora" />
      </Head>
      <NavBar />
      <main className="flex-1 flex-col items-center justify-center px-6 py-12">
        <section className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            At Tennora, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <p className="mb-4">
            We collect information about you when you provide it to us, when you use our services, and when other sources provide it to us.
          </p>

          <h3 className="text-xl font-semibold mb-2">Information You Provide</h3>
          <p className="mb-4">
            We collect information that you provide to us, such as your name, email address, and other contact details when you sign up for our services, participate in our surveys, or contact us for support.
          </p>

          <h3 className="text-xl font-semibold mb-2">Information We Collect Automatically</h3>
          <p className="mb-4">
            We collect information about you automatically when you use our services. This may include your IP address, device type, browser type, and information about how you use our services.
          </p>

          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users.
          </p>

          <h2 className="text-2xl font-semibold mb-2">How We Share Your Information</h2>
          <p className="mb-4">
            We may share your information with third parties for various purposes, including to provide and improve our services, to comply with legal obligations, and to protect our rights.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Your Choices</h2>
          <p className="mb-4">
            You have choices about how your information is collected, used, and shared. For example, you can choose not to provide certain information, but this may limit your ability to use some of our services.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
          <p className="mb-4">
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of this policy and, in some cases, we may provide additional notice.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@tennora.com" className="text-blue-500 hover:underline">support@tennora.com</a>.
          </p>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#555] bg-[#1a1a1a] text-white">
        <p className="text-xs text-[#ccc]">&copy; 2024 Tennora. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4 text-[#ccc]">
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#ccc]">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
