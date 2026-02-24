import Image from "next/image";
import MainText from "../../shared/MainText/MainText";

interface ProductProps {
    text: string;
    imageName: string;
    alt?:string;
    extraClass?: string;
}

const ProductCard = ({ text, imageName, alt="", extraClass="" }:ProductProps) => {
    return(
        <div className="flex flex-col items-center gap-y-10">
            <Image
                src={`/images/${imageName}`}
                alt={alt}
                width={200}
                height={200}
                className="rounded-2xl shadow-md"
            />
            <MainText
                text={text}
                extraClass="text-sm lg:text-lg w-50"
            />
        </div>
    );
}

export default ProductCard;