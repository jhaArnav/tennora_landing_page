import ContactForm from '../contactForm';
import NavBar from '../navBar';
import Footer from '../footer';

export default function ContactBody() {
    return (
        <div className="flex flex-col flex-1 h-[100vh]">
            <NavBar/>
            <div className="bg-primary flex-1">
                <ContactForm/>
            </div>
            <Footer/>
        </div>
        
    );
}