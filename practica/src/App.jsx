import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from '/pages/home/Home';
import Cursos from '/pages/curso'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/mas-informacion" element={<MasInformacion/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
