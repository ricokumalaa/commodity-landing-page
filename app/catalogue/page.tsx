import DescSection from "../components/unshared/Catalogue/DescSection";
import MainCatalogueCard from "../components/unshared/Catalogue/MainCatalogueCard";
import SecondaryCatalogueCard from "../components/unshared/Catalogue/SecondaryCatalogueCard";
import TertiaryCatalogueCard from "../components/unshared/Catalogue/TertiaryCatalogueCard";
import PriceDetailCatalogueCard from "../components/unshared/Catalogue/PriceDetailCatalogueCard";
import FlaskConical from "../components/unshared/Icon/Flask-Conical/FlaskConical";
import KeyPointCatalogueCard from "../components/unshared/Catalogue/KeyPointCatalogueCard";
import Chain from "../components/unshared/Icon/ChainIcon/Chain";
import ShieldCheck from "../components/unshared/Icon/ShieldCheckIcon/ShieldCheck";
import Earth from "../components/unshared/Icon/EarthIcon/Earth";

export default function Catalogue() {
    return (
        <main className="py-16">

            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row content-end gap-y-4 mt-30 px-10">
                <DescSection/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto items-start py-20 px-10">

                <div className="lg:col-span-3 flex flex-col gap-y-7">
                    
                    <MainCatalogueCard
                        imageName="shock.png"
                        title="Grade Super Whole"
                        subTitle="Disortir secara manual untuk keseragaman ukuran dan warna."
                        moisture="< 7.0% Max (Dry)"
                        capacity="100 Tons / Month"
                    />

                    <PriceDetailCatalogueCard/>

                </div>

                <div className="lg:col-span-2 flex flex-col gap-y-7">
                    <SecondaryCatalogueCard
                        imageName="shock.png"
                        title="Grade Super Split / Halved"
                        subTitle="Ideal untuk industri Ekstrasi Minyak"
                        practicalSize="Halved or by Request"
                        shellContent="< 0.1%"
                    />

                    <TertiaryCatalogueCard
                        title="Grade Super Crushed"
                        subTitle="Ideal untuk Industri rempah atau minyak"
                        icon={FlaskConical}
                        imageName="shock.png"
                        descTitle="QUALITY CHECK"
                        descBody="Akan dikirim sekitar ± 3 kg kepada pelanggan yang meminta sampel. Produk dapat berupa utuh, dihancurkan, atau dibelah dua sesuai kebutuhan."
                    />
                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto py-5 lg:py-20 px-10 gap-y-10 lg:gap-x-10">
                <KeyPointCatalogueCard
                    title="Integrated Supply Chain"
                    content="Kami mengelola proses dari pengumpulan pasca panen hingga penggilingan akhir, memastikan 100% kualitas premium."
                    icon={Chain}
                />

                <KeyPointCatalogueCard
                    title="Global Logistics"
                    content="Kami menyediakan pengiriman ke berbagai negara dengan proses yang mudah dan aman, langsung ke pelabuhan atau perusahaan."
                    icon={Earth}
                />

                <KeyPointCatalogueCard
                    title="Quality Assurance"
                    content="Setiap produk kami dicek terlebih dahulu untuk memastikan aman, bersih, dan layak digunakan sebelum dikirim."
                    icon={ShieldCheck}
                />
            </div>

        </main>
    );
}