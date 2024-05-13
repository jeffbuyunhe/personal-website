import CenterText from "../CenterText/center-text";
import Portrait from "../Portrait/portrait";

export default function CenterBody() {
    return <>
        <DesktopCenterBody />
        <MobileCenterBody />
    </>
}

export function DesktopCenterBody() {
    return <div className="hidden md-lg:row items-center relative h-[100vh]">
        <video autoPlay muted loop className="-z-10 object-cover absolute min-h-full min-w-full">
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
    return <div className="row md-lg:hidden items-center relative">
        <video autoPlay muted loop className="-z-10 object-cover absolute min-h-full min-w-full">
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

