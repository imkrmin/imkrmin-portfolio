import { ReactNode } from "react";

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
  images: string[];
  name: string;
  category: "Team" | "Single";
  term: string;
  description: ReactNode;
  techStacks: string[];
  url?: string;
  github?: string;
  features: TFeatureOrContribution[];
  contributions?: TFeatureOrContribution[];
  troubleShooting?: TTroubleShooting[];
};
