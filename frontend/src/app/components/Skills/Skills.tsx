import Section from "@/app/components/shared/Section";
import { SKILL_DATA } from "@/app/constants";
import SkillCard from "./SkillCard";

export default function Skills() {
    return <Section title="My Skills">
        <div className="content-margin col-12 grid grid-cols-[repeat(auto-fit,minmax(100px,max-content))] 
        md:grid-cols-[repeat(auto-fit,minmax(140px,max-content))] justify-center">
            {SKILL_DATA.map((data) => <SkillCard {...data} key={data.text} />)}
        </div>
    </Section>
}