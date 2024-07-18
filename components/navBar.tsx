import icon from "../public/logo.png";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
    const [windowWidth, setWindowWidth] = useState(1000);
    useEffect(()=> {
        if (window) {
            setWindowWidth(window.innerWidth);
            console.log(window.innerWidth);
        }
    }, [])
    return (
        <header className="absolute w-full px-4 lg:px-6 h-14 flex items-center justify-between border-b border-[#333] bg-[#1a1a1a] text-white overflow-auto">
            {
                windowWidth > 640 &&
                <Link href="/" className="flex items-center justify-center" prefetch={false}>
                    <img src={icon.src} alt="Tennora Logo" className="min-w-10" width={36} />
                    <span className="sr-only">Tennora</span>
                </Link>
            }
            <nav className="flex gap-4 sm:gap-6">
                <Link
                    href="/"
                    className="flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Home
                </Link>


                {/* <Link
                    href="/demo"
                    className="flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Demo
                </Link> */}


                <Link
                    href="/pricing"
                    className="flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Pricing
                </Link>


                {/* <Link
                    href="/testimonials"
                    className="flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Testimonials
                </Link> */}

                
                <Link
                    href="/contact"
                    className="flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Contact
                </Link>
                <Link href="/privacy-policy"
                    className="flex items-center text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Privacy
                </Link>
            </nav>
        </header>
    );
}