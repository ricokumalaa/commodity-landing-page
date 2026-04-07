import { Noto_Serif } from 'next/font/google';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface textProps {
    text: string,
    extraClass?: string
}

const MainText = ({text, extraClass=""}:textProps) => {
    return (
        <p className={`${notoSerif.className} text-black font-bold ${extraClass}`}>   
            {text}
        </p>
    );
}

export default MainText;