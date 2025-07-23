import Button from '../components/Button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-center flex flex-col items-center justify-center ">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-300 dark:text-white animate-fade-in">
        Syed Ahmed – Fullstack Developer
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        I craft seamless digital experiences, blending intuitive front-end design with robust back-end logic to bring your ideas to life.
      </p>
      <div className="mt-5">
        <Button text="View My Projects" href="/projects" />
      </div>
    </div>
  );
}