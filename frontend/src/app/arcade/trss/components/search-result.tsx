import { Result } from "@/app/arcade/trss/types";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useRouter } from "next/navigation";

export default function SearchResult({ availability, img, name, price, title, error, url }: Result) {
    const router = useRouter();

    return (
        <div className="m-3 w-[900px]">
            {error ? (
                <Card
                    isBlurred
                    className="border-none w-full"
                    shadow="sm"
                >
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-4">
                                <Image
                                    className="w-[240px] h-[240px] object-cover"
                                    alt="Record Not Found"
                                    shadow='md'
                                />
                            </div>
                            <div className="flex flex-col col-span-6 md:col-span-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0">
                                        <h3 className="text-md md:text-lg mb-2 mx-2">{name}</h3>
                                        <p className="text-lg md:text-xl mb-2 mx-2">{error}</p>
                                        <div className="flex items-center mx-2">
                                            <Button size="md" variant="bordered"
                                                className="bg-gradient-to-tr from-purple-500 to-orange-500 text-white shadow-lg border-white"
                                                onPress={() => { router.push(url) }}>View All</Button>
                                        </div>
                                    </div>
                                </div>
                                <Button size="md" variant="bordered"
                                    className="bg-gradient-to-tr from-purple-500 to-orange-500 text-white shadow-lg border-white"
                                    onPress={() => { router.push(url) }}>View All</Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            ) : (
                <Card
                    isBlurred
                    className="border-none max-w-[900px]"
                    shadow="sm"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center filter blur-3xl saturate-60 z-0"
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="absolute inset-0 bg-white/50 z-0"></div>
                    </div>
                    <CardBody>
                        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                            <div className="relative col-span-6 md:col-span-4">
                                <Image
                                    className="w-[240px] h-[240px] object-cover"
                                    src={img}
                                    alt={title}
                                    shadow='md'
                                />
                            </div>
                            <div className="flex flex-col col-span-6 md:col-span-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-0">
                                        <h1 className="text-xl md:text-2xl my-2 mx-2">{title}</h1>
                                        <h3 className="text-md md:text-lg mb-2 mx-2">{name}</h3>
                                        <p className="text-lg md:text-xl mb-2 mx-2">{availability}</p>
                                        <div className="flex items-center mx-2">
                                            <h1 className="text-lg md:text-xl font-semibold mr-5">{price}</h1>
                                            <Button size="md" variant="bordered"
                                                className="bg-gradient-to-tr from-purple-500 to-orange-500 text-white shadow-lg border-white"
                                                onPress={() => { router.push(url) }}>View All</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            )
            }
        </div >
    );
}