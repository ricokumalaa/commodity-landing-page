import Link from "next/link";

interface menuProps {
    link: string,
    text: string,
    extraClass?: string,
    onCLick?: () => void
};

const NavbarMenu = ({link, text, extraClass= "", onCLick}:menuProps) => {
    return (
        <Link 
            href={link} 
            className={`px-5 py-2 cursor-pointer rounded-4xl hover:bg-[color:var(--main-brown)] hover:text-[color:var(--secondary-text-hover)] transition-colors duration-300 ${extraClass}`}
            onClick={onCLick}
        >
            {text}
        </Link>
    );
}

export default NavbarMenu;