import React, { createContext, useContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme || "light");

  useEffect(() => {
    (async () => {
      const savedTheme = await AsyncStorage.getItem("appTheme");
      if (savedTheme) setTheme(savedTheme);
    })();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await AsyncStorage.setItem("appTheme", newTheme);
  };

  const themeColors = {
    light: {
      background: "#ffffff",
      text: "#000000",
      button: "#464aca",
      buttonText: "#ffffff",
      inputBackground: "#39a6ff",
      inputBorder: "#000",
    },
    dark: {
      background: "#000",
      text: "#fff",
      button: "#fff",
      buttonText: "#000",
      inputBackground: "#222",
      inputBorder: "#fff",
    },
  };

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, colors: themeColors[theme], theme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
