'use client'

import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

export default function Portrait() {
    return <>
        <Image
            className="rounded-[50%] border-pink-800 border-4 ml-6 my-8"
            src="/portrait.png"
            width={450}
            height={450}
            alt="Picture of Jeff He"
            priority={true} />
        <div className=" flex w-[450px] m-6 justify-center text-3xl">
            <p className="font-semibold">Jeff He</p>
            <Typewriter
                words={[', Tech Enthusiast', ', Vinyl Junkie', ', Watch Collector', ', Chess Player']}
                loop={0}
                typeSpeed={100}
                deleteSpeed={100}
            />
        </div>
    </>
}