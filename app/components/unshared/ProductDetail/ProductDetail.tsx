import SecondaryText from "../../shared/SecondaryText/SecondaryText";
import MainText from "../../shared/MainText/MainText";

const ProductDetail = () => {
    return(
        <div className="flex flex-col rounded-2xl p-6" data-aos="flip-right">
            <div className="flex flex-row items-center gap-x-2">
                <MainText
                    text="02"
                    extraClass="p-2 bg-[color:var(--secondary-grey)] !text-[color:var(--main-brown)] text-xl rounded-md"
                />
                <MainText
                    text="Spesifikasi"
                    extraClass="!text-[color:var(--main-brown)] text-3xl"
                />
            </div>
            <div className="pl-12">
                <ul className="list-disc text-left text-[color:var(--main-brown)] text-sm md:text-base">
                    <li>
                        <SecondaryText
                            text="Origin: Nusa Tenggara Timur (NTT)"
                            extraClass="!text-[color:var(--main-brown)] !text-sm md:!text-base"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Moisture: Dry"
                            extraClass="!text-[color:var(--main-brown)] !text-sm md:!text-base"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Grade: Super"
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

export default ProductDetail;