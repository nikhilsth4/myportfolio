type HomeLinksType = {
  home: { href: string; title: string };
  featured: { href: string; title: string };
  contact: { href: string; title: string };
  // works: { href: string; title: string; target: boolean; icon: boolean };
  resume: { href: string; title: string; target: boolean; icon: boolean };
  [key: string]: {
    href: string;
    title: string;
    target?: boolean;
    icon?: boolean;
  };
};

export const HomeLinks: HomeLinksType = {
  home: { href: "#", title: "home" },
  featured: { href: "#featured", title: "featured" },
  contact: { href: "#contact", title: "contact" },
  // works: { href: "/works", title: "works", target: true, icon: true },
  resume: {
    href: "https://drive.google.com/file/d/1lkrThYx7G_yWGWQp0MAPyHH5urzLFAEc/view?usp=sharing",
    title: "resume",
    target: true,
    icon: true,
  },
};

export const WorksLinks = {
  resume: {
    href: "https://drive.google.com/file/d/1lkrThYx7G_yWGWQp0MAPyHH5urzLFAEc/view?usp=sharing",
    title: "resume",
    target: true,
    icon: true,
  },
  home: { href: "/", title: "back to home" },
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/nikhilsth4",
  github: "https://github.com/nikhilsth4",
  email: "11nikhil.shrestha@gmail.com",
};
