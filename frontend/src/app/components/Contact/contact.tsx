import Form from "./form";
import { REPO_LINK } from "@/app/constants";

export default function Contact() {
    return <div className="row-no-margin my-14 h-constraint items-center">
        <h3 className="text-4xl mx-auto mb-6 text-orange-500">Contact Info</h3>
        <p className="content-margin mb-8 text-xl text-gray-500 leading-8"> If you've noticed an issue with my website,
            feel free to
            <a href={REPO_LINK}>
                <span className="text-blue-700 underline hover:text-blue-800"> submit a pull request
                </span>
            </a>
            . For other inquiries, feel free to contact me with the form below or email me directly at
            <a href="mailto:jeffbuyunhe@hotmail.com">
                <span className="text-blue-700 underline hover:text-blue-800"> jeffbuyunhe@hotmail.com
                </span>
            </a>
        </p>
        <Form />
    </div>
}