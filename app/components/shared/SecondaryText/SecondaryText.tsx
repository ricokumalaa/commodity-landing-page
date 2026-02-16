interface textProps {
    text: string,
    extraClass?: string
}

const SecondaryText = ({text, extraClass=""}:textProps) => {
    return (
        <p className={`text-sm md:text-lg text-[color:var(--secondary-text)] font-semibold ${extraClass}`}>   
            {text}
        </p>
    );
}

export default SecondaryText;