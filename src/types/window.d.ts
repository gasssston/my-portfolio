declare global {
  interface Window {
    setLang: (lang: string) => void;
    chooseLang: (lang: string) => void;
  }
}

export {};
