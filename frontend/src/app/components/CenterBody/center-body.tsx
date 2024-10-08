import CenterText from "@/app/components/CenterText/center-text";
import Portrait from "@/app/components/Portrait/portrait";

export default function CenterBody() {
    return <>
        <DesktopCenterBody />
        <MobileCenterBody />
    </>
}

export function DesktopCenterBody() {
    return <div className="hidden md-lg:flex items-center relative h-[calc(100vh-68px)]">
        <video autoPlay muted loop className="-z-10 object-cover absolute h-full w-full">
            <source src="center-background.mp4" type="video/mp4" />
        </video>
        <div className="col-6 m-auto">
            <CenterText />
        </div>
        <div className="col-6 m-auto">
            <Portrait />
        </div>
    </div>
}

export function MobileCenterBody() {
    return <div className="row md-lg:hidden items-center relative py-20">
        <video autoPlay muted loop className="-z-10 object-cover absolute h-full w-full">
            <source src="center-background.mp4" type="video/mp4" />
        </video>
        <div className="m-auto">
            <Portrait />
        </div>
        <div className="m-auto">
            <CenterText />
        </div>
    </div>
}

