import ProjectCard from '../../../components/ProjectCard';

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Next.js. Deployed via Vercel.',
    github: 'https://github.com/your-username/portfolio',
    live: 'https://rushikesh.vercel.app',
  },
];

export default function Projects() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectData.map((proj, idx) => <ProjectCard key={idx} {...proj} />)}
      </div>
    </div>
  );
}
