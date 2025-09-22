import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo.png"


export function Navbar() {

    return(
        <div className="flex w-full justify-evenly items-center fixed top-0 z-10">

            <Image src={logo} width={50} height={24} alt="logo" className="rounded-full"/>
            <div className="flex gap-6">
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Get Started</button>
            </div>
        
        </div>
    )
}