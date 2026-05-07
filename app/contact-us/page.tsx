import Image from "next/image";
import SecondaryText from "../components/shared/SecondaryText/SecondaryText";
import MainText from "../components/shared/MainText/MainText";
import ContactUsButton from "../components/shared/ContactUsButton/ContactUsButton";
import ContactUsAnimation from "../components/shared/ContactUsAnimation/ContactUsAnimation";

export default function AboutUs() {
    return (
        <main className="py-16">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end gap-10 mt-30 px-10">
                <div className="flex-2">
                    <MainText
                        text="Contact us"
                        extraClass="!text-[color:var(--main-brown)] font-normal text-4xl md:text-6xl mt-2 mb-7"
                    />
                    <SecondaryText
                        text="Silakan hubungi kami untuk informasi lebih lanjut mengenai produk, harga, dan kerja sama. Tim kami akan merespons dengan cepat dan memberikan solusi terbaik sesuai kebutuhan Anda."
                        extraClass="!text-[color:var(--secondary-brown)] w-full max-w-xl"
                    />
                </div>
                <div className="flex-1">
                    <ContactUsAnimation/>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto my-20 px-10">

                <MainText
                    text="Rico Kumala (Sales & Marketing Manager)"
                    extraClass="!text-[color:var(--main-brown)] font-normal text-xl"
                />
                <ContactUsButton
                    text="HUBUNGI SEKARANG"
                    extraClass="w-full max-w-sm mt-2 !py-3 !px-6"
                />
                
                <MainText
                    text="Reinhart Ishwara (Sales & Marketing Manager)"
                    extraClass="!text-[color:var(--main-brown)] font-normal text-xl mt-5"
                />
                <ContactUsButton
                    text="HUBUNGI SEKARANG"
                    extraClass="w-full max-w-sm mt-2 text-sm !py-3 !px-6"
                />

                

            </div>
        </main>
    );
}