// src/components/useCountUp.ts

import { useState, useEffect, useRef } from 'react';

export function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const animationFrameId = useRef<number>();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime: number | null = null;
                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const currentCount = Math.min(Math.floor((progress / duration) * end), end);
                        setCount(currentCount);

                        if (progress < duration) {
                            animationFrameId.current = requestAnimationFrame(animate);
                        } else {
                            setCount(end); // Ensure it ends on the exact number
                        }
                    };
                    animationFrameId.current = requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [end, duration]);

    return { count, ref };
}