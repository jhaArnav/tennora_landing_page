import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import dynamic from 'next/dynamic';
import React from 'react';
import Head from 'next/head';

// Dynamically import the Calendly inline widget component with no SSR
const CalendlyWidget = dynamic(() => import('../calendlyWidget'), { ssr: false });

export default function ContactForm() {
  return (
    <div className="w-full border-t border-[#555] bg-white">
      <Head>
        <title>Tennora | Specialized Tools for Loan Officers</title>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Head>
      <section className="bg-white text-black py-12 md:py-24 lg:py-32 flex align-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Request a Live Demo
              </h1>
              <p className="max-w-[600px] text-black md:text-xl mx-auto">
                Experience our powerful real estate CRM firsthand. Schedule a live demo with one of our experts.
              </p>
            </div>
            <Card className="bg-gray-300 text-black shadow-lg w-full max-w-5xl">
              <CardHeader className="text-center">
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Schedule a live demo with us.</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendlyWidget />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
