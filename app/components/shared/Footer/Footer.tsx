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
                        <div className="flex flex-row gap-x-1">
                            <SecondaryText
                                text="WhatsApp: "
                                extraClass="!font-normal text-xs text-white"
                            />
                            <Link href={`https://wa.me/6281288211755`}>
                                <SecondaryText
                                    text="0812-8821-1755"
                                    extraClass="!font-normal !text-xs md:!text-base text-green underline"
                                />
                            </Link>
                            <SecondaryText
                                text="/"
                                extraClass="!font-normal text-white"
                            />
                            <Link href={`https://wa.me/6281281797771`}>
                                <SecondaryText
                                    text="0812-8179-7771"
                                    extraClass="!font-normal !text-xs md:!text-base text-green underline"
                                />
                            </Link>
                        </div>
                        <SecondaryText
                            text="Email: mitrabumiorganikadmin@gmail.com"
                            extraClass="!font-normal text-white !text-xs md:!text-base"
                        />
                        <SecondaryText
                            text="Cengkareng, Jakarta Barat"
                            extraClass="!font-normal text-white !text-xs md:!text-base"
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
                            extraClass="!font-normal text-white !text-xs md:!text-base"
                        />
                        <SecondaryText
                            text=" 09.00 - 20.00 WIB"
                            extraClass="!font-normal text-white !text-xs md:!text-base"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center">
                <SecondaryText
                    text="© 2024 MITRA BUMI ORGANIK. All rights reserved."
                    extraClass="!text-xs !font-normal text-white"
                />
            </div>

        </div>
    );
}

export default Footer;