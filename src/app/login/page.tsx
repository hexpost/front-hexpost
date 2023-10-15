"use client";

import { SwitchTheme } from "@/components/local/switchTheme";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import logo_transparente from "@/assets/logo_transparente.png";
import { ChevronsRight, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import * as z from "zod";
import { Spinner } from "@/components/local/spinner";
import { api } from "@/api/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GetTokenAndValid } from "@/utils/getTokenAndValid";
import { useScreenLoading } from "@/components/local/ScreenLoading";
import { ScreenLoadingUnique } from "@/components/local/ScreenLoadingUnique";

interface ILoginResponse {
    data: {
        token: string;
    };
}

export default function Login() {
    const router = useRouter();
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [disabledButton, setDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [warning, setWarning] = useState<string>("");
    const [passwordInputType, setPasswordInputType] =
        useState<string>("password");

    const [validated, setValidated] = useState<boolean>(true);

    useEffect(() => {
        validationFields();
    }, [password, email]);

    useEffect(() => {
        const validantion = validationFields();
        if (validantion) {
            if (loading == true) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        }
    }, [loading]);

    useEffect(() => {
        const checkToken = localStorage.getItem("hxptoken");
        if (checkToken) {
            ValidToken();
        } else {
            setValidated(false);
        }
    }, []);

    const ValidToken = async () => {
        const validToken = await GetTokenAndValid();
        if (validToken) {
            router.push("/");
            return;
        }
        setValidated(false);
    };

    const validationFields = () => {
        if (password.length > 0 && email.length > 0) {
            const schema = z.object({
                email: z
                    .string()
                    .email({ message: "Email no formato inválido" }),
                password: z
                    .string()
                    .min(5, { message: "Senha no formato inválido" }),
            });

            const check: any = schema.safeParse({ email, password });

            if (check.success) {
                setWarning("");
                setDisabled(false);
                return true;
            }
            setWarning(`${check.error.errors[0].message}`);
            setDisabled(true);
            return false;
        }
    };

    const toggleTypePasswordInput = () => {
        if (passwordInputType === "password") {
            setPasswordInputType("text");
            return;
        }
        setPasswordInputType("password");
    };

    const handleLogin = async () => {
        const validation = validationFields();
        if (validation) {
            setLoading(true);
            try {
                const token: ILoginResponse = await api.post("/users/login", {
                    email,
                    password,
                });
                console.log(token.data.token);
                localStorage.setItem("hxptoken", token.data.token);
                router.push("/");
            } catch (err) {
                setWarning("Credenciais invalidas");
                setTimeout(() => {
                    setWarning("");
                }, 3000);
            }
            setLoading(false);
        }
    };

    return (
        <>
            {validated ? (
                <ScreenLoadingUnique />
            ) : (
                <main className="w-full h-screen relative">
                    <div className="w-full h-full overflow-hidden flex items-center justify-center dark:bg-zinc-800 bg-white">
                        <Card className="sm:w-[500px] w-[95%] shadow-3xlLight dark:shadow-3xlDark border-primary">
                            <CardHeader className="w-full flex items-center justify-center">
                                <Image
                                    alt="logo do hexpost"
                                    src={logo_transparente}
                                    className="w-[150px] h-[150px]"
                                />
                                <CardTitle>Logue em sua conta</CardTitle>
                                <CardDescription className="text-center">
                                    Digite suas credenciais nos campos abaixo:
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label
                                                htmlFor="name"
                                                className="font-montserrat font-bold"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                placeholder="Digite seu email"
                                                className="font-montserrat text-xl px-4 py-6"
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label
                                                htmlFor="name"
                                                className="font-montserrat font-bold"
                                            >
                                                Password
                                            </Label>
                                            <div className="flex flex-row items-center justify-center gap-2">
                                                <Input
                                                    id="password"
                                                    placeholder="Digite sua senha"
                                                    type={passwordInputType}
                                                    className="font-montserrat text-xl px-4 py-6"
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <Button
                                                    variant={"ghost"}
                                                    className="px-4 py-6 text-xl"
                                                    onClick={
                                                        toggleTypePasswordInput
                                                    }
                                                >
                                                    {passwordInputType ===
                                                    "password" ? (
                                                        <EyeOff />
                                                    ) : (
                                                        <Eye />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>

                            <CardDescription className="mb-4 flex flex-row items-center justify-center gap-2 text-red-500">
                                {warning}
                            </CardDescription>

                            <CardFooter className="flex sm:justify-between justify-center sm:gap-0 gap-6 sm:flex-row flex-col">
                                <div>
                                    <Link href="/register">
                                        <Button
                                            variant="ghost"
                                            className="font-montserrat"
                                        >
                                            Criar conta
                                        </Button>
                                    </Link>

                                    <Button
                                        variant="ghost"
                                        className="font-montserrat"
                                    >
                                        Recuperar senha
                                    </Button>
                                </div>
                                <Button
                                    className="text-white font-montserrat font-bold p-4 text-xl sm:w-[150px] w-full transition-all  hover:shadow-shadowButton"
                                    disabled={disabledButton}
                                    onClick={handleLogin}
                                >
                                    {loading ? (
                                        <Spinner />
                                    ) : (
                                        <>
                                            <ChevronsRight
                                                className="mr-2"
                                                size={25}
                                            />
                                            Logar
                                        </>
                                    )}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className=" absolute top-4 right-4">
                        <SwitchTheme />
                    </div>
                </main>
            )}
        </>
    );
}
