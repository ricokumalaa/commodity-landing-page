import Image from "next/image";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";
import MainText from "../../shared/MainText/MainText";

interface cardsProps{
    title: string;
    subTitle: string;
    dataAos?: string;
    imageName: string;
    alt?: string;
    practicalSize: string;
    shellContent: string;
    supplyCapacity: string;
}

const SecondaryCatalogueCard = ({ title, subTitle, dataAos, imageName, alt="", practicalSize, shellContent, supplyCapacity }: cardsProps) => {
    return(
        <div className="w-full max-w-md mx-auto rounded-lg bg-[var(--foreground)] overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
                <Image
                    src={`/images/${imageName}`}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="py-5 px-3">
                
                <div>
                    <MainText
                        text={title}
                        extraClass="!text-[color:var(--main-brown)] !text-xl md:!text-2xl font-normal"
                    />
                    <SecondaryText
                        text={subTitle}
                        extraClass="!text-[color:var(--main-brown)] !text-xs sm:!text-sm !font-normal mt-2"
                    />
                </div>

                <div className="flex justify-between items-center mt-5">
                    <SecondaryText
                        text="Practical Size"
                        extraClass="!text-[color:var(--main-brown)] !text-sm !font-normal"
                    />
                    <SecondaryText
                        text={practicalSize}
                        extraClass="!text-[color:var(--main-brown)]"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <SecondaryText
                        text="Shell Content"
                        extraClass="!text-[color:var(--main-brown)] !text-sm !font-normal"
                    />
                    <SecondaryText
                        text={shellContent}
                        extraClass="!text-[color:var(--main-brown)]"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <SecondaryText
                        text="Supply Capacity"
                        extraClass="!text-[color:var(--main-brown)] !text-sm !font-normal"
                    />
                    <SecondaryText
                        text={supplyCapacity}
                        extraClass="!text-[color:var(--main-brown)]"
                    />
                </div>

            </div>
        </div>
    );
}

export default SecondaryCatalogueCard