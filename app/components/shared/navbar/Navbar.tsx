'use client'

import React, { useState } from "react";

import NavbarMenu from "../../unshared/NavbarMenu/NavbarMenu";
import "../navbar/navbar.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import SecondaryText from "../SecondaryText/SecondaryText";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {

    const burgerAction = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    const [isOpen, setIsOpen] = useState<boolean>(false); 

    const [scrolled, setScrolled] = React.useState(false);
    
    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pathName = usePathname();

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                    {/* LOGO: No border, just clean typography */}
                    <div className={`font-serif text-2xl italic tracking-tighter ${pathName != "/" ? "text-stone-900" : (scrolled ? "text-stone-900" : "text-white")}`}>
                        NTT<span className="font-bold not-italic text-amber-600">KEMIRI</span>
                    </div>

                    {/* MENU */}
                    <ul className={`hidden md:flex items-center gap-10 font-manrope font-bold uppercase text-[11px] tracking-[0.25em] ${pathName != "/" ? "text-stone-600" : (scrolled ? "text-stone-600" : "text-stone-200")}`}>
                        <li className="hover:text-amber-500 transition-colors">
                            <NavbarMenu link="/" text="Home"/>
                        </li>
                        <li className="hover:text-amber-500 transition-colors">
                            <NavbarMenu link="/about-us" text="About Us"/>
                        </li>
                        <li className="hover:text-amber-500 transition-colors">
                            <NavbarMenu link="/catalogue" text="Catalogue"/>
                        </li>
                        <li>
                            <Link href="/contact-us" className={`px-6 py-2 rounded-sm transition-all ${pathName != "/" ? "bg-stone-900 text-white" : (scrolled ? "bg-stone-900 text-white" : "bg-white text-stone-900")}`} onClick={burgerAction}>
                                Contact US
                            </Link>
                        </li>
                    </ul>

                    {/* MOBILE */}
                    {/* burger */}
                    <button className="md:hidden relative z-50 p-2" onClick={burgerAction}>
                        {isOpen ? <XMarkIcon className="w-8 h-8 text-stone-800 transition-all duration-300"/> : <Bars3Icon className={`w-8 h-8 transition-all duration-300 ${pathName != "/" ? "text-stone-800" : (scrolled ? "text-stone-800" : "text-white")}`} />}
                    </button>

                    {/* mobile navbar */}
                    <div className={`fixed inset-0 top-0 left-0 w-full h-screen z-40 transition-all duration-500 ease-in-out md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                        {/* Background Blur Overlay */}
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={burgerAction}></div>

                        {/* Menu Links Container */}
                        <div className={`relative flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ${isOpen ? "translate-y-0" : "translate-y-10"}`}>
                            {/* Brand Logo in Mobile Menu */}
                            <div className="font-serif text-2xl italic mb-4">
                                NTT<span className="font-bold not-italic text-amber-600">Kemiri</span>
                            </div>

                            <nav className="flex flex-col items-center gap-6">
                                <NavbarMenu 
                                    link="/" 
                                    text="HOME"
                                    onCLick={burgerAction}
                                    extraClass="!text-xl !font-light tracking-widest !text-stone-800 !hover:text-amber-600 transition-colors !p-0"
                                />
                                <NavbarMenu 
                                    link="/about-us" 
                                    text="ABOUT US"
                                    onCLick={burgerAction}
                                    extraClass="!text-xl !font-light tracking-widest !text-stone-800 !hover:text-amber-600 transition-colors !p-0"
                                />
                                <NavbarMenu 
                                    link="/catalogue" 
                                    text="CATALOGUE"
                                    onCLick={burgerAction} 
                                    extraClass="!text-xl !font-light tracking-widest !text-stone-800 !hover:text-amber-600 transition-colors !p-0"
                                />
                                
                                {/* Styled Contact Button for Mobile */}
                                <Link href="/contact-us" className="mt-4 font-manrope px-10 py-4 bg-stone-900 text-white text-sm font-black tracking-[0.3em] rounded-sm shadow-xl" onClick={burgerAction}>
                                    CONTACT US
                                </Link>
                            </nav>

                            {/* Small detail: Origin Text */}
                            <div className="absolute bottom-12 text-[10px] tracking-[0.4em] text-stone-400 uppercase">
                                <SecondaryText
                                    text="Sourced from East Nusa Tenggara"
                                    extraClass="!text-[10px] tracking-[0.4em] !text-stone-400 uppercase"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;