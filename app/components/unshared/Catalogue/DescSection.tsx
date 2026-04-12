import SecondaryText from "../../shared/SecondaryText/SecondaryText";
import MainText from "../../shared/MainText/MainText";
import BadgeCheck from "../Icon/BadgeCheck/BadgeCheck";

const DescSection = () => {
    return (
        <>
            <div className="flex-1 flex-col">
                <SecondaryText
                    text="B2B Supply Solutions"
                    extraClass="!text-[color:var(--main-green)]"
                />
                <MainText
                    text="Kemiri Superior"
                    extraClass="!text-[color:var(--main-brown)] text-5xl font-normal mt-2"
                />
                <MainText
                    text="Grade & Spesifikasi"
                    extraClass="!text-[color:var(--main-brown)] text-5xl font-normal"
                />
                <SecondaryText
                    text="Untuk industri pengolahan pangan dan formulasi kosmetik. Setiap batch dikendalikan dengan sistem iklim (climate-controlled) dan bersertifikat untuk ekspor global."
                    extraClass="!text-[color:var(--main-brown)] !text-lg !font-normal mt-5 w-full max-w-2xl"
                />
            </div>
            <div className="md:flex-none md:place-self-end w-full max-w-xs">
                <div className="grid grid-cols-5 items-center pl-7 py-5 bg-[color:var(--secondary-green)] rounded-lg">
                    <div className="row-span-2 col-span-1">
                        <BadgeCheck 
                            extraClass="h-8 w-8 text-[var(--main-green)]"
                        />
                    </div>
                    <div className="col-span-4 row-span-2">
                        <SecondaryText
                            text="SUPPLY STATUS"
                            extraClass="!text-[color:var(--main-green)] tracking-widest !text-xs !font-normal"
                        />
                        <SecondaryText
                            text="ALL DAY ALL YEAR"
                            extraClass="!text-[color:var(--main-green)] font-bold tracking-wide"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescSection;