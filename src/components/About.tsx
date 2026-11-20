import { content } from "@/data/content";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-2">About Me</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-8" />

        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <MapPin size={14} />
            <span>{content.location}</span>
          </div>
          {content.about.map((para, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-base sm:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
