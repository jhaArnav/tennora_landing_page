import NavBar from './navBar/navBar';
import LandingNavBar from '../navBar';

import ListingsPage from './listingsPage/body';
import LeadsPage from './leadsPage/body';
import DocumentPage from './documentsPage/body';
import SchedulingPage from './schedulingPage/body';
import MarketingPage from './marketingPage/body';
import { useState } from 'react';
import ContactForm from '../contactForm';
import Footer from '../footer';
import Head from "next/head";
import icon from "../../pictures/icon.png";

export default function DemoBody() {
    const [page, setPage] = useState<any | null>("listings");
    return (
        <div>
            <Head>
                <title>Tennora - Demo | AI CRM for Real Estate Agents</title>
                <link rel="icon" type="image/x-icon" href={icon.src} />
            </Head>
            <LandingNavBar/>
            <div className="p-10 pt-24 h-[75vw] bg-gray-100 flex flex-col">
                <div className="text-black py-8 px-6 text-center">
                    <h2 className="text-3xl font-extrabold">
                        Experience Our System in Action!
                    </h2>
                    <h3 className="text-xl font-normal mt-4">
                        Note: Please View on a Laptop or Desktop. Mobile Version may distort the layout.
                    </h3>
                    <p className="mt-4 text-lg">
                        Dive into our live demo and see how our tools can transform your real-estate business. Interact with our features and witness the seamless integrations we offer!
                    </p>
                    <p className="mt-3 text-lg">
                        This is a demo version of the Software Experience and UI. Some functionalities are not shown in this demo. 
                    </p>
                </div>
                <div className="rounded-2xl border-black border-solid flex-1 overflow-hidden shadow-xl mt-10 mx-5">
                    <NavBar router={setPage}/>
                    <div className="w-full h-full">
                        {renderSwitch(page)}
                    </div>
                </div>
            </div>
            <ContactForm/>
            <Footer/>
        </div>
        
    );
}

function renderSwitch(param: string) {
    switch (param) {
        case 'listings':
            return <ListingsPage/>
        case 'leads':
            return <LeadsPage/>
        case 'scheduling':
            return <SchedulingPage/>
        case 'documents':
            return <DocumentPage/>
        case 'marketing':
            return <MarketingPage/>
        default:
            return '404 Not Found'
    }
}
