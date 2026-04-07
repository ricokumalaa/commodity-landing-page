import ContactUsButton from "../../shared/ContactUsButton/ContactUsButton";
import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const SectionFive = () => {
    return(
        <div className="py-20 w-full px-10 flex flex-col justify-center items-center gap-y-15 bg-[var(--main-brown)] text-center">
            
            <div>
                <MainText
                    text="“Telah melayani klien B2B di NTT"
                    extraClass="text-lg md:text-2xl !text-[color:var(--secondary-text)]"
                />
                <MainText
                    text="“Repeat order dari klien industri"
                    extraClass="text-lg md:text-2xl !text-[color:var(--secondary-text)]"
                />
                <MainText
                    text="Sudah Berdiri Sejak ______"
                    extraClass="text-lg md:text-2xl !text-[color:var(--secondary-text)]"
                />
                <MainText
                    text="Sudah mengirim ____ TON Kemiri"
                    extraClass="text-lg md:text-2xl !text-[color:var(--secondary-text)]"
                />
            </div>

            <div className="flex flex-col items-center gap-y-3">
                <SecondaryText
                    text="Mulai Kerjasama dengan kami"
                    extraClass="text-sm md:text-lg"
                />
                <ContactUsButton/>
            </div>

        </div>
    );
}

export default SectionFive;