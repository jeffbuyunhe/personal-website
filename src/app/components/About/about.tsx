import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6"
import { GITHUB_LINK, LINKEDIN_LINK } from "@/app/constants"
import "./about.css"
import Link from "next/link"

export default function About() {
    return <div className="row-no-margin my-24 items-center">
        <h3 className="text-4xl mx-auto mb-6 text-orange-500">About Me</h3>
        <p className="col-12 mx-16 md-lg:mx-40 2xl:mx-64 text-xl text-gray-500 leading-8 mb-8">I'm a developer with a focus on web technologies, with a speciality in frontend development. For me, theres
            something so enjoyable about creating my own designs, and then bringing those designs to life with code. In my spare time, I like to play and study Chess,
            play records and take hikes.
        </p>
        <div className="flex mx-16 md-lg:mx-40 2xl:mx-64">
            <a href={GITHUB_LINK} className="about-button about-button-sm hover:text-black"><FaGithub /></a>
            <a href={LINKEDIN_LINK} className="about-button about-button-sm hover:text-blue-900"><FaLinkedin /></a>
            <Link href="Resume.pdf" className="about-button about-button-lg hover:text-black"><button className="flex">Resume<FaDownload className="mx-2 m-auto" /></button></Link>
        </div>
    </div >
}