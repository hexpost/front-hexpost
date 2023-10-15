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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Hammer, Home, Newspaper, User2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { SwitchTheme } from "../switchTheme";
import { useRouter } from "next/navigation";

export const Header = () => {
    const router = useRouter();

    return (
        <div className="w-full flex h-[75px] dark:bg-zinc-800 bg-zinc-300 items-center justify-around border-b border-primary">
            <div className="w-1/3  h-full flex items-center justify-center">
                {" "}
                <Image
                    alt="logo do hexpost"
                    src={logo}
                    className="w-auto h-full border-primary"
                />
            </div>

            <div className="w-1/3 h-full  flex items-center justify-center">
                <NavigationMenu className="w-full flex items-center justify-center">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="border-transparent hover:border-primary border font-montserrat font-bold text-xl dark:data-[active]:bg-zinc-900 data-[active]:bg-zinc-200 dark:data-[state=open]:bg-zinc-900 data-[state=open]:bg-zinc-200">
                                Navegar
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[400px] h-[350px] p-2 dark:bg-zinc-800 bg-zinc-300 border-2 dark:border-zinc-900 border-zinc-700 dark:border flex flex-col gap-2 items-center ">
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
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="border-transparent hover:border-primary border font-montserrat font-bold text-xl dark:data-[active]:bg-zinc-900 data-[active]:bg-zinc-200 dark:data-[state=open]:bg-zinc-900 data-[state=open]:bg-zinc-200">
                                Sobre
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[400px] h-[350px] p-2 dark:bg-zinc-800 bg-zinc-300 border-2 dark:border-zinc-900 border-zinc-700 dark:border flex flex-col gap-2 items-center ">
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
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="border-transparent hover:border-primary border font-montserrat font-bold text-xl dark:data-[active]:bg-zinc-900 data-[active]:bg-zinc-200 dark:data-[state=open]:bg-zinc-900 data-[state=open]:bg-zinc-200">
                                Configurações
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[400px] h-[350px] p-2 dark:bg-zinc-800 bg-zinc-300 border-2 dark:border-zinc-900 border-zinc-700 dark:border flex flex-col gap-2 items-center ">
                                    <div className="w-full  dark:bg-zinc-900 bg-zinc-400 rounded flex  p-4 flex-row flex-wrap gap-4">
                                        <div className="dark:bg-zinc-800 bg-zinc-300 p-4 rounded w-full ">
                                            <Label>Trocar tema: </Label>
                                            <SwitchTheme />
                                        </div>
                                        <div className="dark:bg-zinc-800 bg-zinc-300 p-4 rounded w-full ">
                                            <Label>Outra configuração: </Label>
                                        </div>
                                    </div>
                                    <Separator className="bg-zinc-700 w-full" />
                                    <Button
                                        variant={"ghost"}
                                        className="w-full dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                    >
                                        <Hammer className="mr-4" />
                                        Suporte
                                    </Button>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {!localStorage.getItem("hxptoken") ? (
                <div className="w-1/3 h-full flex flex-row gap-4 items-center justify-center">
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
            ) : (
                <div className="w-1/3 h-full flex flex-row gap-4 items-center justify-center">
                    <Button
                        variant={"ghost"}
                        className="w-auto dark:bg-zinc-700 bg-zinc-400 dark:hover:bg-zinc-700 hover:bg-zinc-400 border border-transparent hover:border-primary font-montserrat font-bold text-lg p-4"
                    >
                        <User2 className="mr-4" />
                        Perfil
                    </Button>
                </div>
            )}
        </div>
    );
};
