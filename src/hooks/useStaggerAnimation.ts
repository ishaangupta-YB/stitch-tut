import { useEffect, useRef } from "react";

export function useStaggerAnimation(isActive: boolean) {
  const containerRef = useRef<HTMLElement>(null);
  const wasActive = useRef<boolean>(isActive);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = Array.from(containerRef.current.querySelectorAll('.stagger-item')) as HTMLElement[];
    
    // Ensure randomized delays are computed exactly once per item
    items.forEach((item) => {
      if (!item.dataset.delay) {
        item.dataset.delay = String(Math.random() * 400); // 0 to 400ms delay
      }
    });
    
    // Animate smoothly between states only on changes
    if (isActive !== wasActive.current) {
      if (isActive) {
        // Entering: snap to cinematic 0.96 scale instantly
        items.forEach((item) => {
          item.style.transition = 'none';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
        });
        
        // Next frame: add transition css back and set to 1.0
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            items.forEach((item) => {
              item.style.transition = `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${item.dataset.delay}ms`;
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            });
          });
        });
      } else {
        // Exiting: smoothly transition to 0.9 scale
        items.forEach((item) => {
          item.style.transition = `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${item.dataset.delay}ms`;
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
        });
      }
      wasActive.current = isActive;
    } else {
       // Initial rendering without firing heavy transition hooks
       items.forEach((item) => {
          if (isActive) {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
          }
       });
    }
  }, [isActive]);

  return containerRef;
}
