"use client";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const AnimatedList = React.memo(({
  className,
  children,
  delay = 1000
}: AnimatedListProps) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // On mobile, show only first 3 items without animation loop
    const maxItems = isMobile ? 3 : childrenArray.length - 1;

    if (index < maxItems) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [index, delay, childrenArray.length, isMobile]);

  const itemsToShow = useMemo(() => {
    // Limit items on mobile for better performance
    const maxShow = isMobile ? Math.min(index + 1, 3) : index + 1;
    const result = childrenArray.slice(0, maxShow).reverse();
    return result;
  }, [index, childrenArray, isMobile]);

  return (
    <div className={`flex flex-col items-center gap-4 min-h-[200px] ${className}`}>
      <AnimatePresence>
        {React.Children.map(itemsToShow, (item, idx) => (
          <AnimatedListItem key={React.isValidElement(item) ? item.key : idx} isMobile={isMobile}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

AnimatedList.displayName = "AnimatedList";

export default AnimatedList;

const AnimatedListItem = ({
  children,
  isMobile = false
}: {
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  // Simpler animations on mobile
  const animations = isMobile ? {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  } : {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout={!isMobile} className="mx-auto w-full">
      {children}
    </motion.div>
  );
};

export { AnimatedListItem };