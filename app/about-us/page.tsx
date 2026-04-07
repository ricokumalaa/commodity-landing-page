import Image from "next/image";
import SecondaryText from "../components/shared/SecondaryText/SecondaryText";
import MainText from "../components/shared/MainText/MainText";

export default function AboutUs() {
    return (
        <main className="py-16">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end gap-10 mt-30 px-10">
                <div className="flex-2">
                    <SecondaryText
                        text="B2B Partnership"
                        extraClass="!text-[color:var(--dark-green)]"
                    />
                    <MainText
                        text="Tentang Kami"
                        extraClass="!text-[color:var(--main-brown)] font-normal text-6xl mt-2 mb-7"
                    />
                    <SecondaryText
                        text="Mengamankan supply langsung kemiri kualitas premium. hingga distribusi global, kami menyesuaikan hasil panen sesuai dengan spesifikasi tahunan Anda"
                        extraClass="!text-[color:var(--secondary-brown)] w-full max-w-xl"
                    />
                </div>
                <div className="flex-1">
                    <Image
                        src={`/images/shock.png`}
                        alt="shock"
                        width={350}
                        height={350}
                        className="rounded-md shadow-md"
                    />
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto mt-20 px-10">

                <SecondaryText
                    text="Didirikan sejak tahun 2000, perusahaan kami berfokus pada penyediaan kemiri berkualitas premium langsung dari sumber asal di Indonesia (NTT). Dengan pengalaman panjang dalam industri pertanian Lokal dan perdagangan internasional, kami berkomitmen menghadirkan produk yang memenuhi standar global."
                    extraClass="!text-[color:var(--secondary-brown)]"
                />
                <SecondaryText
                    text="Kami mengutamakan:"
                    extraClass="!text-[color:var(--secondary-brown)] mt-5"
                />
                <ul className="pl-15 list-disc">
                    <li>
                        <SecondaryText
                            text="Kualitas Ekspor Premium: setiap butir kemiri disortir secara manual untuk keseragaman ukuran dan warna"
                            extraClass="!text-[color:var(--secondary-brown)]"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Keamanan: setiap batch dikendalikan dengan sistem iklim (climate-controlled)"
                            extraClass="!text-[color:var(--secondary-brown)]"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Fleksibilitas Produk: tersedia dalam bentuk utuh, setengah maupun pecahan sesuai kebutuhan industri."
                            extraClass="!text-[color:var(--secondary-brown)]"
                        />
                    </li>
                    <li>
                        <SecondaryText
                            text="Layanan Global: dari nama perusahaan hingga distribusi skala besar, kami menyesuaikan hasil panen dengan spesifikasi tahunan pelanggan."
                            extraClass="!text-[color:var(--secondary-brown)]"
                        />
                    </li>
                </ul>

                <SecondaryText
                    text="Dengan jaringan distribusi yang luas dan standar mutu yang konsisten, kami siap menjadi mitra terpercaya dalam memenuhi kebutuhan industri pangan, ekstraksi minyak, maupun formulasi kosmetik."
                    extraClass="!text-[color:var(--secondary-brown)] mt-5"
                />

                <SecondaryText
                    text="STANDARD RESPONSE"
                    extraClass="!text-[color:var(--outline)] !text-xs opacity-75 tracking-wide mt-10"
                />
                <SecondaryText
                    text="4 Business Hours"
                    extraClass="!text-[color:var(--main-brown)]"
                />
                <SecondaryText
                    text="LOGISTIC SUPPORT"
                    extraClass="!text-[color:var(--outline)] !text-xs opacity-75 tracking-wide mt-5"
                />
                <SecondaryText
                    text="Door-to-Door Global Delivery"
                    extraClass="!text-[color:var(--main-brown)]"
                />

            </div>
        </main>
    );
}