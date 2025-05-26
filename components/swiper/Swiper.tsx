"use client";

import React, { useEffect, useRef, useState } from "react";

import SwiperItem from "@/components/swiper/SwiperItem";
import { getRefValue, useStateRef } from "@/hooks/useStateRef";
import { getTouchEventData } from "@/hooks/dom";

const MIN_SWIPE_REQUIRED = 40;
const TIME_TO_SWIPE_SLIDE = 7000;
function Swiper({ items }: { items: React.ReactNode[] }) {
  const startXRef = useRef(0);
  const curOffsetXRef = useRef(0);

  const minOffsetXRef = useRef(0);
  const containerRef = useRef<HTMLUListElement>(null);

  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);

  const [isSwiping, setIsSwiping] = useState(false);

  const [isMoving, setIsMoving] = useState(false);
  function onMove(e: MouseEvent | TouchEvent) {
    setIsMoving(true);
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(curOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = 0;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  }

  function onEnd() {
    setIsMoving(false);
    const containerWidth = getRefValue(containerRef)?.offsetWidth ?? 0;

    const curOffsetX = getRefValue(curOffsetXRef);

    let newOffsetX = getRefValue(offsetXRef);
    const diff = curOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        // swipe to the right if diff is positive
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        // swipe to the left if diff is negative
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    }

    newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;

    setIsSwiping(false);

    setOffsetX(newOffsetX);

    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onEnd);

    window.removeEventListener("touchmove", onMove);
    window.removeEventListener("touchend", onEnd);
  }

  function onStart(
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    e.preventDefault();
    setIsSwiping(true);
    curOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef)!;

    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);

    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  }

  function indicatorOnClick(index: number) {
    if (index > items.length - 1 || index < 0) return;
    const containerWidth = getRefValue(containerRef)?.offsetWidth ?? 0;

    setOffsetX(-(index * containerWidth));
  }
  // function startAutoSwipe() {
  // 	if (autoSwipeIntervalRef.current !== null) return;
  //
  // 	autoSwipeIntervalRef.current = setInterval(() => {
  // 		const container = getRefValue(containerRef);
  // 		const containerWidth = container?.offsetWidth ?? 0;
  // 		const nextIndex = (curIndex + 1) % items.length;
  //
  // 		setCurIndex(nextIndex);
  //
  // 		setOffsetX(-(nextIndex * containerWidth));
  // 	}, TIME_TO_SWIPE_SLIDE);
  // }
  //
  // function stopAutoSwipe() {
  // 	if (autoSwipeIntervalRef.current) {
  // 		clearInterval(autoSwipeIntervalRef.current);
  // 		autoSwipeIntervalRef.current = null;
  // 	}
  // }

  // useEffect(() => {
  // 	setIsClient(true);
  // }, []);
  //
  // useEffect(() => {
  // 	if (!isClient) return;
  // 	// Only start auto-swiping when neither swiping nor hovering is active
  // 	if (!isSwiping && !isHovering) {
  // 		startAutoSwipe();
  // 	} else {
  // 		stopAutoSwipe();
  // 	}
  //
  // 	return () => stopAutoSwipe();
  // }, [isSwiping, isHovering, curIndex,isClient]);

  return (
    <div
      className='w-full overflow-hidden max-w-full touch-pan-y  '
      onTouchStart={onStart}
      onMouseDown={onStart}
    >
      <ul
        className={`flex gap-4 min-w-full flex-row 
		         ${
               isSwiping
                 ? "transition-none"
                 : "transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
             } 
				    ${isMoving ? "pointer-events-none" : "pointer-events-auto"}
		  `}
        style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        draggable={false}
        ref={containerRef}
      >
        {items.map((item, i) => (
          <SwiperItem key={i} content={item} />
        ))}
      </ul>
    </div>
  );
}

export default Swiper;
