import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const ProductDetail = () => {
    return(
        <div className="flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg" data-aos="flip-right">
            <SecondaryText
                text="Spesifikasi"
                extraClass="!text-lg md:!text-xl"
            />
            <ul className="list-disc text-left text-[color:var(--secondary-text)] text-sm md:text-base">
                <li>
                    <SecondaryText
                        text="Origin: Nusa Tenggara Timur (NTT)"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Moisture: Dry"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Grade: Super"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Packing: (25kg / 50kg / Custom)"
                    />
                </li>
            </ul>
        </div>
    );
}

export default ProductDetail;