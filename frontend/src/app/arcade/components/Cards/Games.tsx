import { CARD_DATA } from "@/app/arcade/constants";
import Section from "@/app/components/shared/Section";
import { GameCard, ComingSoonGameCard } from "./GameCard";

export default function Games() {
    return <Section title="Games/Tools" className="my-8 md:my-16">
        <p className="col-12 content-margin text-lg sm:text-xl text-gray-500 leading-8 mb-8 text-center m-1">Various web-based games and tools I&apos;ve worked on,
            no need to download or install.</p>
        <div className="content-margin justify-center flex flex-wrap w-[100vw]">
            {CARD_DATA.map((data) => data.comingSoon ? <ComingSoonGameCard {...data} key={data.text} /> : <GameCard {...data} key={data.text} />)}
        </div>
    </Section>
}