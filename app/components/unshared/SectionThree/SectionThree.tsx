import MainText from "../../shared/MainText/MainText";

const SectionThree = () => {
    return(
        <div className="pt-10 pb-20 w-full max-w-7xl mx-auto px-10 flex flex-col justify-center items-center text-center border">

            <MainText
                text="Produk Kami"
                extraClass="text-lg md:text-2xl mb-15"
            />

            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-10 border">
                
                <div className="flex flex-col items-center gap-y-10 border">
                    test1
                    <MainText
                        text="OAKOSADAK"
                    />
                </div>

                <div className="flex flex-col items-center gap-y-10 border">
                    test2
                    <MainText
                        text="OAKOSADAK"
                    />
                </div>

                <div className="flex flex-col items-center gap-y-10 border">
                    test3
                    <MainText
                        text="OAKOSADAK"
                    />
                </div>

                <div className="flex flex-col items-center gap-y-10 border">
                    test4
                    <MainText
                        text="OAKOSADAK"
                    />
                </div>

            </div>

        </div>
    );
}

export default SectionThree;