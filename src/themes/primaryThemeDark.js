import { createTheme } from "@mui/material/styles";

export const themeOptions= {
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#409882',
    },
    secondary: {
      main: '#900E5B',
    },
    background: {
      default: '#000000',
    },
    info: {
      main: '#39736E',
    },
    success: {
      main: '#757B5E',
    },
    warning: {
      main: '#757B5E',
    },
    error: {
      main: '#730f3f',
    },
  },
};

const theme=createTheme(themeOptions);
export default theme