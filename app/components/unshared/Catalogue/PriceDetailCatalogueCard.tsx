import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

const PriceDetailCatalogueCard = () => {
    return(
        <div className="w-full max-w-md lg:max-w-2xl mx-auto rounded-lg bg-[var(--main-brown)] px-5 py-25">
            
            <MainText
                text="Harga Berdasarkan Volume"
                extraClass="!text-white !font-normal text-lg md:text-xl"
            />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-7 items-end">

                <div className="lg:col-span-3">
                    <SecondaryText
                        text="Harga ditentukan sesuai dengan jumlah pembelian, sehingga semakin besar volume, semakin kompetitif nilai yang ditawarkan."
                        extraClass="!text-xs md:!text-sm !font-normal"
                    />
                </div>

                <div className="lg:col-span-2 grid grid-cols-2 gap-2">
                    <div className="p-5 text-center bg-[var(--light-brown)] rounded-lg">
                        <SecondaryText
                            text="1 - 5 TONS"
                            extraClass="!text-[color:var(--outline)] !text-xs !font-bold"
                        />
                        <SecondaryText
                            text="Standard"
                            extraClass="!text-white !font-bold mt-1"
                        />
                    </div>
                    <div className="p-5 text-center bg-[var(--light-brown)] rounded-lg">
                        <SecondaryText
                            text="10+ TONS"
                            extraClass="!text-[color:var(--outline)] !text-xs !font-bold"
                        />
                        <SecondaryText
                            text="Priority"
                            extraClass="!text-white !font-bold mt-1"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PriceDetailCatalogueCard;