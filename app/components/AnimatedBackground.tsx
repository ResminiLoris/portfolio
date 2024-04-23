import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export const AnimatedBackground = () => {
    const [topOffset, setTopOffset] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const newY = topOffset + direction * 0.1; // Modifica la velocità del movimento cambiando il valore qui
            setTopOffset((prevOffset) => {
                const newOffset = prevOffset + direction * 0.1;
                if (newOffset <= 0) { // Assicura che l'immagine non salga più in alto della sua posizione di partenza
                    setDirection(1);
                    return 0;
                }
                if (newOffset >= 10) { // Modifica i valori qui per regolare il punto di svolta
                    setDirection(-1);
                }
                return newOffset;
            });
        }, 30); // Modifica la velocità dell'animazione cambiando il valore qui

        return () => clearInterval(interval);
    }, [direction, topOffset]);

    return (
        <div className="absolute bottom-0 z-[0] w-full h-auto">
            <Image
                src="/trees.webp"
                alt="trees"
                width={2000}
                height={2000}
                className="w-full h-full"
                style={{ transform: `translateY(${topOffset}px)` }}
            />
        </div>
    )
}
