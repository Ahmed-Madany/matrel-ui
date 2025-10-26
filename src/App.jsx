import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Developers from "./components/Developers/Developers";
import Freelancer from "./components/Freelanser/Freelancer";
import Arc from "./components/Arc/Arc";
import Content from "./components/Contnet/Content";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MyThemeContext from "./Context/ThemeContext";

function App() {
  return (
    <MyThemeContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/freelancer" element={<Freelancer />} />
          <Route path="/arc" element={<Arc />} />
          <Route path="/content" element={<Content />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyThemeContext>
  );
}

export default App;
