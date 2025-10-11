export interface Metadata {
  title: string;
  description?: string;
  og?: {
    image: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

export const sharedMetadata: Metadata = {
  title: "Shihab Hasan - Software Engineer",
  description: "A computer science student with exploring AI and Software Development.",
  og: {
    image: "og.jpg",
    alt: "Shihab Hasan",
    width: 1920,
    height: 1080,
  },
};
