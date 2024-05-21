'use client'

import { useForm } from "react-hook-form";

interface FormInput {
    name: String,
    email: String,
    message: String
}

export default function Form() {
    const { register, handleSubmit } = useForm<FormInput>();

    function onSubmit(data: FormInput) {
        console.log(data);
    }

    return <form className="row-no-margin content-margin-lg text-xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 md-lg:col-6 mb-4 flex justify-start">
            <input type="text" placeholder="Name" className="w-[98%] mx-3 p-2 border-gray-200 border-2 rounded-md" {...register("name", { required: true })} />
        </div>
        <div className="col-12 md-lg:col-6 mb-4 flex justify-end">
            <input type="email" placeholder="Email" className="w-[98%] mx-3 p-2 border-gray-200 border-2 rounded-md" {...register("email", { required: true })} />
        </div>
        <textarea placeholder="Message" rows={6} className="col-12 mx-3 p-2 border-gray-200 border-2 rounded-md" {...register("message", { required: true })} />
        <input type="submit" className="mx-3 my-4 px-6 py-2 rounded-md bg-gray-800 text-white hover:bg-black hover:cursor-pointer" />
    </form>
}