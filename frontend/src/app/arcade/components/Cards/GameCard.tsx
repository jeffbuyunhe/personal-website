import { GameCardData } from "@/app/arcade/types";
import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FaGithub } from "react-icons/fa6";

export default function GameCard({ text, img, available }: GameCardData) {
    return <Card shadow="md" className="m-1 grayscale-[0.5] hover:grayscale-0">
        <a href="" className="text-2xl">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="md:text-lg mx-auto">{text}</p>
            </CardHeader>
            <CardBody className="overflow-visible p-0">
                <Image
                    className="mt-2 mx-3 w-[160px] h-[80px] md:w-[280px] md:h-[140px] object-cover"
                    radius="lg"
                    alt={text}
                    src={img}
                />
            </CardBody>
        </a>
        <CardFooter>
            {available ? <p className="text-medium text-gray-600">COMING SOON</p> :
                <a href="git" className="text-2xl text-gray-600 hover:text-black"><FaGithub /></a>}
        </CardFooter>
    </Card >
}