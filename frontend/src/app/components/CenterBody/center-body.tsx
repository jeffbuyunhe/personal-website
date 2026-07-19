import CenterText from "@/app/components/CenterText/center-text";
import Portrait from "@/app/components/Portrait/portrait";

export default function CenterBody() {
    return (
        <div className="relative flex flex-wrap items-center md-lg:h-[calc(100vh-68px)] py-20 md-lg:py-0">
            <video autoPlay muted loop playsInline className="-z-10 object-cover absolute h-full w-full">
                <source src="/center-background.mp4" type="video/mp4" />
            </video>
            {/* On desktop text is on the left, portrait on the right; on mobile portrait comes first. */}
            <div className="order-2 md-lg:order-1 w-full md-lg:w-1/2 m-auto">
                <CenterText />
            </div>
            <div className="order-1 md-lg:order-2 w-full md-lg:w-1/2 m-auto">
                <Portrait />
            </div>
        </div>
    );
}

