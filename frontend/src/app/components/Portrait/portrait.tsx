'use client'

import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

export default function Portrait() {
    return <>
        <Image
            className="rounded-[50%] border-gray-300 border-4 mx-auto md-lg:mx-6 my-6 fade-in-animation w-[70%] h-[70%] sm:w-[450px] sm:h-[450px]"
            src="/portrait.jpg"
            width={450}
            height={450}
            alt="Picture of Jeff He"
            priority={true} />
        <div className=" flex w-[70%px] sm:w-[450px] m-6 justify-center text-[1.35rem] tiny:text-[1.75rem]">
            <p className="text-orange-500">Jeff He</p>
            <span className="text-gray-300">
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