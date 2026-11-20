import { content } from "@/data/content";

export default function Experience() {
  if (content.experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Experience &amp; Education</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-8" />

        <div className="relative border-l-2 border-indigo-100 dark:border-indigo-900 pl-6 space-y-10 ml-2">
          {content.experience.map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-950" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.role}</h3>
                  <p className="text-indigo-500 font-medium text-sm">{item.org}</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-1">
                {item.points.map((pt, j) => (
                  <li key={j} className="text-sm text-gray-600 dark:text-gray-400">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
