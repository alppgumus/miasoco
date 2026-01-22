"use client";
import { useState, useEffect } from 'react';
import AnimatedList from './ui/animations/AnimatedList';

const notifications = [
  {
    name: "You have a new order",
    description: "miaso",
    icon: "💰",
    color: "#00C9A7",
    time: "Just now",
  },
  {
    name: "New follower from Instagram",
    description: "miaso",
    icon: "📸",
    color: "#E1306C",
    time: "1 min ago",
  },
  {
    name: "New like on TikTok",
    description: "miaso",
    icon: "🎵",
    color: "#000000",
    time: "2 min ago",
  },
  {
    name: "You have a new message",
    description: "miaso",
    icon: "💬",
    color: "#4f46e5",
    time: "3 min ago",
  },
  {
    name: "New like on Facebook",
    description: "miaso",
    icon: "👍",
    color: "#4267B2",
    time: "5 min ago",
  }
];

// Only repeat 2x instead of 10x for better mobile performance
const repeatedNotifications = [...notifications, ...notifications];

interface NotificationCardProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const NotificationCard = ({ name, description, icon, color, time }: NotificationCardProps) => {
  return (
    <figure
      className="relative mx-auto min-h-fit w-full max-w-[400px] overflow-hidden rounded-xl p-4 transition-all duration-200 ease-in-out hover:scale-[102%] bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg"
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1 opacity-50">·</span>
            <span className="text-xs text-gray-400">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function HeroVisual() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return placeholder with same dimensions to prevent CLS
    return (
      <div className="relative w-full max-w-[1080px] mx-auto">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-xl overflow-hidden bg-transparent" />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[1080px] mx-auto">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] w-full rounded-xl overflow-hidden bg-transparent">
        <div className="relative h-full w-full rounded-xl z-[3]">
          <div className="h-full overflow-hidden p-4 lg:p-6">
            <AnimatedList delay={800} className="space-y-3 lg:space-y-4">
              {repeatedNotifications.map((item, idx) => (
                <NotificationCard key={idx} {...item} />
              ))}
            </AnimatedList>

            <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-transparent via-zinc-900/80 to-zinc-900 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}