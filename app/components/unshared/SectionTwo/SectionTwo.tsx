import MainText from "../../shared/MainText/MainText";
import Divider from "../Divider/Divider";
import FactoryIcon from "../FactoryIcon/FactoryIcon";
import GlobeIcon from "../GlobeIcon/GlobeIcon";
import PackageIcon from "../PackageIcon/PackageIcon";
import SectionTwoCard from "../SectionTwoCard/SectionTwoCard";
import TruckIcon from "../TruckIcon/TruckIcon";
import UtensilsIcon from "../UtensilsIcon/UtensilsIcon";

const SectionTwo = () => {
    return(
        <div className="pt-10 pb-20 w-full max-w-7xl mx-auto px-10 md:px-30 flex flex-col justify-center items-center text-center">
            <MainText
                text="Partner Pasokan Kemiri Untuk Perusahaan"
                extraClass="text-xl md:text-3xl mb-15"
            />

            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-16 gap-x-20 text-center items-center">
                {/* first row */}
                <SectionTwoCard
                    text="Pabrik makanan & bumbu"
                    icon={FactoryIcon}
                />

                <Divider/>

                <SectionTwoCard
                    text="Industri FMCG"
                    icon={PackageIcon}
                />

                <Divider/>
                
                <SectionTwoCard
                    text="Distributor Bahan Baku"
                    icon={TruckIcon}
                />

                {/* second row */}
                <SectionTwoCard
                    text="Hotel, Restoran, Catering (HORECA)"
                    icon={UtensilsIcon}
                    extraclass="md:col-start-2"
                />

                <Divider/>

                <SectionTwoCard
                    text="Exporter / Trader"
                    icon={GlobeIcon}
                    extraclass="md:col-start-4"
                />
            </div>
        </div>
    );
}

export default SectionTwo;