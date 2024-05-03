import Link from "next/link";
import { NavigationItem } from "../types";

export function DesktopNavigationItem({ name, link }: NavigationItem) {
    return <Link href={link} className="text-2xl">
        <span className="hover-underline-animation">
            {name}
        </span>
    </Link>
}

export function MobileNavigationItem({ name, link }: NavigationItem) {
    return <Link href={link} className="text-xl">
        {name}
    </Link>
}