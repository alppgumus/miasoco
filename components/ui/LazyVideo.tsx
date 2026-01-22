"use client";
import React, { useRef, useEffect, useState } from 'react';

interface LazyVideoProps {
    src: string;
    mobileSrc?: string;
    type?: string;
    className?: string;
    style?: React.CSSProperties;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
}

/**
 * Performance-optimized video component that:
 * - Only loads video when it becomes visible (IntersectionObserver)
 * - Uses appropriate source for mobile vs desktop
 * - Pauses when out of viewport to save resources
 */
export function LazyVideo({
    src,
    mobileSrc,
    type = "video/webm",
    className = "",
    style = {},
    loop = true,
    muted = true,
    playsInline = true,
}: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Load and play when visible
                        if (!hasLoaded) {
                            video.load();
                            setHasLoaded(true);
                        }
                        video.play().catch(() => {
                            // Autoplay was prevented - that's ok
                        });
                    } else {
                        setIsVisible(false);
                        // Pause when not visible to save resources
                        video.pause();
                    }
                });
            },
            {
                rootMargin: '100px', // Start loading slightly before visible
                threshold: 0.1,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [hasLoaded]);

    const videoSrc = mobileSrc && isMobile ? mobileSrc : src;

    return (
        <video
            ref={videoRef}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            preload="none" // Critical: don't preload video
            className={className}
            style={style}
        >
            {hasLoaded && <source src={videoSrc} type={type} />}
        </video>
    );
}

export default LazyVideo;
