"use client";

import Script from "next/script";

const ContactUsAnimation = () => {
    return(
         <>
            <Script
                src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
                strategy="afterInteractive"
            />

            <lottie-player
                autoplay
                loop
                src="/animations/contact-us.json"
                className="w-full h-full max-w-[350px] max-h-[350px]"
            />
        </>
    );
};

export default ContactUsAnimation;