import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const ProductDetail = () => {
    return(
        <div className="text-center">
            <SecondaryText
                text="Spesifikasi"
            />
            <ul className="list-disc text-left text-[color:var(--secondary-text)]">
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