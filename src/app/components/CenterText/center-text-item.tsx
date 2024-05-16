import { CenterText } from "../../types"
import "./center-text.css"

export default function CenterTextItem({ text, img, imgHovered }: CenterText) {
    const backgroundMap = {
        'fullstack-developer': "bg-[url('/text-dev.png')]",
        'ui/ux-hobbyist': "bg-[url('/text-ui.png')]"
    }

    const hoverMap = {
        'fullstack-developer': "hover:bg-[url(https://upload.wikimedia.org/wikipedia/en/1/14/Bj%C3%B6rk_-_Vespertine_album_cover.png)]",
        'ui/ux-hobbyist': "hover:bg-[url(https://upload.wikimedia.org/wikipedia/en/1/14/Bj%C3%B6rk_-_Vespertine_album_cover.png)]"
    }

    return <p className={`center-text 
    ${backgroundMap[img as keyof typeof backgroundMap]} 
    ${hoverMap[imgHovered as keyof typeof hoverMap]}`}>{text}</p >
}