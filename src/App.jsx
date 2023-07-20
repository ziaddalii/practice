import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MaterialUI from './components/MaterialUi/MaterialUI'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import Home from './components/Home'
import 'tailwindcss/tailwind.css';
import './index.css';

const theme = createTheme({
  palette:{
    primary:{
      main: "#000913"
    },
    secondary:{
      main:"#9CA5AF",
      dark:"#96C4F9"
    },
    themeColor:{
      main:"#70A5DF"
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'primary'
      }
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/MaterialUI" element={<MaterialUI/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
