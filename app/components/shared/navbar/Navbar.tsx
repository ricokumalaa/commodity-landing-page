'use client'

import { useState } from "react";

import NavbarMenu from "../../unshared/NavbarMenu/NavbarMenu";
import "../navbar/navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const Navbar = () => {

    const burgerAction = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    const [isOpen, setIsOpen] = useState<boolean>(false); 

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 navbar-background h-16 ${isOpen! ? "" : "drop-shadow-2xl" }`}>
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                    {/* LOGO */}
                    <div className="border">
                        LLOGO
                    </div>

                    {/* MENU */}
                    <ul className="hidden md:flex items-center justify-between gap-10 secondary-text font-semibold tracking-wide">
                        <li>
                            <NavbarMenu link="#" text="Home" />
                        </li>
                        <li>
                            <NavbarMenu link="#" text="About Us"/>
                        </li>
                        <li>
                            <NavbarMenu link="#" text="Contact"/>
                        </li>
                    </ul>

                    {/* MOBILE */}
                    {/* burger */}
                    <button className="md:hidden" onClick={burgerAction}>
                        {isOpen ? <XMarkIcon className="w-6 h-6 secondary-text cursor-pointer"/> : <Bars3Icon className="w-6 h-6 secondary-text cursor-pointer"></Bars3Icon>}
                    </button>

                    {/* mobile navbar */}
                    <div className={`absolute top-16 left-0 w-full shadow-md navbar-background flex flex-col items-center py-6 gap-7 secondary-text font-semibold tracking-wide transition-all duration-200 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
                        <a href="#" className="">Home</a>
                        <a href="#" className="">About Us</a>
                        <a href="#" className="">Contact</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;