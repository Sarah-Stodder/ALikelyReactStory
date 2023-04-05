import { createTheme } from "@mui/material/styles";


export const themeOptions= {
  palette: {
    type: 'light',
    mode: 'light',
    primary: {
      main: '#065143',
    },
    secondary: {
      main: '#CE1483',
    },
    background: {
      default: '#f2eecb',
      paper: '#f2eecb',
    },
    info: {
      main: '#0c736a',
    },
    success: {
      main: '#a8b087',
    },
    warning: {
      main: '#A8B087',
    },
    error: {
      main: '#730f3f',
    },
  },
};


const theme=createTheme(themeOptions);
export default theme