import { useState } from "react";
import { State1FeaturedWork } from "./components/State1FeaturedWork";
import { State2Grid } from "./components/State2Grid";

export default function App() {
  const [phase, setPhase] = useState<"1" | "1_to_2" | "2" | "2_to_1">("1");

  const switchToState2 = () => {
    if (phase !== "1") return;
    setPhase("1_to_2");
    setTimeout(() => {
      setPhase("2");
    }, 800);
  };

  const switchToState1 = () => {
    if (phase !== "2") return;
    setPhase("2_to_1");
    setTimeout(() => {
      setPhase("1");
    }, 800);
  };

  return (
    <div className="relative flex h-screen w-full flex-col textured-bg overflow-hidden bg-background-light dark:bg-background-dark text-ink dark:text-slate-100">
      <header className="absolute top-0 left-0 w-full z-[100] flex items-center justify-between px-4 md:px-8 py-6 md:py-8 lg:px-16">
        <div className="flex items-center">
          <button
            className="text-ink dark:text-slate-100 text-xl md:text-2xl cursor-pointer hover:text-primary transition-colors font-light bg-transparent border-none p-0 flex items-center justify-center"
            aria-label="Notifications"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-center w-full md:w-auto px-16 md:px-0 pointer-events-none">
          <h2 className="text-ink dark:text-slate-100 text-[2rem] md:text-[3.5rem] font-signature font-normal m-0 tracking-normal transform -translate-y-2 lg:-translate-y-4">
            Alan Menken
          </h2>
        </div>
        <button className="flex items-center justify-center text-ink dark:text-slate-100 hover:text-primary transition-colors bg-transparent border-none p-0 focus:outline-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transform scale-y-[1.2]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* Main Wrapper */}
      <div className="relative flex-1 w-full overflow-hidden">
        {<State1FeaturedWork isActive={phase === "1"} isHidden={phase === "2" || phase === "2_to_1"} />}
        {<State2Grid isActive={phase === "2"} isHidden={phase === "1" || phase === "1_to_2"} />}
      </div>

      <footer className="absolute bottom-0 left-0 w-full px-4 md:px-8 py-6 md:py-10 lg:px-16 flex items-center justify-between z-[100]">
        <div className="flex items-center gap-3 w-[200px]">
          <button className="flex items-center justify-center text-ink dark:text-slate-100 hover:text-primary transition-colors bg-transparent border-none p-0 focus:outline-none shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
          <a
            className="group flex items-center gap-4 text-ink dark:text-slate-100 font-bold uppercase tracking-[0.2em] text-[10px] no-underline whitespace-nowrap"
            href="#"
          >
            SEE ALL 42 WORKS
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={switchToState1}
            className={`flex items-center justify-center transition-colors bg-transparent border-none p-0 focus:outline-none cursor-pointer w-[38px] h-[38px] rounded-full border border-ink/30 ${
              phase === "1" || phase === "2_to_1"
                ? "bg-ink/10 text-ink dark:text-slate-100"
                : "text-ink dark:text-slate-100 hover:text-primary hover:bg-ink/5"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="6" width="18" height="12" rx="2" stroke="none" fill="currentColor"/>
            </svg>
          </button>
          <button
            onClick={switchToState2}
            className={`flex items-center justify-center transition-colors bg-transparent border-none p-0 focus:outline-none cursor-pointer w-[38px] h-[38px] rounded-full border border-ink/30 ${
              phase === "2" || phase === "1_to_2"
                ? "bg-ink/10 text-ink dark:text-slate-100"
                : "text-ink dark:text-slate-100 hover:text-primary hover:bg-ink/5"
            }`}
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform rotate-90">
              <rect x="4" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/>
              <rect x="10" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/>
              <rect x="16" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/>
            </svg>
          </button>
        </div>
        <div className="w-[200px]"></div>
      </footer>
    </div>
  );
}
