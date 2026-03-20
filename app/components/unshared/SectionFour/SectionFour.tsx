import MainText from "../../shared/MainText/MainText";
import WhyUsCard from "../WhyUsCard/WhyUsCard";
import ClipBoardCheckIcon from "../Icon/ClipboardCheckIcon/ClipBoardCheckIcon";
import AlarmClockCheckIcon from "../Icon/AlarmClockCheckIcon/AlarmClockCheckIcon";
import BadgePercent from "../Icon/BadgePercent/BadgePercent";
import BlocksIcon from "../Icon/BlocksIcon/BlocksIcon";
import InfinityIcon from "../Icon/InfinityIcon/InfinityIcon";

const SectionFour = () => {
    return(
        <div className="pt-10 pb-20 w-full max-w-5xl mx-auto px-10 flex flex-col justify-center items-center gap-y-15">
            <MainText
                text="Why Choose Us?"
                extraClass="text-xl md:text-3xl"
            />

            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-3">
                <WhyUsCard
                    title="Supply Stabil & Konsisten"
                    subTitle="Pasokan terjaga untuk kebutuhan rutin maupun jangka panjang."
                    icon={InfinityIcon}
                    dataAos="zoom-in-right"
                />
                <WhyUsCard
                    title="Quality control & sortasi"
                    subTitle="Disortir dan dicek untuk memastikan kualitas sesuai standar produksi."
                    icon={ClipBoardCheckIcon}
                    dataAos="zoom-in-left"
                />
                <WhyUsCard
                    title="Pengiriman tepat waktu"
                    subTitle="Pengiriman terjadwal dan dapat disesuaikan dengan kebutuhan operasional."
                    icon={AlarmClockCheckIcon}
                    dataAos="zoom-in-right"
                />
                <WhyUsCard
                    title="Harga transparan & kompetitif"
                    subTitle="Struktur harga jelas, menyesuaikan volume dan spesifikasi."
                    icon={BadgePercent}
                    dataAos="zoom-in-left"
                />
                <WhyUsCard
                    title="Melayani Berbagai Sektor Industri"
                    subTitle="Pasokan terjaga untuk kebutuhan rutin maupun jangka panjang."
                    icon={BlocksIcon}
                    dataAos="zoom-in-right"
                />
            </div>
        </div>
    );
}

export default SectionFour;