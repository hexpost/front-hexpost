import Link from "next/link";

export const Header = () => {
    return (
        <div className="w-full flex h-8 bg-zinc-800">
            <Link href={"/login"}>Login</Link>
        </div>
    );
};
