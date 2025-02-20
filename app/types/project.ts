export type ProjectTechnology = {
  name: string;
  icon?: string;
  color?: string;
};

export type ProjectImage = {
  url: string;
  alt: string;
  caption?: string;
};

export type ProjectFeature = {
  title: string;
  description: string;
  image?: ProjectImage;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  images: ProjectImage[];
  tags: string[];
  technologies: ProjectTechnology[];
  features: ProjectFeature[];
  challenges?: string[];
  learnings?: string[];
  link?: string;
  github?: string;
  date: string;
};