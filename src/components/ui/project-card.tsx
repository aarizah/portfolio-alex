import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card rounded-lg shadow-md p-4 border-3 border-transparent hover:border-white hover:shadow-xl transition-all duration-300 box-border flex flex-col h-full">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={320}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-1">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 inline-block"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
