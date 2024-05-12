'use client'

import { FaBars } from "react-icons/fa6"
import { NAVIGATION_DATA } from "../../constants"
import { DesktopNavigationItem, MobileNavigationItem } from "./navigation-item"
import { useState } from "react";

export default function Navigation() {
    return <>
        <DesktopNavigation />
        <MobileNavigation />
    </>
}

export function DesktopNavigation() {
    return <ul className="hidden md:flex my-6 mx-8">{NAVIGATION_DATA.map((data) =>
        <div className="mx-8" key={data.name}>
            <DesktopNavigationItem {...data} />
        </div>
    )}
    </ul>
}

export function MobileNavigation() {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    return <div className="block md:hidden my-2 mx-2">
        <button className="text-3xl bg-white hover:bg-gray-100 active:bg-gray-200 p-1.5 w-full rounded-md mb-2"
            onClick={() => setDropDownOpen(!dropDownOpen)}>
            <FaBars /></button>
        <ul className={`${dropDownOpen ? 'block' : 'hidden'} bg-white rounded-md`}>{NAVIGATION_DATA.map((data) =>
            <li className=" hover:bg-gray-100 hover:rounded-md active:bg-gray-200 p-3" key={data.name}>
                <MobileNavigationItem {...data} />
            </li>
        )}
        </ul>
    </div >
}