import type { ImageMetadata } from "astro";
import CvDocumentIcon from "../assets/icons/cv-document.svg";
import GitHubLogo from "../assets/icons/github.svg";
import LinkedInLogo from "../assets/icons/linkedin.svg";

type SVGComponent = ((_props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata;

interface Link {
  name: string;
  href: string;
  icon: SVGComponent;
  disabled?: boolean;
}

const links: Link[] = [
  {
    name: "GitHub",
    href: "https://github.com/shihabhasan0161",
    icon: GitHubLogo,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shihab-hasan-8444b2204/",
    icon: LinkedInLogo,
    disabled: false,
  },
];

export default links;
