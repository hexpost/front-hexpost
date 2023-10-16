"use client";

import { Header } from "@/components/local/header";
import panda_icon from "@/assets/icons_animate/panda_animado.png";
import dino_icon from "@/assets/icons_animate/dinosauro_animado.png";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import * as jwt from "jwt-decode";
import { api } from "@/api/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo_transparente.png";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/local/spinner";
import {useRouter} from "next/navigation";

interface IUserAxios {
  data: {
    created_at: string;
    email: string;
    id: number;
    updated_at: string;
    username: string;
  };
}

interface IUser {
  created_at: string;
  email: string;
  id: number;
  updated_at: string;
  username: string;
}

interface IToken {
  sub: string;
  name: string;
  email: string;
  exp: number;
}

export default function Profile() {
  const [user, setUser] = useState<IUser>();
  const [token, setToken] = useState<IToken>();
  const [newEmail, setNewEmail] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("hxptoken")) {

      let data: IToken = jwt.default(
        localStorage.getItem("hxptoken") as string
      );

      setToken(data);
    } else {
      router.push("/login")
    }
  }, []);

  const handleGetData = async () => {
    try {
      if (!token) return router.push("/login");
      setLoadingUpdate(true);
      const result: IUserAxios = await api.get(`/users/${token.sub}`);
      setLoadingUpdate(false);
      setUser(result.data);
      setNewEmail(result.data.email);
      setNewName(result.data.username);
    } catch (err) {
      router.push("/login")
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      if (!token) return;
      const result: IUserAxios = await api.put(`/users/${token.sub}`, {
        email: newEmail,
        username: newName,
        password: "a",
      });
      setUser(result.data);
      setNewEmail(result.data.email);
      setNewName(result.data.username);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) {
      handleGetData();
    }
  }, [token]);

  return (
    <>
      <Header />
      <main className="w-full flex items-center justify-center lg:flex-row flex-col md:p-6 p-4 gap-4">
        <div className="min-h-[80vh] lg:w-1/2 w-[100%] lg:order-1 order-2 dark:bg-zinc-800 bg-zinc-300 rounded flex items-center justify-start flex-col p-8 gap-8">
          <div className="w-full flex items-start justify-center">
            {" "}
            <Image
              src={panda_icon}
              alt="panda"
              className="rounded-[50%] sm:w-[50%] w-[75%]  h-auto border-primary shadow-shadowIcon border-2"
            />
          </div>
          <Separator className="w-full dark:bg-zinc-700 bg-zinc-400" />
          {user && (
            <div className="w-full gap-4 flex flex-col">
              <div className="w-full dark:bg-zinc-700 bg-zinc-400 rounded p-4 border border-transparent transition-all hover:border-primary">
                <h1 className="font-montserrat">
                  <span className="font-bold">Nome:</span>{" "}
                  <span className="capitalize font-medium">
                    {user?.username}
                  </span>
                </h1>
              </div>
              <div className="w-full dark:bg-zinc-700 bg-zinc-400 rounded p-4 border border-transparent transition-all hover:border-primary">
                <h1 className="font-montserrat">
                  <span className="font-bold">Email:</span>{" "}
                  <span className=" font-medium">{user?.email}</span>
                </h1>
              </div>
              <div className="w-full dark:bg-zinc-700 bg-zinc-400 rounded p-4 border border-transparent transition-all hover:border-primary">
                <h1 className="font-montserrat">
                  <span className="font-bold">Biografia:</span>{" "}
                  <span className="capitalize font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam minus quidem laborum, perspiciatis cum fugiat
                    optio omnis impedit similique non neque nostrum dolores ex
                    doloribus placeat facere natus fugit! Magni
                  </span>
                </h1>
              </div>
              <div className="w-full dark:bg-zinc-700 bg-zinc-400 rounded p-4 border border-transparent transition-all hover:border-primary">
                <h1 className="font-montserrat">
                  <span className="font-bold">Conta criada em:</span>{" "}
                  <span className="capitalize font-medium">
                    {
                      new Date(
                        user?.created_at as any
                      ).toLocaleDateString() as any
                    }
                  </span>
                </h1>
              </div>
            </div>
          )}

          {!user && (
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="bg-zinc-500 w-full h-[75px]" />
              <Skeleton className="bg-zinc-500 w-full h-[75px]" />
              <Skeleton className="bg-zinc-500 w-full h-[75px]" />
              <Skeleton className="bg-zinc-500 w-full h-[75px]" />
            </div>
          )}
        </div>
        <div className="min-h-[80vh] sm:w-full w-[100%] lg:order-2 order-1 dark:bg-zinc-800 bg-zinc-300 rounded p-6 gap-6 flex flex-col">
          <div className="w-full dark:bg-zinc-700 bg-zinc-400 rounded px-2 p-4 min-h-[150px] md:flex-row flex-col gap-6 flex items-center justify-center">
            <Image src={logo} className="h-[100px] w-auto" alt="logo hexpost" />
            <div className="w-full flex flex-col gap-2 md:items-start md:justify-start items-center justify-center p-2">
              <h1 className="font-bold font-montserrat text-center md:text-start">
                A Equipe Hexpost agradece por você ter se cadastrado em nossa
                plataforma e esperamos que você tenha uma ótima experiência com
                a gente!
              </h1>
              <p className="font-montserrat">
                Abaixo é possível realizar a edição de seus dados
              </p>
            </div>
          </div>
          {user && (
            <>
              {" "}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-montserrat font-bold">
                  Nome
                </Label>
                <Input
                  id="nome"
                  placeholder="Digite seu novo nome"
                  className="font-montserrat text-xl px-4 py-6"
                  value={newName}
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-montserrat font-bold">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Digite seu email"
                  className="font-montserrat text-xl px-4 py-6"
                  value={newEmail}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <Button
                  className="w-auto py-4 px-6 text-white font-montserrat font-bold"
                  disabled={loadingUpdate ? true : false}
                  onClick={() => handleUpdate()}
                >
                  {loadingUpdate && <Spinner className="h-full w-auto" />}
                  {!loadingUpdate && "Salvar"}
                </Button>
              </div>
            </>
          )}

          {!user && (
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="bg-zinc-500 w-full h-[75px]" />
              <Skeleton className="bg-zinc-500 w-full h-[75px]" />
              <Skeleton className="bg-zinc-500 w-[150px] h-[50px]" />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
