import { CARD_DATA } from "@/app/arcade/constants";
import { GameCard, ComingSoonGameCard } from "./GameCard";

export default function Games() {
    return <div className="row-no-margin items-center my-8 md:my-16 h-constraint">
        <h3 className="text-4xl sm:text-5xl md:text-6xl mx-auto mb-6 text-orange-500">Games/Tools</h3>
        <p className="col-12 content-margin text-lg sm:text-xl text-gray-500 leading-8 mb-8 text-center m-1">Various web-based games and tools I've worked on,
            no need to download or install.</p>
        <div className="content-margin justify-center flex flex-wrap w-[100vw]">
            {CARD_DATA.map((data) => data.comingSoon ? <ComingSoonGameCard {...data} key={data.text} /> : <GameCard {...data} key={data.text} />)}
        </div>
    </div>
}