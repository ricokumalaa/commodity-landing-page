import ContactUsButton from "../../shared/ContactUsButton/ContactUsButton";
import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const HeroBanner = () => {
    return (
        <div className="relative pt-16 min-h-screen bg-[url(/images/hero-banner.png)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center gap-8">
                <div>
                    <MainText 
                        text="JUAL KEMIRI"
                        extraClass="text-stone-100 text-3xl md:text-5xl tracking-wide [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]"
                    />
                </div>
                
                <div>
                    <SecondaryText
                        text="Kemiri Berkualitas untuk Kebutuhan Industri & Grosir"
                        extraClass="text-stone-100 max-w-xl mx-auto leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]"
                    />
                </div>

                <div>
                    <ContactUsButton/>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;