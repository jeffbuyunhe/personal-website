import Link from "next/link";
import { Navigation } from "../../types";

export function DesktopNavigationItem({ name, link }: Navigation) {
    return <Link href={link} className="text-2xl">
        <span className="hover-underline-animation">
            {name}
        </span>
    </Link>
}

export function MobileNavigationItem({ name, link }: Navigation) {
    return <Link href={link} className="text-xl">
        {name}
    </Link>
}