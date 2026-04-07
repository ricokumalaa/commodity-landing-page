const ContactUsButton = () => {
    
    return (
        <a className="flex items-center gap-x-2 py-2 px-5 text-white bg-[color:var(--main-brown)] rounded-full cursor-pointer transition duration-200 ease-out hover:scale-105">
            <img src="https://cdn.simpleicons.org/whatsapp/25D366" className="w-4 h-4"/>
            <span className="text-xs md:text-sm font-semibold">Contact Us</span>
        </a>
    );

};

export default ContactUsButton;