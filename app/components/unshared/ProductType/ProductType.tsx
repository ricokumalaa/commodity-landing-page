import SecondaryText from "../../shared/SecondaryText/SecondaryText";
import MainText from "../../shared/MainText/MainText";
import { Main } from "next/document";

const ProductType = () => {
    return(
        <div className="flex flex-col text-left rounded-2xl p-6" data-aos="flip-left">
            <div className="flex flex-row items-center gap-x-2">
                <MainText
                    text="Varian"
                    extraClass="!text-[color:var(--main-brown)] text-4xl !font-normal"
                />
            </div>

            <div className="flex flex-col gap-y-1 mt-8">
                <div className="flex flex-row items-center gap-x-5">
                    <MainText
                        text="01"
                        extraClass="p-2 bg-[color:var(--secondary-grey)] !text-[color:var(--main-brown)] text-xs rounded-lg"
                    />
                    <SecondaryText
                        text="Kemiri Bulat"
                        extraClass="!text-[color:var(--main-brown)] !text-sm"
                    />
                </div>
                <div className="flex flex-row items-center gap-x-5">
                    <MainText
                        text="02"
                        extraClass="p-2 bg-[color:var(--secondary-grey)] !text-[color:var(--main-brown)] text-xs rounded-lg"
                    />
                    <SecondaryText
                        text="Kemiri Pecah 2"
                        extraClass="!text-[color:var(--main-brown)] !text-sm"
                    />
                </div>
                <div className="flex flex-row items-center gap-x-5">
                    <MainText
                        text="03"
                        extraClass="p-2 bg-[color:var(--secondary-grey)] !text-[color:var(--main-brown)] text-xs rounded-lg"
                    />
                    <SecondaryText
                        text="Kemiri Menir"
                        extraClass="!text-[color:var(--main-brown)] !text-sm"
                    />
                </div>
                <div className="flex flex-row items-center gap-x-5">
                    <MainText
                        text="04"
                        extraClass="p-2 bg-[color:var(--secondary-grey)] !text-[color:var(--main-brown)] text-xs rounded-lg"
                    />
                    <SecondaryText
                        text="Custom"
                        extraClass="!text-[color:var(--main-brown)] !text-sm"
                    />
                </div>
                <div className="flex flex-row items-center gap-x-5">
                    <MainText
                        text="05"
                        extraClass="p-2 bg-[color:var(--secondary-grey)] !text-[color:var(--main-brown)] text-xs rounded-lg"
                    />
                    <SecondaryText
                        text="Packing: (25kg / 50kg / Custom)"
                        extraClass="!text-[color:var(--main-brown)] !text-sm"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductType;