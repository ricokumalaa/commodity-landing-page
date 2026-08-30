'use client'

import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

interface menuProps {
    link: string,
    text: string,
    extraClass?: string,
    onClick?: () => void
};

const NavbarMenu = ({link, text, extraClass= "", onClick}:menuProps) => {

    const handleClick = () => {
        sendGAEvent('event', 'Navbar Menu Click', {
            menu_name: text,
            method: 'click',
        });

        onClick?.();
    };

    return (
        <Link 
            href={link} 
            className={`px-5 py-2 cursor-pointer rounded-4xl hover:bg-[color:var(--main-brown)] hover:text-[color:var(--secondary-text-hover)] transition-colors duration-300 ${extraClass}`}
            onClick={handleClick}
        >
            {text}
        </Link>
    );
}

export default NavbarMenu;