import MainText from "../../shared/MainText/MainText";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetail from "../ProductDetail/ProductDetail";

const SectionThree = () => {
    return(
        <div className="pt-10 pb-20 w-full max-w-7xl mx-auto px-10 flex flex-col justify-center items-center text-center gap-y-15">

            <MainText
                text="Produk Kami"
                extraClass="text-xl md:text-3xl"
            />

            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10">
                <ProductCard
                    text="Kemiri Bulat"
                    imageName="hero-banner.png"
                />

                <ProductCard
                    text="Kemiri Pecah 2"
                    imageName="hero-banner.png"
                />

                <ProductCard
                    text="Kemiri Menir"
                    imageName="hero-banner.png"
                />

                <ProductCard
                    text="Kemiri Asalan"
                    imageName="hero-banner.png"
                />
            </div>

            <ProductDetail/>

        </div>
    );
}

export default SectionThree;