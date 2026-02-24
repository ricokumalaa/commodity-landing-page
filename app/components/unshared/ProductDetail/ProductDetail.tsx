import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const ProductDetail = () => {
    return(
        <div className="border text-center">
            <SecondaryText
                text="Sepsifikasi"
            />
            <ul className="list-disc">
                <li>
                    <SecondaryText
                        text="Origin: Nusa Tenggara Timur (NTT)"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Packing: (25kg / 50kg / Custom)"
                    />
                </li>
                <li>
                    <SecondaryText
                        text="Grade: Super"
                    />
                </li>
            </ul>
        </div>
    );
}

export default ProductDetail;