export interface Project {
  id: string;
  slug: string;
  name: string;
  headline: string;
  location: string;
  locationDetail: string;
  status: "ongoing" | "completed";
  category: string;
  tags: string[];
  rera?: string;
  description: string;
  story: string;
  heroImage: string;
  galleryImages: string[];
  keyInfo: {
    location: string;
    status: string;
    type: string;
    rera?: string;
    possession?: string;
    area?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "motiram-picasso",
    name: "Motiram Picasso",
    headline: "Your second address.",
    location: "Kothimbe, Neral, Maharashtra",
    locationDetail: "Kothimbe Village, Raigad, Maharashtra",
    status: "ongoing",
    category: "Luxury Villas",
    tags: ["LUXURY VILLAS", "SECOND HOME", "VACATION LIVING"],
    rera: "PR1270002502572",
    description:
      "A villa destination near Neral, designed around the experience of owning a second home — somewhere to slow down, spend time with family and experience a more relaxed way of living.",
    story:
      "Motiram Picasso is a carefully conceived villa community in Kothimbe village, near Neral in Raigad district. The project is designed for those who seek a second address that feels genuinely different from city life — a place to slow down, to reconnect, and to experience a pace of living that the city rarely allows. With configurations ranging from 2 to 4 BHK, the villas offer flexible ownership for families, couples and those planning a private retreat beyond Mumbai.",
    heroImage:
      "https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?w=1920&h=1080&fit=crop&auto=format&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1757924461488-ef9ad0670978?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1750766514691-d3f94f7bc024?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1756272219589-20843abee772?w=1200&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1713186103033-60ff76a7b89d?w=1200&h=800&fit=crop&auto=format&q=80",
    ],
    keyInfo: {
      location: "Kothimbe Village, Raigad, Maharashtra",
      status: "Ongoing",
      type: "Luxury Villas / Second Homes",
      rera: "PR1270002502572 (pending verification)",
      area: "Approximately 3 acres",
    },
    featured: true,
  },
  {
    id: "2",
    slug: "motiram-darshan",
    name: "Motiram Darshan",
    headline: "",
    location: "[ Location to be confirmed ]",
    locationDetail: "[ Location to be confirmed ]",
    status: "completed",
    category: "Residential",
    tags: ["RESIDENTIAL"],
    description: "[ Project description to be provided by Padmaja Infraventures ]",
    story: "[ Detailed project story to be provided by Padmaja Infraventures ]",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop&auto=format&q=80",
    galleryImages: [],
    keyInfo: {
      location: "[ To be confirmed ]",
      status: "Completed",
      type: "[ To be confirmed ]",
    },
    featured: false,
  },
  {
    id: "3",
    slug: "motiram-privilege",
    name: "Motiram Privilege",
    headline: "",
    location: "[ Location to be confirmed ]",
    locationDetail: "[ Location to be confirmed ]",
    status: "completed",
    category: "Residential",
    tags: ["RESIDENTIAL"],
    description: "[ Project description to be provided by Padmaja Infraventures ]",
    story: "[ Detailed project story to be provided by Padmaja Infraventures ]",
    heroImage:
      "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=1920&h=1080&fit=crop&auto=format&q=80",
    galleryImages: [],
    keyInfo: {
      location: "[ To be confirmed ]",
      status: "Completed",
      type: "[ To be confirmed ]",
    },
    featured: false,
  },
  {
    id: "4",
    slug: "motiram-prime",
    name: "Motiram Prime",
    headline: "",
    location: "[ Location to be confirmed ]",
    locationDetail: "[ Location to be confirmed ]",
    status: "completed",
    category: "Residential",
    tags: ["RESIDENTIAL"],
    description: "[ Project description to be provided by Padmaja Infraventures ]",
    story: "[ Detailed project story to be provided by Padmaja Infraventures ]",
    heroImage:
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1920&h=1080&fit=crop&auto=format&q=80",
    galleryImages: [],
    keyInfo: {
      location: "[ To be confirmed ]",
      status: "Completed",
      type: "[ To be confirmed ]",
    },
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
