import Link from 'next/link';

export default function ProjectCard({ name, description, tools, github }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-500 hover:border-yellow-500 transition-all duration-200 transform hover:scale-105 dark:bg-gray-400">
            <h3 className="text-xl font-bold text-black">{name}</h3>
            <p className="text-gray-400 mt-2 dark:text-gray-200">{description}</p>
            <p className="text-gray-300 mt-2 dark:text-gray-100"><strong>Tools:</strong> {tools.join(', ')}</p>
            <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-800 text-white px-4 py-2 rounded-lg font-medium mt-4
                           hover:from-yellow-500 hover:to-yellow-500 hover:text-black transition-all duration-200"
            >
                View on GitHub
            </Link>
        </div>
    );
}