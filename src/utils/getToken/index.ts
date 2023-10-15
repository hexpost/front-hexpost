export const GetToken = (): string | undefined => {
    const token = localStorage.getItem("hxptoken");
    if (token) {
        return token;
    }
    return undefined;
};
