'use client'

import { FaBars } from "react-icons/fa6"
import { NAVIGATION_DATA } from "../../constants"
import { DesktopNavigationItem, MobileNavigationItem } from "./navigation-item"
import { useState } from "react";

export function DesktopNavigation() {
    return <ul className="hidden md:flex mt-8 mb-4 mx-8">{NAVIGATION_DATA.map((data) =>
        <div className="mx-8" key={data.name}>
            <DesktopNavigationItem {...data} />
        </div>
    )}
    </ul>
}

export function MobileNavigation() {
    const [dropDownOpen, setDropDownOpen] = useState(false);

    return <div className="block md:hidden my-2 mx-2">
        <button className="text-3xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 p-1.5 w-full rounded-md mb-2"
            onClick={() => setDropDownOpen(!dropDownOpen)}>
            <FaBars /></button>
        <ul className={`${dropDownOpen ? 'block' : 'hidden'} bg-gray-100 rounded-md`}>{NAVIGATION_DATA.map((data) =>
            <li className=" hover:bg-gray-200 hover:rounded-md active:bg-gray-300 p-3" key={data.name}>
                <MobileNavigationItem {...data} />
            </li>
        )}
        </ul>
    </div >
}