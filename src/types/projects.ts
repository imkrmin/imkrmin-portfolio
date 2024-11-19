export type TFilter = "All" | "Team" | "Solo";

export type TFeatureOrContribution = {
  id: number;
  text: string;
};

export type TTroubleShooting = {
  id: number;
  problem: string;
  solving: string;
};

export type TProjectData = {
  thumb: string;
  images: string[];
  name: string;
  category: "Team" | "Solo";
  term: string;
  descriptions: string[];
  techStacks: string[];
  url?: string;
  github?: string;
  features: TFeatureOrContribution[];
  contributions?: TFeatureOrContribution[];
  troubleShooting?: TTroubleShooting[];
};
