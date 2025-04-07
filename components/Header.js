import { useServerDarkMode } from "@/hooks/use-server-dark-mode";
import DarkMode from "./darkmode";
import Navigation from "./Navigation";
import Link from 'next/link';

export default function Header( {theme}) {
return (
    <>
<header className="flex justify-between md:items-center mt-4">
    <div className="flex items-center md:space-x-12">
        <div className="hidden md:block">
            <Link href="/" className="text-xl">Esben</Link>
        </div>
< Navigation />
</div>
<div>
    <DarkMode defaultTheme={theme} /></div>
    </header>
   </>
)
}