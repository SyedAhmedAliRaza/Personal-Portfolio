import Link from 'next/link';

export default function Button({ text, href }) {
    return (
        <Link
            href={href}
            
            className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-medium text-lg
                       hover:from-yellow-900 hover:to-yellow-600 hover:text-black
                       transition-all duration-200 transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
        >
            {text}
        </Link>
    );
}