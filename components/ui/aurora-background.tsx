"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SSR and initial load - simple static background
  if (!isMounted) {
    return (
      <div className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 text-white pt-[72px]",
        className
      )}>
        {children}
      </div>
    );
  }

  // Mobile - lighter aurora effect (no blur, reduced animation)
  if (isMobile) {
    return (
      <main>
        <div
          className={cn(
            "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 text-white pt-[72px]",
            className
          )}
          {...props}
        >
          {/* Mobile-optimized aurora - no blur filter, simpler gradient, slower animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={cn(
                `
                [--aurora:linear-gradient(135deg,var(--blue-500)_10%,var(--indigo-300)_30%,var(--violet-200)_50%,var(--blue-400)_70%)]
                [background-image:var(--aurora)]
                [background-size:200%_200%]
                animate-aurora-mobile
                pointer-events-none
                absolute inset-0 opacity-40`,
                showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
              )}
            ></div>
          </div>
          {children}
        </div>
      </main>
    );
  }

  // Desktop - full aurora effect
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-900 text-white transition-bg pt-[72px]",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
              [background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px]
              after:content-[""] after:absolute after:inset-0 
              after:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,_100%] 
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};