import SecondaryText from "../SecondaryText/SecondaryText"; 

const SecondaryContactUsButton = () => {
    
    return (
        <div className="w-full bg-white rounded-lg">
            
            <div className="grid grid-cols-5 gap-x-2 items-center p-2">
                <div className="col-span-4">
                    <SecondaryText
                        text="Business Inquiries"
                        extraClass="!font-normal !text-xs !text-[color:var(--outline)] text-left pl-2"
                    />
                </div>

                <div className="col-span-1 p-2 bg-[var(--main-brown)] flex items-center justify-center rounded-md cursor-pointer transition duration-200 ease-out hover:scale-105">
                    <a href="">
                        <img src="https://cdn.simpleicons.org/whatsapp/FFFFFF" className="w-4 h-4"/>
                    </a>
                </div>
            </div>

        </div>
    );

};

export default SecondaryContactUsButton;