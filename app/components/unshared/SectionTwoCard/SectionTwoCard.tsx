import { ReactNode } from "react";
import MainText from "../../shared/MainText/MainText";
import { execArgv } from "process";

interface cardsProps{
    text: string;
    icon: React.ElementType;
    extraClass?: string
}

const SectionTwoCard = ({ text, icon: Icon, extraClass="" }:cardsProps) => {
    return(
        <div className={`flex flex-col items-center gap-12 ${extraClass}`}>
            <Icon
                extraClass="h-10 w-10 lg:h-13 lg:w-13 text-[var(--main-green)]"
            />

            <MainText
                text={text}
                extraClass="text-sm lg:text-lg w-50"
            />
        </div>
    );
}

export default SectionTwoCard;