import { ENDPOINTS } from "./endpoints";
import { FormInput } from "@/app/components/Contact/form";

const sendEmail = (data: FormInput) => {
    return fetch(ENDPOINTS.EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
    }).then((res) => res.json())
        .catch(() => { return { error: "Could not reach server, message could not be sent." } });
};

const emailServices = { sendEmail };

export default emailServices;