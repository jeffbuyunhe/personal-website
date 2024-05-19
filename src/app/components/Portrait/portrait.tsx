'use client'

import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import "./portrait.css"

export default function Portrait() {
    return <>
        <Image
            className="rounded-[50%] border-gray-300 border-4 ml-6 my-8 fade-in-animation"
            src="/portrait.png"
            width={450}
            height={450}
            alt="Picture of Jeff He"
            priority={true} />
        <div className=" flex w-[450px] m-6 justify-center text-3xl">
            <p className="text-orange-500">Jeff He</p>
            <span className="text-gray-300">
                <Typewriter
                    words={[', Chess Connoisseur', ', Developer Devotee', ', Horology Hobbyist', ', Technology Tinkerer', ', Vinyl Votary']}
                    loop={0}
                    typeSpeed={100}
                    deleteSpeed={100}
                />
            </span>
        </div>
    </>
}