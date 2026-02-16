interface textProps {
    text: string,
    extraClass?: string
}

const MainText = ({text, extraClass=""}:textProps) => {
    return (
        <p className={`text-[color:var(--main-text)] font-bold ${extraClass}`}>   
            {text}
        </p>
    );
}

export default MainText;