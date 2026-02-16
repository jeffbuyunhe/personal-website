'use client'

import emailServices from "@/app/services/email-service";
import { useForm } from "react-hook-form";
import { useState } from "react";

export interface FormInput {
    name: String,
    email: String,
    message: String
}

export default function Form() {
    const { register, handleSubmit, reset } = useForm<FormInput>();
    const [formSuccess, setFormSuccess] = useState('');

    function onSubmit(data: FormInput) {
        reset();
        setFormSuccess('Sending email...');
        const res = emailServices.sendEmail(data);
        res.then((res) => {
            if (res.success) {
                setFormSuccess(res.success);
            }
            else {
                setFormSuccess(res.error);
            }
            setTimeout(() => { setFormSuccess('') }, 5000);
        })
    }

    return <div className="content-margin w-full">
        <form className="row-no-margin text-xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12 md-lg:col-6 mb-4 flex justify-start">
                <input type="text" placeholder="Name" className="w-[98%] p-2 border-gray-200 border-2 rounded-md" {...register("name", { required: true })} />
            </div>
            <div className="col-12 md-lg:col-6 mb-4 flex justify-start md-lg:justify-end">
                <input type="email" placeholder="Email" className="w-[98%] p-2 border-gray-200 border-2 rounded-md" {...register("email", { required: true })} />
            </div>
            <textarea placeholder="Message" rows={6} className="col-12 p-2 border-gray-200 border-2 rounded-md" {...register("message", { required: true })} />
            <input type="submit" className="mx-3 my-4 px-6 py-2 rounded-md bg-gray-800 text-white hover:bg-black hover:cursor-pointer" />
        </form>
        <p className="xl:mx-auto text-xl pl-4 h-10">{formSuccess}</p>
    </div>
}