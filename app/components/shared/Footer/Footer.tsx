import MainText from "../MainText/MainText";
import SecondaryText from "../SecondaryText/SecondaryText";

const Footer = () => {
    return(
        <div className="flex flex-col gap-y-5 pt-15 pb-3 w-full bg-[var(--background)]">
            
            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-9/10 mx-auto tracking-wide md:pl-30">
                <div className="flex flex-col gap-y-7 p-5">
                    
                    <MainText
                        text="COMPANY"
                        extraClass="text-xl md:text-3xl !text-[color:var(--main-brown)]"
                    />
                    
                    <div className="w-full max-w-sm">
                        <SecondaryText
                            text="Penyedia kemiri untuk kebutuhan perusahaan, industri, dan distributor"
                            extraClass="!font-normal !text-[color:var(--main-brown)]"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col gap-y-5 p-5">

                    <MainText
                        text="Informasi"
                        extraClass="text-lg md:text-xl !text-[color:var(--main-brown)]"
                    />

                    <div>
                        <SecondaryText
                            text="WhatsApp: 08xxxxxxx / 08xxxxxxxxx"
                            extraClass="!font-normal !text-[color:var(--main-brown)]"
                        />
                        <SecondaryText
                            text="Email: saels@perusahaan.com"
                            extraClass="!font-normal !text-[color:var(--main-brown)]"
                        />
                        <SecondaryText
                            text="Taman Semanan Indah, Jln Dharma Permai"
                            extraClass="!font-normal !text-[color:var(--main-brown)]"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-y-5 p-5">

                    <MainText
                        text="Jam Operasional"
                        extraClass="text-lg md:text-xl !text-[color:var(--main-brown)]"
                    />
                    
                    <div>
                        <SecondaryText
                            text="Senin - Minggu"
                            extraClass="!font-normal !text-[color:var(--main-brown)]"
                        />
                        <SecondaryText
                            text=" 09.00 - 20.00 WIB"
                            extraClass="!font-normal !text-[color:var(--main-brown)]"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center">
                <SecondaryText
                    text="© [Tahun] [Nama Perusahaan]. All rights reserved."
                    extraClass="!text-xs !font-normal !text-[color:var(--main-brown)]"
                />
            </div>

        </div>
    );
}

export default Footer;