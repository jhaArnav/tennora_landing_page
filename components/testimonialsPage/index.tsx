import React from 'react';
import Footer from '../footer';
import NavBar from '../navBar';
import ContactForm from '../contactForm';
import jessMiller from '../../pictures/profile/jessicaMiller.png';
import johnSmith from '../../pictures/profile/johnSmith.png';
import sarahLee from '../../pictures/profile/sarahLee.png';
import mikeBrown from '../../pictures/profile/michaelBrown.png';
import emilyDavis from '../../pictures/profile/emilyDavis.png';
import davidWilson from '../../pictures/profile/davidWilson.png';
import sophiaMartinez from '../../pictures/profile/sophiaMartinez.png';
import danielGarcia from '../../pictures/profile/danielGarcia.png';
import Head from "next/head";
import icon from "../../public/logo.png";

const TestimonialsPage = () => {
  return (
    <div className="flex flex-col flex-1 h-[100vh]">
        <Head>
            <title>Tennora - Testimonials | Specialized Tools for Loan Officers</title>
            <link rel="icon" type="image/x-icon" href={icon.src} />
        </Head>
        <NavBar/>
        <div className="bg-gray-50 py-20 px-6 sm:py-24 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                What Our Clients Say
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                Hear from real-estate professionals who have transformed their business with our CRM.
                </p>
                <div className="mt-16 grid gap-8 lg:grid-cols-4 lg:gap-x-8">
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 1"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Jessica Miller</h3>
                    <p className="mt-2 text-base text-gray-600">Real Estate Agent, NJ</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "This CRM has been a game-changer for my business. The integrations with Google Ads and SEO tools have helped me reach more clients and close more deals!"
                    </p>
                </div>
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 2"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Alex Smith</h3>
                    <p className="mt-2 text-base text-gray-600">Broker, NY</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "Our team loves the email integration feature. It's made communication with clients so much easier and more efficient. Highly recommend!"
                    </p>
                </div>
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 3"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Sarah Lee</h3>
                    <p className="mt-2 text-base text-gray-600">Broker & Owner, FL</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "The CRM's ability to integrate with Zillow has been incredible. Our listings get more visibility, and the automated processes save us so much time."
                    </p>
                </div>
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 4"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Michael Brown</h3>
                    <p className="mt-2 text-base text-gray-600">Realtor, FL</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "The seamless integration with various tools has streamlined our workflow and significantly increased our productivity. Highly recommended!"
                    </p>
                </div>
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 5"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Emily Davis</h3>
                    <p className="mt-2 text-base text-gray-600">Real Estate Consultant, GA</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "Our sales team has seen a remarkable improvement in client management and lead conversion rates. This CRM is a must-have for any real-estate professional."
                    </p>
                </div>
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 6"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">David Wilson</h3>
                    <p className="mt-2 text-base text-gray-600">Real Estate Agent & Investor, NJ</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "The CRM's Zillow integration has helped us get more visibility for our listings, and the automated email campaigns have improved our client engagement."
                    </p>
                </div>
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 7"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Sophia Martinez</h3>
                    <p className="mt-2 text-base text-gray-600">Realtor, GA</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "This CRM has transformed how we manage leads and interact with clients. The integration with SEO tools has significantly increased our online presence."
                    </p>
                </div>
                <div className="bg-white py-8 px-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={icon.src}
                        alt="Client 8"
                    />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">Daniel Garcia</h3>
                    <p className="mt-2 text-base text-gray-600">Brokerage Consultant, NY</p>
                    <p className="mt-4 text-sm text-gray-700">
                    "We've seen a noticeable increase in efficiency and client satisfaction since we started using this CRM. The customizable features are perfect for our growing team."
                    </p>
                </div>
                </div>
            </div>
            </div>
        <ContactForm/>
        <Footer/>
    </div>
  );
};

export default TestimonialsPage;