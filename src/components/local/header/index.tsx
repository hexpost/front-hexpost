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

export const Header = () => {
    return (
        <div className="w-full flex h-[75px] bg-zinc-800 items-center justify-around border-b border-primary">
            <Image
                alt="logo do hexpost"
                src={logo}
                className="w-auto h-full border-primary"
            />
            <NavigationMenu className="w-full">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="border-transparent hover:border-primary border font-montserrat font-bold text-xl data-[active]:bg-zinc-900 data-[state=open]:bg-zinc-900">
                            Navegar
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[400px] h-[350px] p-2 bg-zinc-800 border-2 border-zinc-900 flex flex-col gap-2 items-center ">
                                <div className="w-full h-[150px]  bg-gradient-to-t from-zinc-900 from-10% to-primary rounded flex items-center p-4 flex-row gap-4">
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
                                            Aproveite ao maximo de nosso site{" "}
                                            {":)"}
                                        </p>
                                    </div>
                                </div>
                                <Separator className="bg-zinc-700 w-full" />
                                <Button
                                    variant={"ghost"}
                                    className="w-full bg-zinc-700 hover:bg-zinc-700 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                >
                                    <Home className="mr-4" />
                                    Pagina inicial
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="w-full bg-zinc-700 hover:bg-zinc-700 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                >
                                    <Newspaper className="mr-4" />
                                    Novidades
                                </Button>
                                <Button
                                    variant={"ghost"}
                                    className="w-full bg-zinc-700 hover:bg-zinc-700 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                >
                                    <User2 className="mr-4" /> Contribuidores
                                </Button>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="border-transparent hover:border-primary border font-montserrat font-bold text-xl data-[active]:bg-zinc-900 data-[state=open]:bg-zinc-900">
                            Sobre
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[400px] h-[350px] p-2 bg-zinc-800 border-2 border-zinc-900 flex flex-col gap-2 items-center ">
                                <Separator className="bg-zinc-700 w-full" />
                                <Button
                                    variant={"ghost"}
                                    className="w-full bg-zinc-700 hover:bg-zinc-700 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                >
                                    Quem somos?
                                </Button>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="border-transparent hover:border-primary border font-montserrat font-bold text-xl data-[active]:bg-zinc-900 data-[state=open]:bg-zinc-900">
                            Configurações
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[400px] h-[350px] p-2 bg-zinc-800 border-2 border-zinc-900 flex flex-col gap-2 items-center ">
                                <div className="w-full  bg-zinc-900 rounded flex  p-4 flex-row flex-wrap gap-4">
                                    <div className="bg-zinc-800 p-4 rounded w-full ">
                                        <Label>Trocar tema: </Label>
                                        <SwitchTheme />
                                    </div>
                                    <div className="bg-zinc-800 p-4 rounded w-full ">
                                        <Label>Outra configuração: </Label>
                                    </div>
                                </div>
                                <Separator className="bg-zinc-700 w-full" />
                                <Button
                                    variant={"ghost"}
                                    className="w-full bg-zinc-700 hover:bg-zinc-700 border border-transparent hover:border-primary font-montserrat font-bold text-lg py-6"
                                >
                                    <Hammer className="mr-4" />
                                    Suporte
                                </Button>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div>
                <Link href={"/login"}>Login</Link>
            </div>
        </div>
    );
};
