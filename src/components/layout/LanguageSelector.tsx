"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Globe, ChevronDown, Check } from "lucide-react";

export function LanguageSelector() {
  const { locale, setLocale, languages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === locale) || {
    code: locale,
    name: locale.toUpperCase(),
    flag: locale === "fr" ? "🇫🇷" : "🇬🇧",
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-500/40 text-xs font-medium text-zinc-200 transition-all"
        aria-label="Select Language"
      >
        <span className="text-sm">{currentLang.flag || "🌐"}</span>
        <span className="font-semibold uppercase text-[11px] text-amber-400">
          {currentLang.code}
        </span>
        <ChevronDown className="w-3 h-3 text-zinc-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl mercor-card border border-amber-500/30 shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-white/5 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
            Select Language
          </div>
          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = lang.code === locale;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-white/5 transition-colors ${
                    isSelected ? "text-amber-400 font-bold bg-amber-500/10" : "text-zinc-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag || "🌐"}</span>
                    <span>{lang.name}</span>
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
