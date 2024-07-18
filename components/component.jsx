/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GUTcjv4BuMf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import NavBar from "./navBar";
import ContactForm from "./contactForm";
import Footer from './footer';
import Link from "next/link";
import Head from "next/head";

import logo from "../public/logo.png";
import icon from "../public/logo.png";
// import listingImg from '../pictures/listingPage.png';
// import leadsImg from '../pictures/leadsPage.png';
// import marketingImg from '../pictures/marketingPage.png';
// import schedulingImg from '../pictures/schedulingPage.png';
// import documentsImg from '../pictures/documentsPage.png';
// import notesImg from '../pictures/noteTaking.png';

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Head>
        <title>Tennora - Precision Tools for Loan Officers</title>
        <link rel="icon" type="image/x-icon" href={icon.src} />
      </Head>
      <NavBar />
      <main className="flex-1 flex-col items-center justify-center">
        <section className="flex flex-row justify-center items-center pt-14 w-full h-[100vh] bg-white">
          <div className="container px-6 md:px-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4 sm:items-center sm:text-center lg:text-left lg:items-start">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Simplify Pre-Approvals and Faster Calculations as a Loan Officer using Tennora
                  </h1>
                  <p className="max-w-[600px] text-[#333] md:text-xl">
                  Tennora enables Loan Officers to streamline their closing process from detailed pre-approval checks to 
                  complex financial calculations and scenario plannin — all in one place, in seconds.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#0070f3] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0059c2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#333] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#333] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src={logo.src}
                alt="Hero"
                className="mx-auto aspect-square object-cover overflow-hidden rounded-xl lg:w-[75vh] w-[30vh]"
              />
            </div>
          </div>
        </section>
        <section id="features" className="flex flex-col items-center w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1a] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="inline-block rounded-lg bg-[#333] px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock the Power of AI in Your Real Estate Business
                </h2>
                <p className="max-w-[900px] text-[#ccc] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tennora's advanced AI capabilities streamline your workflows, boost productivity, and help you provide
                  exceptional service to your clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* <img
                src={leadsImg.src}
                width="550"
                height="310"
                alt="Automated Workflows"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />  */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automated Workflows</h3>
                  <p className="text-[#ccc]">
                    Tennora's AI-powered automation streamlines your daily tasks, from lead management to client
                    communication and paperwork processing.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* <img
                src={listingImg.src}
                width="550"
                height="310"
                alt="Intelligent Listing Generation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />  */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Intelligent Listing Generation</h3>
                  <p className="text-[#ccc]">
                    Tennora's AI analyzes market data and your client's preferences to generate personalized,
                    high-performing listing content which you can control in one dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* <img
                src={schedulingImg.src}
                width="550"
                height="310"
                alt="Communication Automation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Scheduling Automation</h3>
                  <p className="text-[#ccc]">
                    Tennora's AI-powered communication and scheduling tools combine to help you stay connected with clients through
                    automated scheduling and client outreach.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* <img
                src={notesImg.src}
                width="550"
                height="310"
                alt="Automated Note Taking"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Automated Note Taking</h3>
                  <p className="text-[#ccc]">
                    Tennora's AI-powered communication summary tools enable automatic note taking based on your conversations so that you
                    can focus on your clients without missing any details.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* <img
                src={documentsImg.src}
                width="550"
                height="310"
                alt="Paperwork Management"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Paperwork Management</h3>
                  <p className="text-[#ccc]">
                    Tennora streamlines your paperwork process, from automatically generating documents to securely
                    storing and sharing them with clients with Docusign.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* <img
                src={marketingImg.src}
                width="550"
                height="310"
                alt="Marketing Integration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              /> */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Marketing Integration</h3>
                  <p className="text-[#ccc]">
                    Tennora seamlessly integrates with marketing tools of your choice--from Google Ads and SEO Optimization, to email marketing and social media branding, allowing you to manage and optimize your
                    marketing campaigns from a single dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="contact">
          <ContactForm/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}