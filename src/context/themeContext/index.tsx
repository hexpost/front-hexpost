"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface IContext {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

const isBrowser = typeof window !== "undefined";

const ThemeContext = createContext({} as IContext);

export const ThemeContextProvider = ({
    children,
    ...props
}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<"dark" | "light">(
        (isBrowser && (localStorage.getItem("theme") as "dark")) || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;

        const remove = theme === "dark" ? "light" : "dark";

        root.classList.remove(remove);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
