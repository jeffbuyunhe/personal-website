import { CENTER_TEXT } from "@/app/constants"
import CenterTextItem from "./center-text-item"
import "./center-text.css"

export default function CenterText() {
    return <>{CENTER_TEXT.map((text) => <CenterTextItem key={text.text} {...text} />)}</>
}