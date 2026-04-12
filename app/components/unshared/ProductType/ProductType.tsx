import SecondaryText from "../../shared/SecondaryText/SecondaryText";
import MainText from "../../shared/MainText/MainText";
import { Main } from "next/document";

const ProductType = () => {
    return(
        <div className="flex flex-col text-left rounded-2xl p-6" data-aos="flip-left">
            <div className="flex flex-row items-center gap-x-2">
                <MainText
                    text="01"
                    extraClass="p-2 bg-[color:var(--secondary-grey)] !text-[color:var(--main-brown)] text-xl rounded-md"
                />
                <MainText
                    text="Varian Produk"
                    extraClass="!text-[color:var(--main-brown)] text-3xl"
                />
            </div>
            <div className="pl-12">
                <ul className="list-disc font-semibold text-left text-[color:var(--main-brown)] text-sm md:text-base">
                    <li>
                        <SecondaryText
                            text="Kemiri Bulat"
                            extraClass="!text-[color:var(--main-brown)] !text-sm md:!text-base"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Kemiri Pecah 2"
                            extraClass="!text-[color:var(--main-brown)] !text-sm md:!text-base"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Kemiri Menir"
                            extraClass="!text-[color:var(--main-brown)] !text-sm md:!text-base"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Custom"
                            extraClass="!text-[color:var(--main-brown)] !text-sm md:!text-base"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Packing: (25kg / 50kg / Custom)"
                            extraClass="!text-[color:var(--main-brown)] !text-sm md:!text-base"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProductType;