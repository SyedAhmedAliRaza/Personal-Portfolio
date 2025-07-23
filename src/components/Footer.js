import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-white-600 to-white-700 text-white text-center p-4 mt-8 shadow-inner">
            <div className="container mx-auto">
                <p className="text-lg mb-2">© 2025 Syed. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <Link href="https://open.spotify.com/user/syedahmedaliraza?si=e4935f7e940a42ec" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors duration-200">
                        Spotify
                    </Link>
                    <Link href="https://www.facebook.com/ahmed.aliraza51214" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors duration-200">
                        Facebook
                    </Link>
                    <Link href="https://www.instagram.com/ahmed.aliraza51214/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors duration-200">
                        Instagram
                    </Link>
                </div>
            </div>
        </footer>
    );
}