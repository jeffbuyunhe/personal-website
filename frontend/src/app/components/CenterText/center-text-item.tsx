import { CenterText } from "../../types"
import "./center-text.css"

export default function CenterTextItem({ text, img, imgHovered }: CenterText) {
    const backgroundMap = {
        'fullstack-developer': "bg-[url('/text-dev.png')]",
        'ui/ux-hobbyist': "bg-[url('/text-ui.png')]"
    }

    const hoverMap = {
        'fullstack-developer': "hover:bg-[url('/text-dev-hover.png')]",
        'ui/ux-hobbyist': "hover:bg-[url('/text-ui-hover.png')]"
    }

    return <p className={`center-text text-image-fade-in-animation
    ${backgroundMap[img as keyof typeof backgroundMap]} 
    ${hoverMap[imgHovered as keyof typeof hoverMap]}`}>{text}</p >
}