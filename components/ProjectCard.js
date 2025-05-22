export default function ProjectCard({ title, description, github, live }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
      <div className="mt-4 flex gap-3">
        <a href={live} target="_blank" className="text-blue-600 underline">Live</a>
        <a href={github} target="_blank" className="text-gray-700 underline">GitHub</a>
      </div>
    </div>
  );
}
