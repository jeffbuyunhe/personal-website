import { ENDPOINTS } from "./endpoints";
import { FormInput } from "@/app/components/Contact/form";

const sendEmail = (data: FormInput) => {

    console.log(ENDPOINTS.EMAIL_URL);
    return fetch(ENDPOINTS.EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message }),
    }).then((res) => res.json());
};

const emailServices = { sendEmail };

export default emailServices;