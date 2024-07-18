import ContactForm from '../contactForm';
import NavBar from '../navBar';
import Footer from '../footer';
import Head from 'next/head';
import icon from '../../public/logo.png';

export default function ContactBody() {
    return (
        <div className="flex flex-col flex-1 h-[100vh]">
            <Head>
                <title>Tennora - Contact Us | AI CRM for Real Estate Agents</title>
                <link rel="icon" type="image/x-icon" href={icon.src} />
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            </Head>
            <NavBar />
            <div className="bg-primary flex-1">
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
}
