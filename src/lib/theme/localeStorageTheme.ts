import { Theme } from "../types/themes";

export const saveTheme = (theme: Theme) => {
  localStorage.setItem("theme", theme);
};

export const removeTheme = () => {
  localStorage.removeItem("theme");
};

export const getTheme: () => Theme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (!storedTheme) {
    return "automatic";
  }
  return storedTheme as Theme;
};
