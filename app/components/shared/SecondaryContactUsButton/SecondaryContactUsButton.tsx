import Link from "next/link";

interface cardsProps{
    text: string;
    link?: string;
}


const SecondaryContactUsButton = ({ text, link="" }) => {
    
    return (
        <div className="w-full bg-white rounded-lg">
            <Link href={`${link}`} className="group flex items-center gap-x-3 py-3.5 px-8 text-stone-900 bg-amber-500 rounded-sm cursor-pointer transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95">
                <img src="https://cdn.simpleicons.org/whatsapp/000000" className="w-5 h-5 transition-transform group-hover:rotate-12"/>
                <span className="font-manrope text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                    {text}
                </span>
            </Link>

        </div>
    );

};

export default SecondaryContactUsButton;