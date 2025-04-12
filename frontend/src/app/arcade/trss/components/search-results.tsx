import { Result } from "@/app/arcade/trss/types";

export default function SearchResult({ availability, img, name, price, title, error }: Result) {
    return (
        <div>
            {error ? (
                <div>
                    <div>{name}</div>
                    <div>{error}</div>
                </div>
            ) : (
                <div>
                    <div>{name}</div>
                    <div>{price}</div>
                    <div>{img}</div>
                    <div>{title}</div>
                    <div>{availability}</div>
                    <br />
                </div>
            )}
        </div>
    );
}