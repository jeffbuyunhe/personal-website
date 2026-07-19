import Form from "./form";
import Section from "@/app/components/shared/Section";
import { CONTACT_EMAIL, REPO_LINK } from "@/app/constants";

export default function Contact() {
    return <Section title="Contact Info" className="my-14">
        <p className="content-margin mb-8 text-xl text-gray-500 leading-8">
            If you&apos;ve noticed an issue with my website, feel free to
            <a href={REPO_LINK}>
                <span className="text-blue-700 underline hover:text-blue-800"> submit a pull request</span>
            </a>
            . For other inquiries, feel free to contact me with the form below or email me directly at
            <a href={`mailto:${CONTACT_EMAIL}`}>
                <span className="text-blue-700 underline hover:text-blue-800"> {CONTACT_EMAIL}</span>
            </a>
        </p>
        <Form />
    </Section>
}