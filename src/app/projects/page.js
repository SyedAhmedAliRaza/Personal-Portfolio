import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      name: 'Airline Reservation System',
      description: 'A Java-based backend system streamlining flight bookings, ticketing, and reservations with seamless integration of schedules and processing for a smooth, reliable experience.',
      tools: ['Java'],
      github: 'https://github.com/SyedAhmedAliRaza/Airline-Reservation-System',
    },
    {
      name: 'Shoe Store Sneak Peak',
      description: 'A sleek, responsive shoe store website with curated collections, user authentication, and interactive features for a seamless shopping experience.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/SyedAhmedAliRaza/Shoe-Store-Sneak-Peak-',
    },
    {
      name: 'Mobile Store',
      description: 'Responsive front-end homepage showcasing a flagship smartphone with stunning visuals and intuitive navigation.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/SyedAhmedAliRaza/Mobile-Store',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">

      <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-300 dark:text-white mb-10 animate-fade-in">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            tools={project.tools}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}