import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer({ couple, eventDate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 text-center border-t border-[#6B0F23]/10 mt-6 bg-[#FAF8F5]">
      <div className="max-w-md mx-auto flex flex-col items-center space-y-3">
        <h3 className="font-serif text-lg font-bold tracking-[0.15em] text-[#6B0F23] uppercase">
          {couple.primary}
        </h3>

        <p className="font-serif text-xs text-[#6B0F23]/70 tracking-wide">
          {eventDate.display} • {eventDate.year}
        </p>

        <button
          onClick={scrollToTop}
          className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6B0F23] text-white text-[11px] font-serif uppercase tracking-wider hover:bg-[#500A1A] transition-colors cursor-pointer shadow-xs"
        >
          <ArrowUp className="w-3 h-3" />
          <span>Back to Top</span>
        </button>

        <p className="text-[10px] text-[#6B0F23]/40 tracking-wider uppercase pt-4 flex items-center justify-center gap-1">
          Made with <Heart className="w-2.5 h-2.5 text-[#7B112E] fill-[#7B112E]" /> for {couple.primary}
        </p>
      </div>
    </footer>
  );
}
