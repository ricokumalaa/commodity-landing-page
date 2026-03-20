import React from "react";
import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

interface cardsProps{
    title: string;
    subTitle: string;
    icon: React.ElementType;
    extraClass?: string;
    dataAos?: string;
}

const WhyUsCard = ({ title, subTitle, icon: Icon, extraClass="", dataAos="" }:cardsProps) => {
    return(
        <div className="px-10 flex flex-col gap-y-3" data-aos={dataAos}>
            <Icon
                extraClass="h-10 w-10 lg:h-13 lg:w-13 text-[var(--main-green)]"
            />

            <MainText
                text={title}
            />

            <SecondaryText
                text={subTitle}
            />
        </div>
    );
}

export default WhyUsCard;