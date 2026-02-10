import NavbarMenu from "../../unshared/NavbarMenu/NavbarMenu";
import "../navbar/navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 navbar-background h-16 drop-shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                    {/* LOGO */}
                    <div className="border">
                        LLOGO
                    </div>

                    {/* MENU */}
                    <ul className="flex items-center justify-between gap-10 secondary-text tracking-wide font-semibold">
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

                </div>
            </nav>
        </>
    );
}

export default Navbar;