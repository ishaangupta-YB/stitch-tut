export type Work = {
  title: string;
  subtitle: string;
  topText?: string;
  videoUrl: string;
};

export const TOTAL_WORKS = 9;

export const works: Record<number, Work> = {
  0: { title: "Pocahontas", subtitle: "Colors of the Wind", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  1: { title: "Little Shop of Horrors", subtitle: "Somewhere That's Green", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  2: { title: "Enchanted", subtitle: "True Love's Kiss", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" },
  3: { title: "Hercules", subtitle: "Zero to Hero", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  4: { title: "Beauty and the Beast", subtitle: "Tale as Old as Time", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  5: { title: "Aladdin", subtitle: "A Whole New World", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" },
  6: { title: "Newsies", subtitle: "Seize the Day", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
  7: { title: "Tangled", subtitle: "When Will My Life Begin?", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  8: { title: "The Little Mermaid", subtitle: "Part of Your World", topText: "Explore Song & Extra Material", videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" }
};
