import { Result } from "@/app/arcade/trss/types";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

export default function SearchResult({ availability, img, name, price, title, error, url, recordUrl }: Result) {
    const hasError = !!error;

    return (
        <div className="m-3 w-[900px]">
            <Card isBlurred className="border-none max-w-[900px] w-full" shadow="sm">
                {img && !hasError && (
                    <div
                        className="absolute inset-0 bg-cover bg-center filter blur-3xl saturate-60 z-0"
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="absolute inset-0 bg-white/50 z-0"></div>
                    </div>
                )}
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                className="w-[240px] h-[240px] object-cover"
                                src={img}
                                alt={title ?? "Record Not Found"}
                                shadow="md"
                            />
                        </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0 w-full">
                                    {title && recordUrl && (
                                        <a
                                            href={recordUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl md:text-2xl my-2 mx-2 flex hover:underline"
                                        >
                                            {title} &#10548;
                                        </a>
                                    )}
                                    <h3 className="text-md md:text-lg mb-2 mx-2">{name}</h3>
                                    {hasError ? (
                                        <p className="text-lg md:text-xl mb-2 mx-2">{error}</p>
                                    ) : (
                                        <p className="text-lg md:text-xl mb-2 mx-2">{availability}</p>
                                    )}
                                    <div className="flex items-center mx-2">
                                        {price && (
                                            <h1 className="text-lg md:text-xl font-semibold mr-5">{price}</h1>
                                        )}
                                        <div className="flex ml-auto">
                                            <Button
                                                as="a"
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                size="md"
                                                variant="flat"
                                                className="ml-auto text-lg md:text-xl text-blue-950 bg-white/30"
                                            >
                                                View All
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}