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
    {
      name: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built to showcase my projects, skills, and contact information with a sleek UI and smooth user experience.',
      tools: ['HTML', 'Tailwind CSS', 'React.js', 'Next.js'],
      github: 'https://github.com/SyedAhmedAliRaza/Personal-Portfolio',
    },
    {
      name: 'User Management REST API',
      description: 'This is a simple REST API for managing user data, built with Node.js, Express.js, and SQLite. It allows you to perform CRUD operations (Create, Read, Update, Delete) on user records, which include id, name, email, and age.',
      tools: ['Node.js', 'Express.js', 'SQLite DB'],
      github: 'https://github.com/SyedAhmedAliRaza/User-Management-REST-API',
    },
    {
      name: 'Titanic Survival Prediction',
      description: 'This project implements a machine learning pipeline to predict survival on the Titanic dataset using a Decision Tree Classifier. It includes data preprocessing, feature engineering, model training, evaluation, and visualizations for better insights into the survival patterns.',
      tools: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
      github: 'https://github.com/SyedAhmedAliRaza/Titanic-Survival-Prediction',
    },
    {
      name: 'Urdu OCR System',
      description: 'A Python-based OCR system for extracting Urdu text from PDFs and images using Tesseract, with preprocessing optimizations for Naskh Urdu scripts.',
      tools: ['Python', 'PyTesseract', 'OpenCV', 'Pillow', 'Pdf2image', 'Jiwer'],
      github: 'https://github.com/SyedAhmedAliRaza/Urdu-OCR',
    },
     {
      name: 'AI Document Chatbot',
      description: 'AI Document Chatbot is a Streamlit-based web application that allows users to upload documents (PDF, DOCX, TXT) and interact with them using natural language queries. The app leverages a Retrieval-Augmented Generation (RAG) pipeline powered by the Llama-3.2-1B-Instruct model to provide accurate answers from the uploaded files.',
      tools: ['Python', 'Streamlit', 'LangChain', 'Transformers', 'PyTorch', 'Hugging Face Hub', 'Sentence Transformers', 'FAISS', 'BitsAndBytes', 'PDFPlumber', 'python-docx', 'pyngrok', 'LLM: Llama-3.2-1B-Instruct'],
      github: 'https://github.com/SyedAhmedAliRaza/AI-Document-Chatbot',
    },
     {
      name: 'Music Streaming Platform',
      description: 'A futuristic music streaming experience built with HTML, CSS, JavaScript & Tailwind CSS. KARVAN redefines online streaming with an electrifying interface, smooth theme transitions, and dynamic animations. Designed to blend music, movies, and vibes into one immersive experience.',
      tools: ['HTML', 'Tailwind CSS', 'Javascript'],
      github: 'https://github.com/SyedAhmedAliRaza/Music-Streaming-Platform',
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