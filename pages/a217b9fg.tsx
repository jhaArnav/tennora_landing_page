import React from 'react';
import Link from 'next/link';

const ConfirmationPage = () => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-500">Thank You!</h1>
        <p className="mt-4 text-gray-700">You have successfully signed up for a live demo.</p>
        <p className="mt-2 text-gray-700">We look forward to showing you how our CRM can help you manage your real estate business more efficiently.</p>
        <p className="mt-4 text-gray-700">You will receive an email shortly with further details.</p>
        <Link href='/'>
            <div className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Back to Home
            </div>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
