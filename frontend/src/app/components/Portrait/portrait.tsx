'use client'

import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

export default function Portrait() {
    return <>
        <div className="relative w-[260px] sm:w-[450px] aspect-square mx-auto md-lg:mx-6 my-6">
            <Image
                className="rounded-full border-gray-300 border-4 object-cover"
                src="/portrait.jpg"
                fill
                sizes="(max-width: 640px) 260px, 450px"
                alt="Picture of Jeff He"
                priority />
        </div>
        <div className="w-[260px] sm:w-[450px] m-6 text-center text-[1.35rem] tiny:text-[1.75rem]">
            <p className="text-orange-500 inline">Jeff He</p>
            <span className="text-gray-300 inline">
                <Typewriter
                    words={[', Developer Devotee', ', Horology Hobbyist', ', Tech Tinkerer', ', UX Uplifter', ', Vinyl Votary']}
                    loop={0}
                    typeSpeed={100}
                    deleteSpeed={100}
                />
            </span>
        </div>
    </>
}