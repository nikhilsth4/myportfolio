interface Link {
  href: string;
  title: string;
  target?: boolean;
  icon?: boolean;
}

export interface LinksData {
  [key: string]: Link;
}
