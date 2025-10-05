import Link from 'next/link';
import { FaSpotify, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-white-600 to-white-700 text-white text-center p-4 mt-8 shadow-inner">
            <div className="container mx-auto">
                <p className="text-lg mb-2 text-black">© 2025 Syed. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <Link href="https://open.spotify.com/user/syedahmedaliraza?si=e4935f7e940a42ec" target="_blank" rel="noopener noreferrer" >
                        <FaSpotify size={24} className="text-black hover:text-green-500 transition-colors duration-300 transform hover:scale-110" />
                    </Link>
                    <Link href="https://www.facebook.com/ahmed.aliraza51214" target="_blank" rel="noopener noreferrer" >
                        <FaFacebook size={24} className="text-black hover:text-blue-700 transition-colors duration-300 transform hover:scale-110" />
                    </Link>
                    <Link href="https://www.instagram.com/ahmed.aliraza51214/" target="_blank" rel="noopener noreferrer" >
                        <FaInstagram size={24} className="text-black hover:text-red-500 transition-colors duration-300 transform hover:scale-110" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}