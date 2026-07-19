import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ title, children, className = "my-24" }: SectionProps) {
    return (
        <section className={`row-no-margin items-center h-constraint ${className}`}>
            <h3 className="text-4xl mx-auto mb-6 text-orange-500">{title}</h3>
            {children}
        </section>
    );
}
