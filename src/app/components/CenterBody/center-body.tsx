import CenterText from "../CenterText/center-text";
import Portrait from "../Portrait/portrait";

export default function CenterBody() {
    return <>
        <DesktopCenterBody />
        <MobileCenterBody />
    </>
}

export function DesktopCenterBody() {
    return <div className="hidden md-lg:row items-center">
        <div className="col-6 m-auto">
            <CenterText />
        </div>
        <div className="col-6 m-auto">
            <Portrait />
        </div>
    </div>
}

export function MobileCenterBody() {
    return <div className="row md-lg:hidden items-center">
        <div className="m-auto">
            <Portrait />
        </div>
        <div className="m-auto">
            <CenterText />
        </div>
    </div>
}

