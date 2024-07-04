import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';
import ContactForm from '../contactForm';

const PricingPage = () => {
  return (
    <div className="flex flex-col flex-1 h-[100vh]">
        <NavBar/>
        <div className="bg-primary flex-1">
            <div className="bg-gray-50 py-20 px-6 sm:py-24 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                Simple, Transparent Pricing
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                Choose the plan that fits your business needs. No hidden fees, no surprises.
                </p>
                <div className="mt-16 mx-[15vw] grid gap-8 lg:grid-cols-2 lg:gap-x-8">
                <div className="relative bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Individual</h2>
                    <p className="mt-4 text-sm text-gray-500">Perfect for small teams or individual agents.</p>
                    <p className="mt-8 text-4xl font-extrabold text-gray-900">$19</p>
                    <p className="mt-2 text-base text-gray-500">per month</p>
                    <ul className="mt-8 space-y-4">
                    <li className="flex items-center text-sm text-gray-700">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Email Integration
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Google Ads Support
                    </li>
                    </ul>
                </div>
                <div className="relative bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Enterprise</h2>
                    <p className="mt-4 text-sm text-gray-500">Best for large teams or agencies.</p>
                    <p className="mt-8 text-4xl font-extrabold text-gray-900">$99</p>
                    <p className="mt-2 text-base text-gray-500">per month</p>
                    <ul className="mt-8 space-y-4">
                    <li className="flex items-center text-sm text-gray-700">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Email Integration
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Google Ads Support
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        SEO Optimization
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8 15.414 4.293 11.707a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Zillow Integration
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        <ContactForm/>
        <Footer/>
    </div>
      );
};

export default PricingPage;
