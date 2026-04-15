import Image from "next/image";
import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

interface cardsProps{
    title: string;
    subTitle: string;
    moq: string;
    dataAos?: string;
    imageName: string;
    alt?: string;
    moisture: string;
    capacity: string;
}


const MainCatalogueCard = ({ title, subTitle, moq, dataAos, imageName, alt="", moisture, capacity}: cardsProps) => {
    return(
        <div className="w-full max-w-md lg:max-w-2xl mx-auto rounded-lg bg-[var(--foreground)] overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
                <Image
                    src={`/images/${imageName}`}
                    alt={alt}
                    fill
                    className="object-cover"
                />

                <div className="absolute top-4 left-4 bg-[var(--secondary-green)] px-3 py-1 rounded-full">
                    <SecondaryText
                        text="ORIGIN: EAST NUSA TENGGARA"
                        extraClass="!text-[color:var(--dark-green)] !text-xs"
                    />
                </div>
            </div>

            <div className="grid grid-cols-5 py-5 px-3">
                <div className="col-span-4 row-span-2">
                    <MainText
                        text={title}
                        extraClass="!text-[color:var(--main-brown)] !text-xl md:!text-2xl font-normal"
                    />
                    <SecondaryText
                        text={subTitle}
                        extraClass="!text-[color:var(--main-brown)] !text-xs sm:!text-sm !font-normal"
                    />
                </div>
                <div className="row-span-1 col-span-1">
                    <SecondaryText
                        text="MOQ"
                        extraClass="!text-[color:var(--main-grey)] !text-xs !font-normal tracking-widest text-right"
                    />
                    <SecondaryText
                        text={moq}
                        extraClass="!text-[color:var(--main-brown)] text-right"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-5 px-3">
                <div>
                    <SecondaryText
                        text="MOISTURE"
                        extraClass="!text-[color:var(--main-grey)] !text-xs !font-normal tracking-widest"
                    />
                    <SecondaryText
                        text={moisture}
                        extraClass="!text-[color:var(--main-brown)]"
                    />
                </div>
                <div>
                    <SecondaryText
                        text="CAPACITY"
                        extraClass="!text-[color:var(--main-grey)] !text-xs !font-normal tracking-widest"
                    />
                    <SecondaryText
                        text={capacity}
                        extraClass="!text-[color:var(--main-brown)]"
                    />
                </div>
            </div>

            <div className="mt-10 mb-15 px-3">
                <SecondaryText
                    text="Vacuum Packed"
                    extraClass="!text-[color:var(--main-brown)] !text-xs !font-bold tracking-widest"
                />
            </div>
        </div>
    );
}

export default MainCatalogueCard;