import { CardData } from "@/app/types";
import { Card, CardFooter, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function SkillCard({ text, img }: CardData) {
    return <Card shadow="sm" className="m-1">
        <CardBody className="overflow-visible p-0">
            <Image
                className="object-contain w-[100px] h-[80px] md:w-[140px] md:h-[140px] scale-80"
                radius="lg"
                alt={text}
                src={img}
            />
        </CardBody>
        <CardFooter>
            <p className="md:text-lg">{text}</p>
        </CardFooter>
    </Card>
}