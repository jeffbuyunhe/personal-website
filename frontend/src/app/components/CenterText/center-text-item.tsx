import { CenterText } from "../../types"
import "./center-text.css"

export default function CenterTextItem({ text, img, imgHovered }: CenterText) {
    const backgroundMap = {
        'fullstack-developer': "bg-[url('/text-dev.png')]",
        'ui/ux-hobbyist': "bg-[url('/text-ui.png')]"
    }

    return <p className={`center-text text-image-fade-in-animation
    ${backgroundMap[img as keyof typeof backgroundMap]}`}>{text}</p >
}