import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";

// Import additional project images (adjust paths as needed)
// You can organize these in your project-images folder
import artisanDetail1 from "@/assets/project-images/project-1/1.png";
import artisanDetail2 from "@/assets/project-images/project-1/2.png";
import artisanDetail3 from "@/assets/project-images/project-1/3.png";


// Import other project images similarly

export const projectsData = [
  {
    id: 1,
    name: "Artisan Brew Co.",
    slug: "artisan-brew-co",
    thumbnail: image1,
    description:
      "A modern website for a craft brewery featuring their product catalog and brand story.",
    client: "Artisan Brew Co.",
    year: "2023",
    services: ["Web Design", "Development", "Branding"],
    technologies: ["React", "Next.js", "Tailwind CSS"],
    challenge:
      "The client needed a website that reflected their artisanal approach while providing a seamless shopping experience.",
    solution:
      "I created a custom design that emphasizes the craftsmanship of their products with an intuitive e-commerce flow.",
    url: "https://artisanbrewco.example.com",
    gallery: {
      title: "Project Gallery",
      btnText: "Go back to Projects",
      btnIcon: "→",
      images: [
        {
          src: image1,
          original: image1,
          width: 1080,
          height: 720,
          alt: "Artisan Brew Co. homepage",
        },
        {
          src: artisanDetail1,
          original: artisanDetail1,
          width: 1080,
          height: 720,
          alt: "Product catalog",
        },
        {
          src: artisanDetail2,
          original: artisanDetail2,
          width: 1080,
          height: 720,
          alt: "Mobile view",
        },
        {
          src: artisanDetail3,
          original: artisanDetail3,
          width: 1080,
          height: 720,
          alt: "About page",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Wavelength Studios",
    slug: "wavelength-studios",
    thumbnail: image2,
    description:
      "A portfolio site for a sound design studio showcasing their work and services.",
    client: "Wavelength Studios",
    year: "2023",
    services: ["Web Design", "Development", "UX Design"],
    technologies: ["React", "Next.js", "Framer Motion"],
    challenge:
      "Creating an interactive experience that represents audio work visually.",
    solution:
      "Implemented audio visualizations and interactive elements that respond to sound samples.",
    url: "https://wavelengthstudios.example.com",
    gallery: {
      title: "Project Gallery",
      btnText: "View All Projects",
      btnIcon: "→",
      images: [
        {
          src: image2,
          original: image2,
          width: 1080,
          height: 720,
          alt: "Wavelength Studios homepage",
        },
        // Add more images for this project
      ],
    },
  },
  // Add remaining projects with similar structure
  {
    id: 3,
    name: "Nova Fitness",
    slug: "nova-fitness",
    thumbnail: image3,
    // Add details and gallery
  },
  {
    id: 4,
    name: "Urban Plates",
    slug: "urban-plates",
    thumbnail: image4,
    // Add details and gallery
  },
  {
    id: 5,
    name: "Bloom Botanicals",
    slug: "bloom-botanicals",
    thumbnail: image5,
    // Add details and gallery
  },
];

// Helper functions
// export const getProjectBySlug = (slug) => {
//   return projectsData.find((project) => project.slug === slug);
// };

export const getProjectBySlug = (slug: string) => {
  return projectsData.find((project) => project.slug === slug);
};
export const getAllProjectSlugs = () => {
  return projectsData.map((project) => project.slug);
};
