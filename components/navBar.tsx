import icon from "../pictures/icon.png";
import Link from 'next/link';

export default function NavBar() {
    return (
        <header className="absolute w-full px-4 lg:px-6 h-14 flex items-center border-b border-[#333] bg-[#1a1a1a] text-white">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <img src={icon.src} alt="Tennora Logo" width={36} height={36} className="h-9 w-9" />
                <span className="sr-only">Tennora</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    href="/"
                    className="text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="/demo"
                    className="text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Demo
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Pricing
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="#contact"
                    className="text-sm font-medium hover:underline underline-offset-4 text-[#ccc]"
                    prefetch={false}
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
}