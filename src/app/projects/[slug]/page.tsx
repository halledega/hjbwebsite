import projectsData from '@/../public/images/Project Photos/description.json';
import Image from 'next/image';
import Link from 'next/link';

// --- Type Definitions ---
// This defines the structure for the props that this page component will receive.
// The `params` object is automatically populated by Next.js with the dynamic segments of the URL.
// In this case, it will contain the `slug` from the URL, like { slug: 'luster-products' }.
interface ProjectPageProps {
  params: {
    slug: string;
  };
}

/**
 * generateStaticParams Function
 * 
 * This Next.js function is used during the build process to determine which dynamic pages
 * need to be generated statically. It reads our project data and creates a list of all
 * possible `slug` values. Next.js will then pre-render a page for each of these slugs.
 */
export async function generateStaticParams() {
  // We map over the projects array to return an array of objects,
  // each containing the `slug` for a project.
  // e.g., [{ slug: 'luster-products' }, { slug: 'campbell-heights-office' }]
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Project Detail Page
 * 
 * This is a dynamic React Server Component. It receives the `params` object from Next.js,
 * which contains the `slug` from the URL.
 */
export default function ProjectPage({ params }: ProjectPageProps) {
  // Find the specific project data that matches the slug from the URL.
  const project = projectsData.projects.find((p) => p.slug === params.slug);

  // If no project matches the slug, we can display a "not found" message.
  if (!project) {
    return (
      <div className="w-full py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link href="/projects" className="text-primary mt-4 inline-block hover:underline">
          Back to all projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="relative w-full h-[400px] md:h-[500px]">
        {/* The main project image is displayed here using the Next.js Image component for optimization. */}
        <Image
          src={project.image}
          alt={`Main image for ${project.name}`}
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        {/* A gradient overlay to make the title text stand out. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-6xl font-black">{project.name}</h1>
          <p className="text-xl text-slate-200">{project.location}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-secondary dark:text-white mb-4">Project Details</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="w-full md:w-64">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-secondary dark:text-white mb-4">Project Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="font-medium text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{project.location}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium text-slate-500 dark:text-slate-400">Type:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{project.type.join(', ')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
