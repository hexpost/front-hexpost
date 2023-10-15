import { api } from "@/api/api";

interface IResultGetTokenAndValidAxios {
    data: {
        data: {
            email: string;
            exp: number;
            sub: string;
        };
        mesasge: string;
        valid: boolean;
    };
}

export const GetTokenAndValid = async (): Promise<string | undefined> => {
    const token_local = localStorage.getItem("hxptoken");

    console.log(token_local);
    if (token_local) {
        try {
            const result: IResultGetTokenAndValidAxios = await api.post(
                "/users/auth",
                {
                    token: token_local,
                }
            );
            console.log(result);
            if (result.data.valid) {
                return token_local;
            }
            localStorage.removeItem("hxptoken");
            return undefined;
        } catch (err) {
            localStorage.removeItem("hxptoken");
            return undefined;
        }
    }
    return undefined;
};
