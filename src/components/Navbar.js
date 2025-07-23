import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-yellow-600 to-yellow-1000 text-white text-center p-4 mt-4 shadow-inner">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-lg hover:text-gray-500 transition-colors duration-200">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-lg hover:text-gray-500 transition-colors duration-200">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-lg hover:text-gray-500 transition-colors duration-200">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}