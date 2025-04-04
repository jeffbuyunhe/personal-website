import Link from "next/link";
import { Navigation } from "@/app/types";

export function DesktopNavigationItem({ name, link, active }: Navigation) {

    if (active) {
        return <Link href={link} className="text-xl">
            <span className="hover-underline-animation">
                {name}
            </span>
        </Link>
    }
    return <p className="text-xl text-gray-400">
        {name}
    </p>
}

export function MobileNavigationItem({ name, link, active }: Navigation) {
    if (active) {
        return <Link href={link} className="text-xl">
            {name}
        </Link>
    }
    return <p className="text-xl text-gray-400">
        {name}
    </p>
}