import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full border-t border-[#555]">
      <Head>
        <title>Request a Live Demo</title>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Head>
      <section className="bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Request a Live Demo
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Experience our powerful real estate CRM firsthand. Schedule a live demo with one of our experts.
                </p>
              </div>
            </div>
            <Card className="bg-primary-foreground text-primary shadow-lg">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Schedule a live demo with us.</CardDescription>
              </CardHeader>
              <CardContent>
                {mounted && (
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/arnav-jha-tennora/demo-call"
                    style={{ minWidth: '320px', height: '630px' }}
                  ></div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
