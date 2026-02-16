const ContactUsButton = () => {
    
    return (
        <button className="flex items-center gap-x-2 py-2 px-5 text-[color:var(--main-green)] bg-[color:var(--secondary-green)] hover:text-[color:var(--secondary-green)] hover:bg-[color:var(--main-green)] border-2 border-[color:var(--main-green)] rounded-full cursor-pointer transition duration-200 ease-out hover:scale-105">
            <img src="https://cdn.simpleicons.org/whatsapp/25D366" className="w-4 h-4"/>
            <span className="text-xs md:text-sm font-semibold">Contact Us</span>
        </button>
    );

};

export default ContactUsButton;