'use client';

import { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { Result } from "@/app/arcade/trss/types";
import SearchResult from "./search-result";
import trssService from "@/app/services/games/trss-service";
import { useRouter, useSearchParams } from "next/navigation";
import { getSearchFromSession, saveSearchToSession } from "../utils/search-storage";

export interface FormInput {
    query: string;
}

export default function Search() {
    const { register, handleSubmit, setValue } = useForm<FormInput>();
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Result[]>([]);

    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (!query) return;

        setValue("query", query);

        const cachedSearchResults = getSearchFromSession();

        if (cachedSearchResults && cachedSearchResults.query === query) {
            setResults(cachedSearchResults.results);
        } else {
            setLoading(true);
            trssService.searchRecord(query).then((res) => {
                setLoading(false);
                setResults(res);
                saveSearchToSession(query, res);
            });
        }
    }, [query, setValue]);

    function onSubmit(data: FormInput) {
        const queryParam = data.query.trim();
        const currentQuery = searchParams.get("query");

        if (!queryParam) return;

        /* Search again even if query is the same */
        if (queryParam === currentQuery) {
            setLoading(true);
            trssService.searchRecord(query).then((res) => {
                setLoading(false);
                setResults(res);
                saveSearchToSession(query, res);
            });
        } else {
            router.push(`?query=${encodeURIComponent(queryParam)}`);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center h-constraint my-3">
                    <Input
                        className="ml-4 mr-2"
                        placeholder="Search for a Record"
                        startContent={<BiSearch />}
                        size="lg"
                        isClearable
                        {...register("query", { required: true })}
                    />
                    <Button
                        className="ml-2 mr-4 bg-gradient-to-tr from-yellow-500 to-orange-500 text-white shadow-lg"
                        isLoading={loading}
                        radius="md"
                        type="submit"
                        size="md"
                    >
                        Search
                    </Button>
                </div>
            </form>
            <div className="h-[calc(100vh-80px)] overflow-y-auto px-4 flex flex-col items-center">
                {results.map((result) => (
                    <SearchResult key={result.name} {...result} />
                ))}
            </div>
        </>
    );
}
