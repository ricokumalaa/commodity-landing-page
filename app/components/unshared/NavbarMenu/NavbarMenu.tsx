interface menuProps {
    link: string,
    text: string,
    extraClass?: string
};

const NavbarMenu = ({link, text, extraClass= ""}:menuProps) => {
    return (
        <a 
            href={link} 
            className={`px-5 py-2 cursor-pointer rounded-4xl hover:bg-[color:var(--main-green)] hover:text-[color:var(--secondary-text-hover)] transition-colors duration-300 ${extraClass}`}
        >
            {text}
        </a>
    );
}

export default NavbarMenu;