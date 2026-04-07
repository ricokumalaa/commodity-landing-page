import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const ProductType = () => {
    return(
        <div className="flex flex-col justify-center items-center text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg" data-aos="flip-left">
            <SecondaryText
                text="Varian Produk"
                extraClass="!text-lg md:!text-xl"
            />
            <ul className="list-decimal font-semibold text-left text-[color:var(--secondary-text)] text-sm md:text-base">
                <li>
                    <SecondaryText
                        text="Kemiri Bulat"
                        extraClass="!text-sm md:!text-base"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Kemiri Pecah 2"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Kemiri Menir"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Custom"
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

export default ProductType;