'use client'

import emailServices from "@/app/services/email-service";
import { EmailFormInput } from "@/app/services/types";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

export default function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<EmailFormInput>();
    const [formStatus, setFormStatus] = useState('');
    const clearStatusTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => () => {
        if (clearStatusTimeout.current) clearTimeout(clearStatusTimeout.current);
    }, []);

    function scheduleStatusClear() {
        if (clearStatusTimeout.current) clearTimeout(clearStatusTimeout.current);
        clearStatusTimeout.current = setTimeout(() => setFormStatus(''), 5000);
    }

    async function onSubmit(data: EmailFormInput) {
        reset();
        setFormStatus('Sending email...');
        const res = await emailServices.sendEmail(data);
        setFormStatus(res.success ?? res.error ?? 'Unknown error.');
        scheduleStatusClear();
    }

    return <div className="mx-auto w-[80%]">
        <form className="row-no-margin text-xl" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="col-12 md-lg:col-6 mb-4 flex justify-start">
                <input
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    aria-invalid={!!errors.name}
                    className="w-[98%] mx-3 p-2 border-gray-200 border-2 rounded-md"
                    {...register("name", { required: true, maxLength: 200 })} />
            </div>
            <div className="col-12 md-lg:col-6 mb-4 flex justify-end">
                <input
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    aria-invalid={!!errors.email}
                    className="w-[98%] mx-3 p-2 border-gray-200 border-2 rounded-md"
                    {...register("email", { required: true, maxLength: 320, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
            </div>
            <textarea
                placeholder="Message"
                rows={6}
                aria-label="Message"
                aria-invalid={!!errors.message}
                className="col-12 mx-3 p-2 border-gray-200 border-2 rounded-md"
                {...register("message", { required: true, maxLength: 5000 })} />
            <input type="submit" className="mx-3 my-4 px-6 py-2 rounded-md bg-gray-800 text-white hover:bg-black hover:cursor-pointer" />
        </form>
        <p className="xl:mx-auto text-xl pl-4 h-10" role="status" aria-live="polite">{formStatus}</p>
    </div>
}