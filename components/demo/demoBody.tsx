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

export default function DemoBody() {
    const [page, setPage] = useState<any | null>("listings");
    return (
        <div>
            <LandingNavBar/>
            <div className="p-10 pt-24 h-[75vw] bg-gray-100 flex flex-col">
                <div className="text-black py-8 px-6 text-center">
                    <h2 className="text-3xl font-extrabold">
                        Experience Our System in Action!
                    </h2>
                    <p className="mt-4 text-lg">
                        Dive into our live demo and see how our tools can transform your real-estate business. Interact with our features and witness the seamless integrations we offer!
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
