// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/utils/variants";
// import { getProjectBySlug } from "@/data/projects-data";
// import ProjectGallery from "@/components/Gallery";

// export default function ProjectPage() {
//   const { slug } = useParams();
//   const [project, setProject] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (slug) {
//       const projectData = getProjectBySlug(slug as string);
//       setProject(projectData);
//       setLoading(false);
//     }
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="container mx-auto pt-24 pb-16 min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-stone-900"></div>
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="container mx-auto pt-24 pb-16 min-h-screen flex flex-col items-center justify-center">
//         <h1 className="text-4xl mb-4">Project Not Found</h1>
//         <Link
//           href="/#projects"
//           className="inline-flex items-center text-lg hover:underline"
//         >
//           Return to projects
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <main className="pt-24 pb-16">
//       <div className="container mx-auto">
//         {/* Back button */}
//         <motion.div variants={fadeIn("up")} initial="hidden" animate="show">
//           <Link
//             href="/#projects"
//             className="inline-flex items-center text-lg mb-8 hover:underline"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5 mr-2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
//               />
//             </svg>
//             Back to projects
//           </Link>
//         </motion.div>

//         {/* Project header */}
//         <motion.h1
//           variants={fadeIn("up")}
//           initial="hidden"
//           animate="show"
//           className="text-4xl md:text-6xl lg:text-7xl mb-6"
//         >
//           {project.name}
//         </motion.h1>

//         {/* Project intro */}
//         <motion.div
//           variants={fadeIn("up")}
//           initial="hidden"
//           animate="show"
//           className="grid md:grid-cols-2 gap-8 mb-16"
//         >
//           <div>
//             <p className="text-xl md:text-2xl mb-6">{project.description}</p>
//             <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//               <div>
//                 <h3 className="text-lg font-medium">Client</h3>
//                 <p>{project.client}</p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium">Year</h3>
//                 <p>{project.year}</p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium">Services</h3>
//                 <p>{project.services.join(", ")}</p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-medium">Technologies</h3>
//                 <p>{project.technologies.join(", ")}</p>
//               </div>
//             </div>
//             {project.url && (
//               <a
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center mt-8 px-6 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors"
//               >
//                 Visit Website
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="w-4 h-4 ml-2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
//                   />
//                 </svg>
//               </a>
//             )}
//           </div>
//           <div>
//             <Image
//               src={project.thumbnail}
//               alt={project.name}
//               className="w-full h-auto rounded-md"
//               priority
//             />
//           </div>
//         </motion.div>

//         {/* Project details */}
//         <motion.div
//           variants={fadeIn("up")}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.3 }}
//           className="mt-16 grid md:grid-cols-2 gap-8"
//         >
//           <div>
//             <h2 className="text-2xl md:text-3xl mb-4">The Challenge</h2>
//             <p className="text-lg">{project.challenge}</p>
//           </div>
//           <div>
//             <h2 className="text-2xl md:text-3xl mb-4">The Solution</h2>
//             <p className="text-lg">{project.solution}</p>
//           </div>
//         </motion.div>

//         {/* Project Gallery */}
//         {project.gallery && (
//           <motion.div
//             variants={fadeIn("up")}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: false, amount: 0.2 }}
//             className="mt-16"
//           >
//             <ProjectGallery gallery={project.gallery} />
//           </motion.div>
//         )}
//       </div>
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects-data";
import ProjectGallery from "@/components/Gallery";
import Link from "next/link";
import Button from "@/components/Button";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <main className="container py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.name}</h1>
      <div className="mb-8 text-lg text-stone-700">{project.description}</div>
      <div className="mb-8">
        <span className="font-semibold">Client:</span> {project.client} <br />
        <span className="font-semibold">Year:</span> {project.year} <br />
        <span className="font-semibold">Services:</span>{" "}
        {project.services?.join(", ")} <br />
        <span className="font-semibold">Technologies:</span>{" "}
        {project.technologies?.join(", ")}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
        <p>{project.challenge}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Solution</h2>
        <p>{project.solution}</p>
      </div>
      {/* Gallery */}
      {project.gallery && <ProjectGallery gallery={project.gallery} />}

      <Link
        href="/#projects"
        className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-600 transition-colors duration-500"
      >
        <span className="mr-2">{"←"}</span>
        Back to All Projects
      </Link>
    </main>
  );
}