'use client'

interface waTextProps{
    text: string;
}

const encodeWaText = ({text}: waTextProps) => {
    return encodeURIComponent(`${text}`);
}

export default encodeWaText;