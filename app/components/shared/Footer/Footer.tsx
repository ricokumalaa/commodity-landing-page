import Link from "next/link";
import MainText from "../MainText/MainText";
import SecondaryText from "../SecondaryText/SecondaryText";

const Footer = () => {
    return(
        <div className="flex flex-col gap-y-5 pt-15 pb-3 w-full bg-[var(--main-brown)]">
            
            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-9/10 mx-auto tracking-wide xl:pl-30">
                <div className="flex flex-col gap-y-7 p-5">

                    <Link href={`/`}>
                        <div className={`font-serif italic tracking-tighter text-white w-full max-w-[150px] md:max-w-[190px] mx-auto md:mx-0`}>
                            <div className="text-2xl md:text-3xl">
                                MITRA<span className="font-bold not-italic text-amber-600">BUMI</span>
                            </div>
                            <div className="text-xs text-center font-bold not-italic text-amber-600 -mt-2">
                                ORGANIK
                            </div>
                        </div>
                    </Link>
                    
                    <div className="w-full max-w-sm">
                        <SecondaryText
                            text="Penyedia kemiri untuk kebutuhan perusahaan, industri, dan distributor"
                            extraClass="!font-normal text-white"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col gap-y-5 p-5">

                    <MainText
                        text="Informasi"
                        extraClass="text-lg md:text-xl text-white"
                    />

                    <div>
                        <SecondaryText
                            text="WhatsApp: 08xxxxxxx / 08xxxxxxxxx"
                            extraClass="!font-normal text-white"
                        />
                        <SecondaryText
                            text="Email: saels@perusahaan.com"
                            extraClass="!font-normal text-white"
                        />
                        <SecondaryText
                            text="Taman Semanan Indah, Jln Dharma Permai"
                            extraClass="!font-normal text-white"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-y-5 p-5">

                    <MainText
                        text="Jam Operasional"
                        extraClass="text-lg md:text-xl text-white"
                    />
                    
                    <div>
                        <SecondaryText
                            text="Senin - Minggu"
                            extraClass="!font-normal text-white"
                        />
                        <SecondaryText
                            text=" 09.00 - 20.00 WIB"
                            extraClass="!font-normal text-white"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center">
                <SecondaryText
                    text="© [Tahun] [Nama Perusahaan]. All rights reserved."
                    extraClass="!text-xs !font-normal text-white"
                />
            </div>

        </div>
    );
}

export default Footer;