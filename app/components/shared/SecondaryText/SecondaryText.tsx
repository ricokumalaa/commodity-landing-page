interface textProps {
    text: string,
    extraClass?: string
}

const SecondaryText = ({text, extraClass=""}:textProps) => {
    return (
        <p className={`p-0 m-0 text-sm md:text-base text-[color:var(--secondary-text)] font-semibold ${extraClass}`}>   
            {text}
        </p>
    );
}

export default SecondaryText;