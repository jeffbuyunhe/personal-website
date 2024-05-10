import Image from "next/image"

export default function Portrait() {
    return <Image
        className="rounded-[50%] border-pink-800 border-4 ml-6"
        src="/portrait.png"
        width={500}
        height={500}
        alt="Picture of Jeff He" />
}