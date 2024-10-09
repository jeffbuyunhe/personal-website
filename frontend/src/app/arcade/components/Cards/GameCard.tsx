'use client';

import { GameCardData } from "@/app/arcade/types";
import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { navigateArcade } from "../../utils";

export function GameCard({ text, img, link, gitLink }: GameCardData) {
    return <Card shadow="md" className="m-1 grayscale-[0.3] hover:grayscale-0 hover:scale-[0.99] min-w-[248px] sm:min-w-[320px] h-[240px]" isPressable
        onPress={() => { navigateArcade(link) }}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="md:text-lg mx-auto">{text}</p>
        </CardHeader>
        <CardBody className="overflow-hidden justify-center px-3 py-1">
            <Image
                className="w-[248px] sm:w-[320px] h-[162px] object-cover"
                radius="lg"
                alt={text}
                src={img} />
        </CardBody>
        <CardFooter>
            <Link href={gitLink} className="text-2xl text-gray-600 hover:text-black"><FaGithub /></Link>
        </CardFooter>
    </Card >
}

export function ComingSoonGameCard({ text, img }: GameCardData) {
    return <Card shadow="md" className="m-1 grayscale-[0.8] bg-gray-100 min-w-[248px] sm:min-w-[320px] h-[240px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="md:text-lg mx-auto text-gray-600">{text}</p>
        </CardHeader>
        <CardBody className="overflow-hidden justify-center px-3 py-1">
            <Image
                className="w-[248px] sm:w-[320px] h-[162px] object-cover"
                radius="lg"
                alt={text}
                src={img} />
        </CardBody>
        <CardFooter>
            <p className="text-medium text-gray-600">COMING SOON</p>
        </CardFooter>
    </Card >
}