import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

interface cardsProps{
    title: string;
    content: string;
    icon: React.ElementType;
}

const KeyPointCatalogueCard = ({ title, content, icon: Icon }:cardsProps) => {
    return(
        <div className="flex flex-col w-full max-w-sm gap-y-3">
            <Icon
                extraClass="text-[var(--main-brown)]"
            />
            
            <MainText
                text={title}
                extraClass="!text-xl !font-normal"
            />

            <SecondaryText
                text={content}
                extraClass="!text-[color:var(--secondary-brown)] !font-normal"
            />
        </div>
    );
}

export default KeyPointCatalogueCard;