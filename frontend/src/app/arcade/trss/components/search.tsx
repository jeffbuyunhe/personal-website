"use client";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import trssService from "@/app/services/games/trss-service";

export interface FormInput {
    query: string
}

export default function Search() {
    const { register, handleSubmit } = useForm<FormInput>();
    const [loading, setLoading] = useState(false);

    function onSubmit(data: FormInput) {
        setLoading(true);
        const res = trssService.searchRecord(data.query);
        res.then((res) => {
            setLoading(false);
            console.log(res); //TODO: Change to set display to fetched records
        })
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center h-constraint" >
            <Input
                className="ml-4 mr-2"
                placeholder="Search for a Record"
                startContent={<BiSearch />}
                size="lg"
                isClearable
                {...register("query", { required: true })}
            />
            <Button
                className="ml-2 mr-4 bg-gradient-to-tr from-pink-500 to-orange-500 text-white shadow-lg"
                isLoading={loading}
                radius="md"
                type="submit"
                size="md"
            >
                Search
            </Button>
        </div>
    </form >
}