import NavBar from './navBar/navBar';
import LandingNavBar from '../navBar';
import Body from './listingsPage/body';

export default function FeaturesBody() {
    return (
        <div>
            <LandingNavBar/>
            <div className="p-10 pt-24 h-[60vw] bg-gray-200">
                <div className="rounded-2xl border-black border-solid w-full h-full overflow-hidden shadow-xl">
                    <NavBar/>
                    <div className="w-full h-full overflow-scroll">
                        <Body/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
