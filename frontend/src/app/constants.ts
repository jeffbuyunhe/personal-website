import { CardData, CenterText, Navigation } from "./types";

export const NAVIGATION_DATA: Navigation[] = [
    { name: 'Home', link: '/', active: true },
    { name: 'Arcade', link: '/arcade', active: true }];

export const CENTER_TEXT: CenterText[] = [
    { text: 'FULLSTACK DEVELOPER', img: 'fullstack-developer', imgHovered: 'fullstack-developer' },
    { text: 'QA ENGINEER', img: 'qa-engineer', imgHovered: 'qa-engineer' },
    { text: 'UI/UX HOBBYIST', img: 'ui/ux-hobbyist', imgHovered: 'ui/ux-hobbyist' },
];

export const GITHUB_LINK: string = "https://github.com/jeffbuyunhe";

export const LINKEDIN_LINK: string = "https://www.linkedin.com/in/jeff-he-722754282/";

export const REPO_LINK: string = "https://github.com/jeffbuyunhe/personal-website";

export const ABOUT_TEXT: string =
    "I'm a fullstack and automation developer with on software quality. " +
    "For me, theres something so enjoyable about bringing a robust test base to life with an automation framework. " +
    "In my spare time, I like to practice the Olympic lifts, play Chess, and listen to records. ";

export const SKILL_DATA: CardData[] = [
    { text: 'Node.js', img: '/skills/nodejs-icon.svg' },
    { text: 'React', img: '/skills/react-icon.svg' },
    { text: 'Next.js', img: '/skills/nextjs-icon.svg' },
    { text: 'Angular', img: '/skills/angular-icon.svg' },
    { text: 'Tailwind', img: '/skills/tailwindcss-icon.svg' },
    { text: 'Express', img: '/skills/express-icon.svg' },
    { text: 'MySQL', img: '/skills/mysql-icon.svg' },
    { text: 'Java', img: '/skills/java-icon.svg' },
    { text: 'Git', img: '/skills/git-icon.svg' },
    { text: 'Docker', img: '/skills/docker-icon.svg' },
    { text: 'Jira', img: '/skills/jira-icon.svg' },
    { text: 'OpenAI', img: '/skills/openai-icon.svg' },
    { text: 'Photoshop', img: '/skills/photoshop-icon.svg' },
    { text: 'Figma', img: 'skills/figma-icon.svg' },
    { text: 'TestRail', img: '/skills/testrail-icon.svg' },
    { text: 'Puppeteer', img: '/skills/puppeteer-icon.svg' },
];