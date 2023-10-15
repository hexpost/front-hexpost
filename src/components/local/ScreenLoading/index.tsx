"use client";

import { useState } from "react";

import logo from "@/assets/logo_transparente.png";
import { Spinner } from "../spinner";
import Image from "next/image";

export const useScreenLoading = () => {
    const [screenLoadingState, setLoading] = useState<boolean>(false);

    const startLoading = () => {
        setLoading(true);
    };

    const stopLoading = () => {
        setLoading(false);
    };

    const ScreenLoading = () => {
        return screenLoadingState ? (
            <div className="w-screen h-screen absolute bg-zinc-400/50 dark:bg-black/50 inset-0 flex items-center justify-center flex-col">
                <Image
                    alt="Logo do hexpost"
                    src={logo}
                    className="h-[150px] w-[150px]"
                />
                <div className="w-full flex flex-row gap-2 items-center justify-center">
                    <Spinner /> <h1>Carregando...</h1>
                </div>
            </div>
        ) : (
            <></>
        );
    };

    return {
        screenLoadingState,
        startLoading,
        stopLoading,
        ScreenLoading,
    };
};
