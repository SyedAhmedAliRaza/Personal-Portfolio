 import Button from '../../components/Button'; 
import Image from 'next/image'; 

export default function About() {
    const techStack = [
        'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript (ES6+)',
        'C/C++', 'Java', 'Python', 'PHP', 'Node.js', 'Express.js', 'REST API',
        'MySQL', 'MariaDB', 'MongoDB', 'SQLite', 'Supabase', 'Visual Studio',
        'VS Code', 'Dev-C++', 'Apache NetBeans', 'Postman', 'Git', 'GitHub', 'Google Cloud',
    ];

    return (
        <div className="container mx-auto px-4 py-8"> 
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300 dark:text-white mb-5 animate-fade-in">
                About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        I am a passionate full-stack developer with a strong command of both front-end and back-end development, capable of building dynamic, scalable, and user-centric applications. I excel in creating seamless digital experiences through clean architecture, intuitive design, and efficient data management. With a keen interest in Artificial Intelligence and Machine Learning, I am actively pursuing certifications to integrate intelligent solutions into future projects. My development approach focuses on problem-solving, performance optimization, and delivering innovative products that enhance user engagement and functionality.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-300 dark:text-white mb-4">
                        Technologies I Know
                    </h3>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
                        {techStack.map((tech) => (
                            <li
                                key={tech}
                                className="bg-white dark:bg-gray-800 rounded-md p-3 text-center shadow-sm
                                           hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-600 hover:text-white
                                           transition-all duration-200"
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-shrink-0">
                   
                    <Image
                        src="/profile.jpg"
                        alt="Syed Ahmed" 
                        width={224} 
                        height={224} 
                        className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto border-4 border-gray-300 shadow-md object-cover object-top transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-purple-500" 
                        priority 
                    />
                </div>
            </div>
        </div>
    );
}