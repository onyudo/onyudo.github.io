export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Martin Otis',
    subtitle: 'My Personal Web Design & Development Portfolio',
    description: 'Astro.js and Tailwind CSS website for the portfolio of Martin Otis',
    image: {
        src: '#',
        alt: '#'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Resume',
            href: '/resume'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/onyudo/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/tastydecoy/'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/martin-otis-575a09b/'
        }
    ],
};

export default siteConfig;
