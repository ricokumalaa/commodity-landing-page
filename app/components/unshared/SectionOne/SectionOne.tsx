import MainText from "../../shared/MainText/MainText";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";
import HandshakeIcon from "../HandshakeIcon/HandshakeIcon";
import RepeatIcon from "../RepeatIcon/RepeatIcon";
import ScaleIcon from "../ScaleIcon/ScaleIcon";

const SectionOne = () => {
    return (
        <div className="py-20 flex justify-center items-center text-center">
            <div className="w-full max-w-7xl mx-auto px-10">
                <div className="w-full max-w-5xl mx-auto">
                    <SecondaryText 
                        text="Melayani pembelian dalam jumlah besar untuk manufaktur, F&B, dan distributor. Kualitas terstandar, siap kirim ke seluruh Indonesia."
                    />
                </div>

                <div className="py-10 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
                    <div className="flex flex-col items-center gap-y-10 py-12 rounded-2xl shadow-lg bg-[var(--secondary-green)] w-full max-w-2xs">
                        <HandshakeIcon
                            extraClass="h-10 w-10 lg:h-13 lg:w-13 text-[var(--main-green)]"
                        />
                        <MainText
                            text="Negosiasi Sekarang"
                            extraClass="text-sm lg:text-lg w-50"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-y-10 py-12 rounded-2xl shadow-lg bg-[var(--secondary-green)] w-full max-w-2xs">
                        <RepeatIcon
                            extraClass="h-10 w-10 lg:h-13 lg:w-13 text-[var(--main-green)]"
                        />
                        <MainText
                            text="Supply Stabil & Konsisten"
                            extraClass="text-sm lg:text-lg w-full max-w-40"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-y-10 py-12 rounded-2xl shadow-lg bg-[var(--secondary-green)] w-full max-w-2xs">
                        <ScaleIcon
                            extraClass="h-10 w-10 lg:h-13 lg:w-13 text-[var(--main-green)]"
                        />
                        <MainText
                            text="Harga Transparan & Kompetitif"
                            extraClass="text-sm lg:text-lg w-full max-w-50"
                        />
                    </div>
                </div>

                <div className="w-full max-w-6xl mx-auto bg-[var(--main-green)] rounded-full py-3 px-6 flex items-center justify-center">
                    <SecondaryText
                        text="Cepat Sampai Bebas Worry (7 Hari Delivery)*"
                        extraClass="!text-[color:var(--secondary-green)] !text-sm !md:text-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionOne;