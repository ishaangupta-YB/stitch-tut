import { useState, useRef } from "react";
import { useStaggerAnimation } from "../hooks/useStaggerAnimation";
import { works, TOTAL_WORKS } from "../data/works";

interface State1Props {
  isActive: boolean;
  isHidden: boolean;
}

/* 7 strips as indicated by the reference image analysis */
const STRIP_HEIGHTS = [70, 85, 95, 100, 95, 85, 70];

export function State1FeaturedWork({ isActive, isHidden }: State1Props) {
  const containerRef = useStaggerAnimation(isActive);
  const [currentIndex, setCurrentIndex] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const activeWork = works[currentIndex];
  const prevIndex = (currentIndex - 1 + TOTAL_WORKS) % TOTAL_WORKS;
  const nextIndex = (currentIndex + 1) % TOTAL_WORKS;

  const goPrev = () => {
    setCurrentIndex(prevIndex);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };
  const goNext = () => {
    setCurrentIndex(nextIndex);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  /* The layout alternates between placing the Beige Title card and the Black Badge 
     based on the current index (even/odd). */
  const titleIndex = currentIndex % 2 === 0 ? 5 : 1;
  const badgeIndex = currentIndex % 2 === 0 ? 1 : 5;

  /* Helper to format multi-line arrow labels matching the image */
  const formatArrowLabel = (title: string) => {
    return title.replace(" The ", " The\n").replace(" of ", " of\n");
  };

  return (
    <main
      ref={containerRef}
      className={`state-container h-full flex flex-col items-center justify-center px-4 pt-10 bg-background-light ${
        isHidden ? "state-hidden" : "state-visible"
      }`}
      id="state-1"
      aria-hidden={isHidden}
    >
      <div className="relative w-full max-w-[1100px] h-[60vh] md:h-[65vh] flex items-center justify-center">

        {/* LEFT NAV ARROW */}
        <button
          onClick={goPrev}
          className="absolute -left-16 md:-left-32 z-30 flex flex-col items-center gap-3 bg-transparent border-none cursor-pointer text-ink hover:opacity-70 transition-opacity p-0"
        >
          <span className="font-serif text-[8px] md:text-[9px] uppercase tracking-widest text-center text-ink/80 leading-relaxed whitespace-pre-wrap w-24">
            {formatArrowLabel(works[prevIndex].title)}
          </span>
          <span className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink">
              <path d="M19 12H5m0 0l7-7m-7 7l7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>

        {/* RIGHT NAV ARROW */}
        <button
          onClick={goNext}
          className="absolute -right-16 md:-right-32 z-30 flex flex-col items-center gap-3 bg-transparent border-none cursor-pointer text-ink hover:opacity-70 transition-opacity p-0"
        >
          <span className="font-serif text-[8px] md:text-[9px] uppercase tracking-widest text-center text-ink/80 leading-relaxed whitespace-pre-wrap w-24">
            {formatArrowLabel(works[nextIndex].title)}
          </span>
          <span className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink">
              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>

        {/* Z=0: SINGLE VIDEO */}
        <video
          ref={videoRef}
          key={currentIndex}
          autoPlay
          loop
          muted
          playsInline
          src={activeWork.videoUrl}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Z=10: HOLE PUNCH OVERLAY (Physical Beige blocks blocking video) */}
        <div className="absolute inset-0 z-10 flex flex-row">
          {STRIP_HEIGHTS.map((hPct, i) => {
             const isTitle = i === titleIndex;
             const isBadge = i === badgeIndex;

             return (
                <div key={i} className="flex h-full flex-1">
                  
                  {/* The Strip Column */}
                  <div className="flex flex-col flex-1 relative h-full">
                     {/* Top Cover */}
                     <div 
                       className="w-full bg-background-light z-20" 
                       style={{ height: `${(100 - hPct) / 2}%` }} 
                     />
                     
                     {/* The Transparent Hole (Video shines through) */}
                     {/* If it's the title index, it becomes solid beige blocking the video */}
                     <div 
                       className={`w-full flex-1 relative flex flex-col items-center justify-center ${
                         isTitle ? 'bg-background-light border-y-[0px] border-none shadow-[20px_0_50px_rgba(0,0,0,0.1)]' : 'bg-transparent shadow-[inset_0_2px_15px_rgba(0,0,0,0.15)]'
                       }`}
                     >
                         {/* TITLE BEIGE CARD */}
                         {isTitle && (
                             <div className="absolute inset-x-0 inset-y-[-1px] bg-background-light flex flex-col items-center justify-between py-6 md:py-10 z-30 pointer-events-auto">
                                 <div className="flex-1 flex items-center justify-center h-full max-h-full">
                                     <h2 
                                       className="font-display text-ink text-[2.5rem] md:text-[3.5rem] italic tracking-[-0.02em] whitespace-nowrap leading-none"
                                       style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
                                     >
                                       {activeWork.title}
                                     </h2>
                                 </div>
                                 <div className="flex flex-col items-center gap-3 mt-6">
                                     <span className="font-serif italic text-sm md:text-xl text-ink font-light">ℋ</span>
                                     <div className="text-ink text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.28em] font-serif uppercase text-center flex flex-col leading-loose">
                                       <span>Explore Song &</span>
                                       <span>Extra Material</span>
                                     </div>
                                 </div>
                             </div>
                         )}

                         {/* BLACK BADGE */}
                         {isBadge && (
                             <div className="absolute top-[35%] md:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121111] text-white w-[130%] pt-8 pb-4 flex flex-col items-center shadow-2xl z-40 pointer-events-auto">
                                 <div 
                                   className="font-serif text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.35em] uppercase text-[#F2F0E9] leading-tight whitespace-nowrap"
                                   style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
                                 >
                                   {activeWork.subtitle}
                                 </div>
                                 <div className="mt-8 md:mt-10 mb-2 w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                                     <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white md:w-[14px] md:h-[14px] ml-0.5">
                                       <path d="M8 5v14l11-7z" />
                                     </svg>
                                 </div>
                             </div>
                         )}
                     </div>

                     {/* Bottom Cover */}
                     <div 
                       className="w-full bg-background-light z-20" 
                       style={{ height: `${(100 - hPct) / 2}%` }} 
                     />
                  </div>

                  {/* Vertical gap space blocking the video, except after the last item */}
                  {i < STRIP_HEIGHTS.length - 1 && (
                      <div className="w-[6px] md:w-[10px] h-full bg-background-light z-30" />
                  )}

                </div>
             );
          })}
        </div>
      </div>
    </main>
  );
}
