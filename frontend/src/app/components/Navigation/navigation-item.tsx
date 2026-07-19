import Link from "next/link";
import { Navigation } from "@/app/types";

interface NavigationItemProps extends Navigation {
    animated?: boolean;
}

export default function NavigationItem({ name, link, active, animated }: NavigationItemProps) {
    if (!active) {
        return <p className="text-xl text-gray-400">{name}</p>;
    }
    return (
        <Link href={link} className="text-xl">
            {animated ? <span className="hover-underline-animation">{name}</span> : name}
        </Link>
    );
}