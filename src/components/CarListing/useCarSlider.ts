import { useState, useEffect, useCallback } from 'react';

const SLIDE_DURATION = 5000; // 5 seconds per slide

export const useCarSlider = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [lastTick, setLastTick] = useState(Date.now());

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
    setLastTick(Date.now());
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
    setLastTick(Date.now());
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - lastTick;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;

      if (newProgress >= 100) {
        nextSlide();
      } else {
        setProgress(newProgress);
        requestAnimationFrame(updateProgress);
      }
    };

    const animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, lastTick, nextSlide]);

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
    setIsPaused(true);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setIsPaused(false);
    setLastTick(Date.now());
  };

  return {
    currentSlide,
    isPaused,
    hoveredCard,
    progress,
    nextSlide,
    previousSlide,
    handleCardHover,
    handleCardLeave,
  };
};