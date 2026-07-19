import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6"
import Link from "next/link"
import Section from "@/app/components/shared/Section"
import { GITHUB_LINK, LINKEDIN_LINK } from "@/app/constants"
import "./about.css"

export default function About() {
    return <Section title="About Me">
        <p className="col-12 content-margin text-xl text-gray-500 leading-8 mb-8">I&apos;m a fullstack and automation developer with a focus on web technologies, and software quality. For me, theres
            something so enjoyable about creating my own designs, and then bringing those designs to life with code. In my spare time, I like to play and study Chess,
            play records and practice the Olympic lifts.
        </p>
        <div className="flex content-margin">
            <a href={GITHUB_LINK} className="about-button about-button-sm hover:text-black" aria-label="GitHub"><FaGithub /></a>
            <a href={LINKEDIN_LINK} className="about-button about-button-sm hover:text-blue-900" aria-label="LinkedIn"><FaLinkedin /></a>
            <Link href="Resume.pdf" className="about-button about-button-lg hover:text-orange-500" prefetch={false}>
                <button className="flex">Resume<FaDownload className="mx-2 m-auto" /></button>
            </Link>
        </div>
    </Section>
}