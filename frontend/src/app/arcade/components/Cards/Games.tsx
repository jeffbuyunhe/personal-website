import { CARD_DATA } from "@/app/arcade/constants";
import GameCard from "./GameCard";

export default function Games() {
    return <div className="row-no-margin items-center my-16 h-constraint">
        <h3 className="text-6xl mx-auto mb-6 text-orange-500">Games/Tools</h3>
        <p className="col-12 content-margin text-xl text-gray-500 leading-8 mb-8 text-center m-1">Various web-based games and tools I've worked on,
            no need to download or install.</p>
        <div className="content-margin col-12 grid grid-cols-[repeat(auto-fit,minmax(100px,max-content))] 
        md:grid-cols-[repeat(auto-fit,minmax(140px,max-content))] justify-center">
            {CARD_DATA.map((data) => <GameCard {...data} key={data.text} />)}
        </div>
    </div>
}