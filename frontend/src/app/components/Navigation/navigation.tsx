'use client'

import { useState } from "react";
import { FaBars } from "react-icons/fa6"
import { NAVIGATION_DATA } from "@/app/constants"
import NavigationItem from "./navigation-item"

export default function Navigation() {
    return <>
        <DesktopNavigation />
        <MobileNavigation />
    </>
}

function DesktopNavigation() {
    return (
        <ul className="hidden md:flex my-5 mx-6">
            {NAVIGATION_DATA.map((data) => (
                <li className="mx-6 list-none" key={data.name}>
                    <NavigationItem {...data} animated />
                </li>
            ))}
        </ul>
    );
}

function MobileNavigation() {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    return (
        <div className="block md:hidden my-2 mx-2">
            <button
                className="text-3xl bg-white hover:bg-gray-100 active:bg-gray-200 p-1.5 w-full rounded-md"
                aria-label="Toggle navigation"
                aria-expanded={dropDownOpen}
                onClick={() => setDropDownOpen(!dropDownOpen)}
            >
                <FaBars />
            </button>
            <ul className={`${dropDownOpen ? 'block' : 'hidden'} bg-white rounded-md`}>
                {NAVIGATION_DATA.map((data) => (
                    <li className="hover:bg-gray-100 hover:rounded-md active:bg-gray-200 p-3" key={data.name}>
                        <NavigationItem {...data} />
                    </li>
                ))}
            </ul>
        </div>
    );
}