import { createContext, useCallback, useContext } from "react";
const darkMode = false;
const setDarkMode: React.Dispatch<React.SetStateAction<boolean>> = () => {};

export const DarkModeContext = createContext({ darkMode, setDarkMode });
const useDarkMode = () => useContext(DarkModeContext);
export default useDarkMode;
