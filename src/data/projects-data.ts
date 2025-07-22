// Project images for Artisan Brew Co
import image1 from "../../public/projects/residential-harmony/rh-living-1.webp";
import image2 from "../../public/projects/residential-harmony/rh-living-2.webp";
import image3 from "../../public/projects/residential-harmony/rh-living-3.webp";
import image4 from "../../public/projects/residential-harmony/rh-kitchen-1.webp";
import image5 from "../../public/projects/residential-harmony/rh-kitchen-2.webp";
import image6 from "../../public/projects/residential-harmony/rh-kitchen-3.webp";
import image7 from "../../public/projects/residential-harmony/rh-kitchen-4.webp";
import image8 from "../../public/projects/residential-harmony/rh-kitchen-5.webp";
import image9 from "../../public/projects/residential-harmony/rh-kitchen-6.webp";
import image11 from "../../public/projects/residential-harmony/rh-balcony-1.webp";
import image12 from "../../public/projects/residential-harmony/rh-balcony-2.webp";
import image13 from "../../public/projects/residential-harmony/rh-balcony-3.webp";
import image14 from "../../public/projects/residential-harmony/rh-balcony-4.webp";
import image15 from "../../public/projects/residential-harmony/rh-balcony-5.webp";
import image16 from "../../public/projects/residential-harmony/rh-bedroom-1.webp";
import image17 from "../../public/projects/residential-harmony/rh-bedroom-2.webp";
import image18 from "../../public/projects/residential-harmony/rh-bedroom-3.webp";
import image19 from "../../public/projects/residential-harmony/rh-bedroom-4.webp";
import image20 from "../../public/projects/residential-harmony/rh-bedroom-5.webp";
import image21 from "../../public/projects/residential-harmony/rh-bedroom-6.webp";

// Project images for Wavelength Studios
// import image6 from "../../public/projects/wavelength-studios/5.png";
// import image7 from "../../public/projects/wavelength-studios/4.png";
// import image8 from "../../public/projects/wavelength-studios/6.png";
// import image9 from "../../public/projects/wavelength-studios/7.png";
// import image10 from "../../public/projects/wavelength-studios/8.png";

// You can organize these in your project-images folder
import artisanDetail1 from "../../public/projects/residential-harmony/1.png";
import artisanDetail2 from "../../public/projects/residential-harmony/2.png";
import artisanDetail3 from "../../public/projects/residential-harmony/3.png";

// Import other project images similarly

export const projectsData = [
  {
    id: 1,
    name: "Residential Harmony.",
    slug: "residential-harmony",
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
          alt: "Living room view 1",
        },
        {
          src: image2,
          original: image2,
          width: 1080,
          height: 720,
          alt: "Living room view 2",
        },
        {
          src: image3,
          original: image3,
          width: 1080,
          height: 720,
          alt: "Living room view 3",
        },
        {
          src: image4,
          original: image4,
          width: 1080,
          height: 720,
          alt: "Kitchen view 1",
        },
        {
          src: image5,
          original: image5,
          width: 1080,
          height: 720,
          alt: "Kitchen view 2",
        },
        {
          src: image6,
          original: image6,
          width: 1080,
          height: 720,
          alt: "Kitchen view 3",
        },
        {
          src: image7,
          original: image7,
          width: 1080,
          height: 720,
          alt: "Kitchen view 4",
        },
        {
          src: image8,
          original: image8,
          width: 1080,
          height: 720,
          alt: "Kitchen view 5",
        },
        {
          src: image9,
          original: image9,
          width: 1080,
          height: 720,
          alt: "Kitchen view 6",
        },
        {
          src: image11,
          original: image11,
          width: 1080,
          height: 720,
          alt: "Balcony view 1",
        },
        {
          src: image12,
          original: image12,
          width: 1080,
          height: 720,
          alt: "Balcony view 2",
        },
        {
          src: image13,
          original: image13,
          width: 1080,
          height: 720,
          alt: "Balcony view 3",
        },
        {
          src: image14,
          original: image14,
          width: 1080,
          height: 720,
          alt: "Balcony view 4",
        },
        {
          src: image15,
          original: image15,
          width: 1080,
          height: 720,
          alt: "Balcony view 5",
        },
        {
          src: image16,
          original: image16,
          width: 1080,
          height: 720,
          alt: "Bedroom view 1",
        },
        {
          src: image17,
          original: image17,
          width: 1080,
          height: 720,
          alt: "Bedroom view 2",
        },
        {
          src: image18,
          original: image18,
          width: 1080,
          height: 720,
          alt: "Bedroom view 3",
        },
        {
          src: image19,
          original: image19,
          width: 1080,
          height: 720,
          alt: "Bedroom view 4",
        },
        {
          src: image20,
          original: image20,
          width: 1080,
          height: 720,
          alt: "Bedroom view 5",
        },
        {
          src: image21,
          original: image21,
          width: 1080,
          height: 720,
          alt: "Bedroom view 6",
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
