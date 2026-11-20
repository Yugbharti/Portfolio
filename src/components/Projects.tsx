import { content } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const sorted = [...content.projects].sort((a, b) =>
    (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Projects</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sorted.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
