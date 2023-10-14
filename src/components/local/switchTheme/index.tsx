"use client";

import { Switch } from "@/components/ui/switch";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner";

export const SwitchTheme = () => {
    const { setTheme, theme } = useTheme();
    const [checked, setChecked] = useState<boolean | undefined>(undefined);

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        if (theme == "dark") {
            setChecked(false);
        } else {
            setChecked(true);
        }
    }, [theme]);

    return checked != undefined ? (
        <div className="w-[100px] flex flex-row gap-2">
            <Moon className="text-zinc-900 dark:text-white" />
            <Switch
                onCheckedChange={handleToggleTheme}
                checked={checked}
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary"
            />
            <Sun className="text-zinc-900 dark:text-white" />
        </div>
    ) : (
        <Spinner />
    );
};
