import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#555] bg-[#1a1a1a] text-white">
            <p className="text-xs text-[#ccc]">&copy; 2024 Tennora. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#ccc]" prefetch={false}>
                Privacy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-[#ccc]" prefetch={false}>
                Terms of Service
            </Link>
            </nav>
        </footer>
    );
}