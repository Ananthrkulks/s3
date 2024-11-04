export interface Showreel {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export interface Software {
  name: string;
  description: string;
  logo: string;
}