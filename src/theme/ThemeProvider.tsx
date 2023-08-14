"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type ThemeMode = "light" | "dark";

interface DefaultValuesType {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}
const defaultValues: DefaultValuesType = {
  theme: "dark",
  setTheme: () => {
    return;
  },
};
const ThemeContext = createContext(defaultValues);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");
    if (existingTheme) {
      setTheme(existingTheme as ThemeMode);
      document.documentElement.classList.add(existingTheme);
    } else {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.add(theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
