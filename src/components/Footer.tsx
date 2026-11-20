import { content } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 px-4 sm:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        © 2026 {content.name}. Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          Next.js
        </a>{" "}
        &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
