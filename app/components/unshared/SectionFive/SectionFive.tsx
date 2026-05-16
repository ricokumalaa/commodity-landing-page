import SecondaryContactUsButton from "../../shared/SecondaryContactUsButton/SecondaryContactUsButton";
import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const SectionFive = () => {
    return(
        <div className="py-20 w-full px-10 flex flex-col justify-center items-center gap-y-15 bg-[var(--foreground)] text-center">
            
            <div>
                <MainText
                    text="“Telah melayani klien B2B di NTT"
                    extraClass="text-lg md:text-2xl !text-[color:var(--main-brown)]"
                />
                <MainText
                    text="“Repeat order dari klien industri"
                    extraClass="text-lg md:text-2xl !text-[color:var(--main-brown)]"
                />
                <MainText
                    text="Sudah Berdiri Sejak 1990"
                    extraClass="text-lg md:text-2xl !text-[color:var(--main-brown)]"
                />
                <MainText
                    text="Sudah mengirim lebih dari 1000 TON Kemiri"
                    extraClass="text-lg md:text-2xl !text-[color:var(--main-brown)]"
                />
            </div>

            <div className="flex flex-col items-center gap-y-3">
                <SecondaryText
                    text="Mulai Kerjasama dengan kami"
                    extraClass="!text-[color:var(--main-brown)] text-sm md:text-lg"
                />
                <SecondaryContactUsButton 
                    text="CEK SEKARANG"
                    link="https://wa.me/081281797771"
                />
            </div>

        </div>
    );
}

export default SectionFive;