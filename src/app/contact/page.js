export default function Contact() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-white hover:border-purple-500 transition-all duration-200 transform hover:scale-105 mt-6 mx-auto max-w-3xl dark:bg-black-300">
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-300 dark:text-white mb-6 animate-fade-in">
                Get in Touch
            </h2>

            <ul className="space-y-4 text-center">
                <li className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span className="font-semibold text-white">Email:</span>
                    <a
                        href="mailto:ahmed.aliraza51214@gmail.com"
                        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
                    >
                        ahmed.aliraza51214@gmail.com
                    </a>
                </li>
                <li className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span className="font-semibold text-white">LinkedIn:</span>
                    <a
                        href="https://www.linkedin.com/in/syedahmedaliraza/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
                    >
                        https://www.linkedin.com/in/syedahmedaliraza/
                    </a>
                </li>
                <li className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span className="font-semibold text-white">GitHub:</span>
                    <a
                        href="https://github.com/SyedAhmedAliRaza"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
                    >
                        https://github.com/SyedAhmedAliRaza
                    </a>
                </li>
            </ul>
        </div>
    );
}