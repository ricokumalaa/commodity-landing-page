interface IconProps {
    extraClass?: string;
}

const InfinityIcon = ({ extraClass="" }:IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className={`lucide lucide-infinity-icon lucide-infinity ${extraClass}`}>
            <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/>
        </svg>
    );
}

export default InfinityIcon;