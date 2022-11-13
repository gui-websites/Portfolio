type Social = {
  name: string;
  tag: string;
  link: string;
};

type AboutPage = {
  name: string;
  birthday: string;
  pronouns: string;
  email: string;
  socials: Social[];
  about: string;
};

type ProjectPage = {
  name: string;
  logo: string;
  date: string;
  link: string | null;
  skills: string[];
  about: string;
  images: string[] | null;
};

export type { AboutPage, ProjectPage };
