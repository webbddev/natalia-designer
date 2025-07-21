// import { notFound } from "next/navigation";
// import { getProjectBySlug } from "@/data/projects-data";
// import ProjectGallery from "@/components/Gallery";
// import { Link } from "../../../../../i18n/navigation";
// import { getLocale } from "next-intl/server";

// interface ProjectDetailPageProps {
//   params: Promise<{
//     slug: string;
//     locale: string;
//   }>;
// }

// export default async function ProjectDetailPage({
//   params,
// }: ProjectDetailPageProps) {
//   const { slug, locale } = await params;
//   const project = getProjectBySlug(slug);

//   if (!project) return notFound();

//   return (
//     <main className="container pt-24 pb-16 min-h-screen overflow-auto">
//       <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.name}</h1>
//       <div className="mb-8 text-xl text-stone-700">{project.description}</div>

//       {/* Project details - client, year, services, technologies */}
//       <div className="mb-8 text-lg text-stone-800">
//         <div className="flex flex-wrap">
//           <span className="font-semibold pr-1">Client:</span>
//           <span>{project.client}</span>
//         </div>
//         <div className="flex flex-wrap">
//           <span className="font-semibold pr-1">Year: </span>
//           <span>{project.year}</span>
//         </div>
//         <div className="flex flex-wrap">
//           <span className="font-semibold pr-1">Services: </span>
//           <span>{project.services?.join(", ")}</span>
//         </div>
//         <div className="flex flex-wrap">
//           <span className="font-semibold pr-1">Technologies: </span>
//           <span>{project.technologies?.join(", ")}</span>
//         </div>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
//         <p className="text-lg">{project.challenge}</p>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Solution</h2>
//         <p className="text-lg">{project.solution}</p>
//       </div>

//       {/* Gallery */}
//       {project.gallery && <ProjectGallery gallery={project.gallery} />}

//       <Link
//         href="/#projects"
//         locale={locale}
//         className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-600 transition-colors duration-500"
//       >
//         <span className="mr-2">{"←"}</span>
//         Back to All Projects
//       </Link>
//     </main>
//   );
// }

// app/[locale]/projects/[slug]/page.tsx
// app/[locale]/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects-data";
import ProjectGallery from "@/components/Gallery";
import { getTranslations } from "next-intl/server";
import { Link } from "../../../../../i18n/navigation";
import { useLocale } from "next-intl";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  // Get translations for the current locale
  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const commonT = await getTranslations({ locale, namespace: "common" });

  return (
    <main className="container pt-24 pb-16 min-h-screen overflow-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        {t(`${slug}.name`)}
      </h1>
      <div className="mb-8 text-xl text-stone-700">
        {t(`${slug}.description`)}
      </div>

      {/* Meta */}
      <div className="mb-8 text-lg text-stone-800 space-y-1">
        <div>
          <span className="font-semibold pr-1">{commonT("client")}:</span>
          <span>{t(`${slug}.client`)}</span>
        </div>
        <div>
          <span className="font-semibold pr-1">{commonT("year")}:</span>
          <span>{project.year}</span>
        </div>
        <div>
          <span className="font-semibold pr-1">{commonT("services")}:</span>
          <span>{project.services?.join(", ") || ""}</span>
        </div>
        <div>
          <span className="font-semibold pr-1">{commonT("technologies")}:</span>
          <span>{project.technologies?.join(", ") || ""}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{commonT("challenge")}</h2>
        <p className="text-lg">{t(`${slug}.challenge`)}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{commonT("solution")}</h2>
        <p className="text-lg">{t(`${slug}.solution`)}</p>
      </div>

      {project.gallery && <ProjectGallery gallery={project.gallery} />}

      <Link
        href="/#projects"
        locale={locale}
        className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-600 transition-colors duration-500"
      >
        <span className="mr-2">{"←"}</span>
        {commonT("backToProjects")}
      </Link>
    </main>
  );
}
