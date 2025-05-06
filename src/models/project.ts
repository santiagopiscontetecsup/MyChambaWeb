export interface Proyecto {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  date: string;
  members: number;
  logo: string;

  description: string;
  requirements: string;
  objectives: string;
  deadline: string;
  reward: boolean;
  certificate: boolean;
  duration: string;
}