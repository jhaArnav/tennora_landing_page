import NavBar from './navBar/navBar';
import LandingNavBar from '../navBar';

import ListingsPage from './listingsPage/body';
import LeadsPage from './leadsPage/body';
import DocumentPage from './documentsPage/body';
import { useState } from 'react';

export default function FeaturesBody() {
    const [page, setPage] = useState<any | null>("leads");
    return (
        <div>
            <LandingNavBar/>
            <div className="p-10 pt-24 h-[60vw] bg-gray-200">
                <div className="rounded-2xl border-black border-solid w-full h-full overflow-hidden shadow-xl">
                    <NavBar router={setPage}/>
                    <div className="w-full h-full overflow-scroll">
                        {renderSwitch(page)}
                    </div>
                </div>
            </div>
        </div>
        
    );
}

function renderSwitch(param: string) {
    switch (param) {
        case 'listings':
            return <ListingsPage/>
        case 'leads':
            return <LeadsPage/>
        case 'documents':
            return <DocumentPage/>
        default:
            return '404 Not Found'
    }
}
