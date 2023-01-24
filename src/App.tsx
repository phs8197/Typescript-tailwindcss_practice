import React, { useEffect, useState } from "react";
import Main from "./pages/Main";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Coffee from "./pages/Coffee";
import Contact from "./pages/Contact";
import Nav from "./component/Nav";
/* eslint-disable */
function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  function moveScroll(scroll: number) {
    window.scrollTo({ top: scroll, behavior: "smooth" });
  }

  return (
    <div className="font-sans text-primary">
      <Nav dark={scrollY > 850 ? true : false} moveScroll={moveScroll}></Nav>
      <Main></Main>
      <About></About>
      <Shop></Shop>
      <Coffee></Coffee>
      <Contact></Contact>
    </div>
  );
}

export default App;
