// Project images for Artisan Brew Co
import image1 from "../../public/projects/artisan-brew-co/project-1.jpg";
import image2 from "../../public/projects/artisan-brew-co/project-2.jpg";
import image3 from "../../public/projects/artisan-brew-co/project-3.jpg";
import image4 from "../../public/projects/artisan-brew-co/project-4.jpg";
import image5 from "../../public/projects/artisan-brew-co/project-5.jpg";
// Project images for Wavelength Studios
import image6 from "../../public/projects/wavelength-studios/5.png";
import image7 from "../../public/projects/wavelength-studios/4.png";
import image8 from "../../public/projects/wavelength-studios/6.png";
import image9 from "../../public/projects/wavelength-studios/7.png";
import image10 from "../../public/projects/wavelength-studios/8.png";

// You can organize these in your project-images folder
import artisanDetail1 from "../../public/projects/artisan-brew-co/1.png";
import artisanDetail2 from "../../public/projects/artisan-brew-co/2.png";
import artisanDetail3 from "../../public/projects/artisan-brew-co/3.png";

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
    url: "",
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
          src: image2,
          original: image2,
          width: 1080,
          height: 720,
          alt: "Product catalog",
        },
        {
          src: image3,
          original: image3,
          width: 1080,
          height: 720,
          alt: "Tattoo man's back view",
        },
        {
          src: artisanDetail1,
          original: artisanDetail1,
          width: 1080,
          height: 720,
          alt: "About page",
        },
        {
          src: image4,
          original: image4,
          width: 1080,
          height: 720,
          alt: "About page",
        },
        {
          src: image5,
          original: image5,
          width: 1080,
          height: 720,
          alt: "About page",
        },
        {
          src: artisanDetail3,
          original: artisanDetail3,
          width: 1080,
          height: 720,
          alt: "About page",
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
    thumbnail: image6,
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
        {
          src: image6,
          original: image6,
          width: 1080,
          height: 720,
          alt: "Wavelength Studios homepage",
        },
        {
          src: image7,
          original: image7,
          width: 1080,
          height: 720,
          alt: "Wavelength Studios homepage",
        },
        {
          src: image8,
          original: image8,
          width: 1080,
          height: 720,
          alt: "Wavelength Studios homepage",
        },
        {
          src: image9,
          original: image9,
          width: 1080,
          height: 720,
          alt: "Wavelength Studios homepage",
        },
        {
          src: image10,
          original: image10,
          width: 1080,
          height: 720,
          alt: "Wavelength Studios homepage",
        },
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

export const getProjectBySlug = (slug: string) => {
  return projectsData.find((project) => project.slug === slug);
};
export const getAllProjectSlugs = () => {
  return projectsData.map((project) => project.slug);
};
