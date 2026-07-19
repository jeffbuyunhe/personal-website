import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Section from "./Section";

describe("Section", () => {
    it("renders the title as a heading", () => {
        render(
            <Section title="About Me">
                <p>Body</p>
            </Section>,
        );
        expect(screen.getByRole("heading", { name: "About Me" })).toBeInTheDocument();
        expect(screen.getByText("Body")).toBeInTheDocument();
    });

    it("applies the default spacing class when none is provided", () => {
        const { container } = render(
            <Section title="Skills">
                <span>x</span>
            </Section>,
        );
        expect(container.querySelector("section")).toHaveClass("my-24");
    });

    it("overrides spacing via className", () => {
        const { container } = render(
            <Section title="Contact" className="my-14">
                <span>x</span>
            </Section>,
        );
        expect(container.querySelector("section")).toHaveClass("my-14");
        expect(container.querySelector("section")).not.toHaveClass("my-24");
    });
});
