import { ThemeProvider } from '@emotion/react';
import './App.css';
import { Navbar } from './components/Navbar';
import theme from './components/Theme';
import { Hero } from './sections/Hero'
import Box from '@mui/material/Box';
import { Brand } from './sections/Brand';
import { GPT } from './sections/WhatIsGPT';
import { Future } from './sections/Future';
import { Possibility } from './sections/Possiblity';
import { CTA } from './components/CTA';
import { Blog } from './sections/Blog';
import { Footer } from './sections/Footer';



function App() {





  return (

    <ThemeProvider theme={theme}    >
      <Box sx={{ background: 'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)' }}>
        <Navbar />

        <Hero />
      </Box>
      <Brand />
      <GPT id="gpt" />
      <Future />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </ThemeProvider>



  );
}

export default App;
