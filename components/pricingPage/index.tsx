import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';
import ContactForm from '../contactForm';
import Head from 'next/head';
import icon from '../../public/logo.png';
import StripeBuyButton from '../StripeBuyButton';

const PricingPage = () => {
  return (
    <div className="flex flex-col flex-1 h-[100vh]">
      <Head>
        <title>Tennora - Pricing | Specialized Tools for Loan Officers</title>
        <link rel="icon" type="image/x-icon" href={icon.src} />
      </Head>

      <NavBar />
      <div className="bg-primary flex-1">
        <div className="bg-gray-50 py-20 px-6 sm:py-24 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Transparent, No-Nonsense Pricing
            </h1>
            <p className="mt-4 text-2xl text-gray-500">
              One Plan. No hidden fees, No Surprises.
            </p>
            <div className="mt-16 mx-auto max-w-md bg-gray-200 py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
            {/* <p className="mt-2 text-base text-gray-900">Tennora's Monthly Subscription - Starting Offer:</p>
              <p className="mt-8 text-2xl font-extrabold text-gray-900/80 line-through">$125</p>
              
              <p className="text-4xl font-extrabold text-gray-900">$50</p>
              <p className="mt-2 text-base text-gray-500">per month</p> */}
              <ul className="mt-8 space-y-4 pl-8">
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pre-Approval Tools
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Scenario Simulations for Every Mortgage Type
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Detailed Breakdown of all Calculations
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sharing Quotes with Buyers/Realtors
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Simplified Deadline and Income Calculations
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Integration with Email, Text, and Social Media
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Hotline Support
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated Relationship Manager
                </li>
                <li className="flex items-center text-sm text-gray-900">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Access to Beta Features
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <StripeBuyButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default PricingPage;
