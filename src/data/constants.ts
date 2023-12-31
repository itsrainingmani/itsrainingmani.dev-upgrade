// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { iconPaths } from "@/data/IconPaths";

export const SITE_TITLE = "Overthunk";
export const SITE_DESCRIPTION = "Mani's personal website";

export const SOCIAL_LINKS = {
	github: "https://github.com/itsrainingmani/",
	twitter: "https://twitter.com/itsrainingmani",
	email: "mailto:jm75312@gmail.com",
	replit: "https://replit.com/@itsrainingmani",
	linkedin: "https://linkedin.com/in/mtiruman",
};

/** Icon links to social media — edit these with links to your profiles! */
export const ICON_LINKS: { label: string; href: string; icon: keyof typeof iconPaths }[] = [
	{ label: "Twitter", href: SOCIAL_LINKS["twitter"], icon: "twitter-logo" },
	{ label: "GitHub", href: SOCIAL_LINKS["github"], icon: "github-logo" },
	{ label: "Email", href: SOCIAL_LINKS["email"], icon: "email" },
];
