import Image from "next/image";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";
import MainText from "../../shared/MainText/MainText";

interface cardsProps{
    title: string;
    subTitle: string;
    icon: React.ElementType;
    dataAos?: string;
    imageName: string;
    alt?: string;
    descTitle: string;
    descBody: string;
}

const TertiaryCatalogueCard = ({ title, subTitle, icon: Icon, dataAos, imageName, alt="", descTitle, descBody}: cardsProps) => {
    return (
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

                <div className="mt-5 p-3 bg-[var(--secondary-grey)]">
                    <div className="flex gap-x-3 items-center">
                        <Icon
                            extraClass="text-[var(--dark-green)]"
                        />
                        <SecondaryText
                            text={descTitle}
                            extraClass="!text-[color:var(--main-brown)] !text-sm tracking-widest"
                        />
                    </div>

                    <div  className="mt-2">
                        <SecondaryText
                            text={descBody}
                            extraClass="!text-[color:var(--main-brown)] text-xs sm:!text-sm !font-normal"
                        />
                    </div>
                </div>

                <div className="flex flex-col mt-2 p-1 border border-(--outline)">
                    <SecondaryText
                        text="REQUEST SAMPLE"
                        extraClass="!text-[color:var(--main-brown)] !text-xs tracking-widest text-center"
                    />
                    <SecondaryText
                        text="REQUEST SAMPLE"
                        extraClass="!text-[color:var(--main-brown)] !text-xs tracking-widest text-center"
                    />
                </div>

            </div>
        </div>
    );
}

export default TertiaryCatalogueCard;