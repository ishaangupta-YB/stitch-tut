import { useState } from "react";
import { useStaggerAnimation } from "../hooks/useStaggerAnimation";
import { works } from "../data/works";

interface State2Props {
  isActive: boolean;
  isHidden: boolean;
}

export function State2Grid({ isActive, isHidden }: State2Props) {
  const containerRef = useStaggerAnimation(isActive);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredIndex(index);
    const video = e.currentTarget.querySelector("video");
    if (video) video.play();
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      // Keep current time, or reset it
    }
  };

  const handleContainerMouseLeave = () => {
    setHoveredIndex(null);
  };

  const slicesData = [
    {
      index: 0,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[70%]",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCFICwfQ6E34xHcGCdL4RYWgzjuUDPdtI9_w_0nFZLxAIa7JKq7VQwtJQ-L2LffoJFuzxl_jnIsU7RKDNfoqpSpIfhnJyhkne2knB4_bxRhTDuOvbvDTN_gxoEZMB3Zx78i_nAnjB4l4gyR6W9zzv-n70A4XCRrFpsC-sLTkeKce9yJekdZDFbiC50BmKBfdjotecXJsu2qpThF57t7jqGH0tQUEjaRh2_pKPFszKAjuU_7jhzmLXOhMpJcrDN1yKnnw5DddrnKgf",
      videoUrl: "https://cdn.pixabay.com/video/2020/11/07/55718-503971825_large.mp4"
    },
    {
      index: 1,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[90%] md:block",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCip72Ejm7ZM--2YPQWmcDms6WGwuOPYd7DLyl24UM8FytAJFXIzWc7mPUTpMtLVlrkMFORV0vUezSIk1r3LauP6hZhWmVHxRIJcHf4HXF6Yt0qAXjSK5nhdglod1eE6zaPyGS0NHVOb0_3uoO9tt82ph7Wjjcb-nnIbqEZ4wiHd3TxtOFXE7eFyWfcjI4tlJ3mRBGwCvwLZK9C4mjjCWBlivwzFn7TiKBawHOEOzuUaJsLaykLo5I5g3m3aLLeIfgK4mnF7eddTqvN",
      videoUrl: "https://cdn.pixabay.com/video/2019/12/12/30121-380473626_large.mp4"
    },
    {
      index: 2,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[80%] hidden sm:block",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWnL6WB1SVRomllj2Vb_VQOl3_0oZCo-lFBcV7nnDAuezAwdZysgTTH9FrHsApxan3u-h1xo3VYks4VdwqWCrZxlx_vjmTAEMxcGL8c7T7gfeA9xjeqsgQSSxwh_K5hzCcnHMGh8pfvMdVsbpjXeCGgWUtnapJpDmrLyjuWBdsfYPD6vEnjl-VYE3NRS39REITqbyR7jgco-GVHQM771sf69zh3E-5TwyTt3RpEY0la2RmhpgMHpOU5tNMihb2vgPZkjoSb5sE1i-x",
      videoUrl: "https://cdn.pixabay.com/video/2024/03/03/202813-918944372_large.mp4"
    },
    {
      index: 3,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[85%] hidden md:block",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABl1QYmMD7PxoBzYu4TCLxd1KTkn0GZA5jAx3TZ0wYX88i4_4wB-SS4bnzzG0jZsgTTrO_hdVpRQGpbeofofcwyZWz-t2G_wP9Ze8mj-ikgzKqFZzTjnCVAsuadnSw996MwzSlbl0_yB3_er9CvPtXbVjXdkr_GZO_DyuPKgAHxGnARdt0eT6Ok9eOJIDw6fKYBP9M-IsQ08t6G2ZquV4OPfrSW99Tz6Osub2oOcryDcUjHbxMrRGLSWjOKLEuOFrLwRumPLRWOqBo",
      videoUrl: "https://cdn.pixabay.com/video/2025/10/12/309451_large.mp4"
    },
    {
      index: 4,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[70%]",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCip72Ejm7ZM--2YPQWmcDms6WGwuOPYd7DLyl24UM8FytAJFXIzWc7mPUTpMtLVlrkMFORV0vUezSIk1r3LauP6hZhWmVHxRIJcHf4HXF6Yt0qAXjSK5nhdglod1eE6zaPyGS0NHVOb0_3uoO9tt82ph7Wjjcb-nnIbqEZ4wiHd3TxtOFXE7eFyWfcjI4tlJ3mRBGwCvwLZK9C4mjjCWBlivwzFn7TiKBawHOEOzuUaJsLaykLo5I5g3m3aLLeIfgK4mnF7eddTqvN",
      videoUrl: "https://cdn.pixabay.com/video/2020/05/06/38270-415950888_large.mp4"
    },
    {
      index: 5,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[100%] hidden md:block",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWnL6WB1SVRomllj2Vb_VQOl3_0oZCo-lFBcV7nnDAuezAwdZysgTTH9FrHsApxan3u-h1xo3VYks4VdwqWCrZxlx_vjmTAEMxcGL8c7T7gfeA9xjeqsgQSSxwh_K5hzCcnHMGh8pfvMdVsbpjXeCGgWUtnapJpDmrLyjuWBdsfYPD6vEnjl-VYE3NRS39REITqbyR7jgco-GVHQM771sf69zh3E-5TwyTt3RpEY0la2RmhpgMHpOU5tNMihb2vgPZkjoSb5sE1i-x",
      videoUrl: "https://cdn.pixabay.com/video/2024/03/03/202813-918944372_large.mp4"
    },
    {
      index: 6,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[75%] hidden sm:block",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABl1QYmMD7PxoBzYu4TCLxd1KTkn0GZA5jAx3TZ0wYX88i4_4wB-SS4bnzzG0jZsgTTrO_hdVpRQGpbeofofcwyZWz-t2G_wP9Ze8mj-ikgzKqFZzTjnCVAsuadnSw996MwzSlbl0_yB3_er9CvPtXbVjXdkr_GZO_DyuPKgAHxGnARdt0eT6Ok9eOJIDw6fKYBP9M-IsQ08t6G2ZquV4OPfrSW99Tz6Osub2oOcryDcUjHbxMrRGLSWjOKLEuOFrLwRumPLRWOqBo",
      videoUrl: "https://cdn.pixabay.com/video/2025/10/12/309451_large.mp4"
    },
    {
      index: 7,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[85%] md:block",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCip72Ejm7ZM--2YPQWmcDms6WGwuOPYd7DLyl24UM8FytAJFXIzWc7mPUTpMtLVlrkMFORV0vUezSIk1r3LauP6hZhWmVHxRIJcHf4HXF6Yt0qAXjSK5nhdglod1eE6zaPyGS0NHVOb0_3uoO9tt82ph7Wjjcb-nnIbqEZ4wiHd3TxtOFXE7eFyWfcjI4tlJ3mRBGwCvwLZK9C4mjjCWBlivwzFn7TiKBawHOEOzuUaJsLaykLo5I5g3m3aLLeIfgK4mnF7eddTqvN",
      videoUrl: "https://cdn.pixabay.com/video/2019/12/12/30121-380473626_large.mp4"
    },
    {
      index: 8,
      classes: "stagger-item panel-item panel-transition flex-1 relative overflow-hidden opacity-80 panel-shadow h-[70%]",
      bgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCFICwfQ6E34xHcGCdL4RYWgzjuUDPdtI9_w_0nFZLxAIa7JKq7VQwtJQ-L2LffoJFuzxl_jnIsU7RKDNfoqpSpIfhnJyhkne2knB4_bxRhTDuOvbvDTN_gxoEZMB3Zx78i_nAnjB4l4gyR6W9zzv-n70A4XCRrFpsC-sLTkeKce9yJekdZDFbiC50BmKBfdjotecXJsu2qpThF57t7jqGH0tQUEjaRh2_pKPFszKAjuU_7jhzmLXOhMpJcrDN1yKnnw5DddrnKgf",
      videoUrl: "https://cdn.pixabay.com/video/2020/11/07/55718-503971825_large.mp4"
    }
  ];

  const activeWork = hoveredIndex !== null ? works[hoveredIndex] : null;

  return (
    <main
      ref={containerRef}
      className={`state-container h-full flex flex-col items-center justify-center px-4 pt-10 ${
        isHidden ? "state-hidden" : "state-visible"
      }`}
      id="state-2"
      aria-hidden={isHidden}
    >
      <div
        className="panel-container flex flex-row w-full max-w-[1400px] h-[65vh] md:h-[68vh] md:gap-3 gap-1 items-center justify-center"
        onMouseLeave={handleContainerMouseLeave}
      >
        {slicesData.map((slice) => (
          <div
            key={slice.index}
            className={slice.classes}
            onMouseEnter={(e) => handleMouseEnter(slice.index, e)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
                hoveredIndex === slice.index
                  ? "grayscale-0 sepia-0 brightness-100 contrast-100 opacity-0"
                  : "grayscale brightness-[0.8] contrast-125 sepia-[0.3]"
              }`}
              style={{
                backgroundImage: `url('${slice.bgUrl}')`
              }}
            ></div>
            <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredIndex === slice.index ? "opacity-0" : "bg-background-light/20"}`}></div>
            <video
              loop
              muted
              playsInline
              src={slice.videoUrl}
              className={`transition-opacity duration-500 absolute inset-0 w-full h-full object-cover ${
                hoveredIndex === slice.index ? "opacity-100" : "opacity-0"
              }`}
            ></video>
            {hoveredIndex === slice.index && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-white/20 transition-colors z-20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="stagger-item text-center flex flex-col items-center justify-center mt-8 md:mt-12 mb-4 relative px-4 h-[120px] md:h-[150px] w-full max-w-[600px]">
        {activeWork ? (
          <div className="flex flex-col items-center justify-center w-full animate-[fadeIn_400ms_ease_forwards]">
            <p className="locked-subtitle text-[10px] md:text-[13px] font-serif text-ink tracking-[0.2em] flex items-center justify-center font-[500] mb-2 md:mb-1">
              {activeWork.topText}
            </p>
            <h2 className="state-2-title locked-title text-[3rem] md:text-[5.5rem] font-display text-ink tracking-tight font-[500] h-[60px] md:h-[90px] flex items-center justify-center italic relative">
              {activeWork.title}
              <div className="absolute top-[20%] right-[30%] w-1.5 h-1.5 bg-ink rounded-full"></div>
            </h2>
            <p className="state-2-subtitle locked-subtitle text-[10px] md:text-[13px] font-serif text-ink tracking-[0.25em] italic flex items-center justify-center mt-3 h-[20px]">
              {activeWork.subtitle}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full animate-[fadeIn_400ms_ease_forwards]">
            <h2 className="locked-title text-[3rem] md:text-[5.5rem] font-display text-ink tracking-tight font-[500] h-[60px] md:h-[90px] flex items-center justify-center italic relative">
              Featured Work
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-ink rounded-full"></div>
              <div className="absolute top-[15%] left-[45%] w-1.5 h-1.5 bg-ink rounded-full"></div>
              <div className="absolute top-1/3 left-[60%] w-1 h-1 bg-ink rounded-full"></div>
            </h2>
            <p className="locked-subtitle text-[10px] md:text-[13px] font-serif text-ink tracking-[0.2em] mt-3 md:mt-5 h-[20px] flex items-center justify-center font-[500]">
              Explore some of Alan's featured work
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
