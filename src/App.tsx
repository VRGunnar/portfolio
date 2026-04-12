import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Stack />
        <Process />
        <CTA />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
