"use client"

import "@component/navbar/navbar.css"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="navbar-container"> 
            <Link classname={'navbar-text ${pathname === "/" ? "active" : "default"}'} href="/">
                Home
            </Link>
        
            <p>|</p>

            <Link classname={'link ${pathname === "/diary" ? "active" : ""}'} href="/diary">
                Fetch
            </Link>
        </div>
    
    )
}

export default Navbar