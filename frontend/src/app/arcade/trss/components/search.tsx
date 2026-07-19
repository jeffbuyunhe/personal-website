'use client';

import { useCallback, useEffect } from "react";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { Result } from "@/app/arcade/trss/types";
import SearchResult from "./search-result";
import trssService from "@/app/services/games/trss-service";
import { useRouter, useSearchParams } from "next/navigation";
import { getSearchFromSession, saveSearchToSession } from "../utils/search-storage";

interface FormInput {
    query: string;
}

export default function Search() {
    const { register, handleSubmit, setValue } = useForm<FormInput>();
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<Result[]>([]);

    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") ?? "";

    const runSearch = useCallback((q: string) => {
        setLoading(true);
        trssService.searchRecord(q).then((res) => {
            setLoading(false);
            setResults(res);
            saveSearchToSession(q, res);
        });
    }, []);

    useEffect(() => {
        if (!query) return;

        setValue("query", query);

        const cached = getSearchFromSession();
        if (cached?.query === query) {
            setResults(cached.results);
        } else {
            runSearch(query);
        }
    }, [query, setValue, runSearch]);

    function onSubmit(data: FormInput) {
        const trimmed = data.query.trim();
        if (!trimmed) return;

        const currentQuery = searchParams.get("query");
        if (trimmed === currentQuery) {
            /* Force refresh when submitting an identical query. */
            runSearch(trimmed);
        } else {
            router.push(`?query=${encodeURIComponent(trimmed)}`);
        }
    }

    return (
        <div className="flex flex-col h-[calc(100vh-68px)] overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} className="shrink-0">
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
                        className="ml-2 mr-4 w-32 bg-gradient-to-tr from-yellow-500 to-orange-500 text-white shadow-lg"
                        isLoading={loading}
                        radius="md"
                        type="submit"
                        size="lg"
                    >
                        Search
                    </Button>
                </div>
            </form>
            <div className="flex-1 overflow-y-auto px-4 flex flex-col items-center pb-8">
                {results.map((result) => (
                    <SearchResult key={result.name} {...result} />
                ))}
            </div>
        </div>
    );
}
