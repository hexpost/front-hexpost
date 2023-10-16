"use client";

import Link from "next/link";
import logo from "@/assets/logo_transparente.png";
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Coffee, DoorOpen, Hammer, Home, Newspaper, User2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { SwitchTheme } from "../switchTheme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import * as jwt from "jwt-decode";
import { Spinner } from "../spinner";

interface IUser {
    name: string;
    email: string;
    exp: number;
    iat: number;
}

export const Header = () => {
    const [logged, setLogged] = useState<boolean>(false);
    const [loadingLogged, setLoadingLogged] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("hxptoken")) {
            setLogged(true);
            setUser(jwt.default(localStorage.getItem("hxptoken") as string));
        }
        setLoadingLogged(true);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("hxptoken");
        window.location.reload();
    };

    return (
        <div className="w-full flex lg:h-[75px] h-auto dark:bg-zinc-800 bg-zinc-300 items-center justify-around border-b border-primary flex-wrap lg:gap-0 gap-4 lg:p-0 p-4">
            <div className="lg:w-1/3 w-full  h-full flex items-center justify-center">
                {" "}
                <Image
                    alt="logo do hexpost"
                    src={logo}
                    className="lg:w-auto lg:h-full w-[100px] h-[100px] border-primary"
                />
            </div>

            <div className="lg:w-1/3 w-full h-full  flex items-center justify-center flex-wrap">
                <NavigationMenu className="w-full flex items-center justify-center flex-wrap">
                    <NavigationMenuList className="lg:flex-row lg:flex-nowrap flex-wrap gap-2">
                        <NavigationMenuItem className="lg:w-auto w-full">
                            <NavigationMenuTrigger className="w-full border-transparent hover:border-primary border font-montserrat font-bold text-xl dark:data-[active]:bg-zinc-900 data-[active]:bg-zinc-200 dark:data-[state=open]:bg-zinc-900 data-[state=open]:bg-zinc-200">
                                Navegar
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="sm:w-[400px] w-[92vw] h-[350px] p-2 dark:bg-zinc-800 bg-zinc-300 border-2 dark:border-zinc-900 border-zinc-700 dark:border flex flex-col gap-2 items-center ">
                                    <div className="w-full h-[150px]  bg-gradient-to-t dark:from-zinc-900 dark:to-primary from-zinc-400 dark:from-10% from-2% to-primary rounded flex items-center p-4 flex-row gap-4">
                                        <Image
                                            alt="logo do hexpost"
                                            src={logo}
                                            className="w-[100px] h-[100px] rounded-full"
                                        />
                                        <div>
                                            <h1 className="font-montserrat font-bold text-[15px]">
                                                Navegue nas principais paginas
                                                através desse painel
                                            </h1>
                                            <p className="font-montserrat text-xs">
                                                Aproveite ao maximo de nosso
                                                site {":)"}
                                            </p>
                                        </div>
                                    </div>
                                    <Separator className="dark:bg-zinc-700 bg-zinc-400 w-full" />
                                    <Button
                                        variant={"ghost"}
                                        className="w-full dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                    >
                                        <Home className="mr-4" />
                                        Pagina inicial
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="w-full dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                    >
                                        <Newspaper className="mr-4" />
                                        Novidades
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="w-full dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                    >
                                        <User2 className="mr-4" />{" "}
                                        Contribuidores
                                    </Button>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="lg:w-auto w-full">
                            <NavigationMenuTrigger className="w-full border-transparent hover:border-primary border font-montserrat font-bold text-xl dark:data-[active]:bg-zinc-900 data-[active]:bg-zinc-200 dark:data-[state=open]:bg-zinc-900 data-[state=open]:bg-zinc-200">
                                Conteudo
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="sm:w-[400px] w-[92vw] h-[350px] p-2 dark:bg-zinc-800 bg-zinc-300 border-2 dark:border-zinc-900 border-zinc-700 dark:border flex flex-col gap-2 items-center ">
                                    <Separator className="bg-zinc-700 w-full" />
                                    <Button
                                        variant={"ghost"}
                                        className="w-full dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                    >
                                        <Hammer className="mr-4" />
                                        Rust
                                    </Button>
                                    <Button
                                        variant={"ghost"}
                                        className="w-full dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                    >
                                        <Coffee className="mr-4" />
                                        Java
                                    </Button>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="lg:w-auto w-full">
                            <NavigationMenuTrigger className="w-full border-transparent hover:border-primary border font-montserrat font-bold text-xl dark:data-[active]:bg-zinc-900 data-[active]:bg-zinc-200 dark:data-[state=open]:bg-zinc-900 data-[state=open]:bg-zinc-200">
                                Sobre
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="sm:w-[400px] w-[92vw] h-[350px] p-2 dark:bg-zinc-800 bg-zinc-300 border-2 dark:border-zinc-900 border-zinc-700 dark:border flex flex-col gap-2 items-center ">
                                    <Separator className="bg-zinc-700 w-full" />
                                    <Button
                                        variant={"ghost"}
                                        className="w-full dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                    >
                                        Quem somos?
                                    </Button>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {loadingLogged && !logged && (
                <div className="lg:w-1/3 w-full h-full flex flex-row gap-4 items-center justify-center">
                    <Link href={"/login"} className="font-montserrat font-bold">
                        Login
                    </Link>
                    <Button
                        className="text-white font-montserrat font-bold text-lg"
                        onClick={() => router.push("/register")}
                    >
                        Criar conta
                    </Button>
                </div>
            )}

            {loadingLogged && logged && (
                <div className="lg:w-1/3 w-full h-full flex flex-row gap-4 items-center justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="lg:w-auto w-full flex flex-row gap-2 rounded dark:bg-zinc-700 bg-zinc-300 dark:hover:bg-zinc-700 hover:bg-zinc-300 border border-transparent hover:border-primary font-montserrat font-bold text-lg px-4 py-1 transition-all">
                                <User2 />
                                Perfil
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="dark:bg-zinc-800 bg-zinc-200  border-primary border-2">
                            <div className="sm:w-[300px] w-[92vw] p-2 ">
                                <DropdownMenuLabel className="capitalize border-none dark:bg-zinc-700 bg-zinc-400 p-4 rounded">
                                    Seja bem vindo, {user?.name}.
                                </DropdownMenuLabel>
                                <Separator className="my-2 bg-zinc-500" />
                                <DropdownMenuSeparator />
                                <div className="w-full flex flex-col gap-2">
                                    {" "}
                                    <Link
                                        href="/profile"
                                        className="w-full flex flex-row gap-2 border border-transparent dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-all cursor-pointer p-2 rounded"
                                    >
                                        <User2 /> Perfil
                                    </Link>
                                    <Link
                                        href="/profile"
                                        className="w-full flex flex-row gap-2 border border-transparent dark:hover:bg-zinc-700 hover:bg-zinc-300 transition-all cursor-pointer p-2 rounded"
                                    >
                                        <Hammer /> Suporte
                                    </Link>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="px-4 border border-primary rounded"
                                    >
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                Configurações
                                            </AccordionTrigger>

                                            <AccordionContent>
                                                <div className="mb-4 w-full flex gap-4 flex-row items-center justify-around dark:bg-zinc-700 bg-zinc-300 rounded p-2">
                                                    <Label>Trocar tema: </Label>
                                                    <SwitchTheme />
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <Separator className="my-2 bg-zinc-500" />
                                <Button
                                    variant={"ghost"}
                                    className="w-full flex flex-row gap-2 border border-transparent dark:hover:bg-zinc-700 hover:bg-zinc-300  transition-all cursor-pointer p-2 rounded"
                                    onClick={handleLogout}
                                >
                                    <DoorOpen /> Sair
                                </Button>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )}

            {!loadingLogged && (
                <div className="lg:w-1/3 w-full h-full flex flex-row gap-4 items-center justify-center">
                    <Spinner />
                </div>
            )}
        </div>
    );
};
