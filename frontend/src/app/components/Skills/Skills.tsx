import { SKILL_DATA } from "@/app/constants";
import SkillCard from "./SkillCard";

export default function Skills() {
    return <div className="row-no-margin items-center my-24">
        <h3 className="text-4xl mx-auto mb-6 text-orange-500">My Skills</h3>
        <div className="content-margin col-12 grid grid-cols-[repeat(auto-fit,minmax(100px,max-content))] 
        md:grid-cols-[repeat(auto-fit,minmax(140px,max-content))] justify-center">
            {SKILL_DATA.map((data) => <SkillCard {...data} />)}
        </div>
    </div>
}