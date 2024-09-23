import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./userAction";

export default function NavBar() {
    return (
        <header>
            <div className="bg-accent">
                <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                    <Link href={"/"} className="font-bold text-white text-2xl">
                        Anime List
                    </Link>
                    <InputSearch />
                    <UserActionButton />
                </div>
            </div>
        </header>
    )
}