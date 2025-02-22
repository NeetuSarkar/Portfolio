"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    link: string;
    img: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed] || "40s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[60vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[70vw] flex flex-col md:flex-row"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <blockquote className="flex gap-4 justify-center items-center flex-col md:flex-row">
              {/* Image on Top */}
              <div className="w-full flex justify-center items-center mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full max-w-[200px] md:max-w-[200px] xl:max-w-[200px] h-[150px] object-contain rounded-lg"
                />
              </div>
              {/* Content at the Bottom */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[#C1C2D3] text-sm md:text-lg leading-[1.6]">
                  {item.description}
                </p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <p className="flex items-center lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </p>
                </a>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
