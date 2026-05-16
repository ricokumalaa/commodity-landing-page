import ContactUsButton from "../../shared/ContactUsButton/ContactUsButton";
import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const HeroBanner = () => {
    return (
        <div className="relative pt-16 min-h-screen bg-[url(/images/hero-banner.png)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-10">
                <div className="max-w-2xl"> {/* Constrain text width for better scanning */}
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <MainText 
                            text="Scale Your Production with Premium NTT Candlenuts"
                            extraClass="text-white text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight"
                        />
                    </div>
                    
                    <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        <SecondaryText
                            text="Reliable bulk supply with consistent grading and moisture control, shipped directly from East Nusa Tenggara to your industry."
                            extraClass="text-stone-300 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
                        />
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="400">
                        <ContactUsButton 
                            text="CEK SEKARANG"
                            link="https://wa.me/081288211755"
                        />
                        <div className="flex items-center gap-2 px-1 mt-1">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-stone-400">
                                Factory-Direct Supply • NTT Origin
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            </div>
        </div>
    );
}

export default HeroBanner;