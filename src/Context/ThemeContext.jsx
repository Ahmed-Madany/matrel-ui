// import React, { createContext, useState, useEffect } from "react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

// export const ThemeContext = createContext();

// function MyThemeContext({ children }) {
//   const [mode, setMode] = useState("light");

//   const toggleMode = () =>
//     setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

//   const theme = createTheme({
//     palette: {
//       mode,
//       ...(mode === "dark"
//         ? {
//             background: {
//               default: "#121212",
//             },
//           }
//         : {
//             background: {
//               default: "#f5f5f5",
//             },
//           }),
//     },
//   });

//   useEffect(() => {
//     document.body.style.backgroundColor =
//       mode === "dark" ? "#121212" : "#f5f5f5";
//     document.body.style.color = mode === "dark" ? "#fff" : "#000";
//   }, [mode]);

//   return (
//     <ThemeContext.Provider value={{ toggleMode, mode }}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// }

// export default MyThemeContext;

import { createContext, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ThemeContext = createContext();

export default function MyThemeContext({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
