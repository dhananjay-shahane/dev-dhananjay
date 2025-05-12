export interface ProjectFeature {
  title: string;
  description: string;
  color: string; // 'blue', 'yellow', 'pink'
}

export interface ProjectTag {
  name: string;
  bgColor: string;
  textColor: string;
}

export interface Project {
  title: string;
  tags: ProjectTag[];
  description: string;
  imageUrl: string;
  features: ProjectFeature[];
  backgroundColor?: string;
  textColor?: string;
  link?: string;
}

export interface Skill {
  name: string;
  color: string;
}
