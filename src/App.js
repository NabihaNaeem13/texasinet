import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import SingleBlog from "./Components/BlogDetail/BlogDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/singleBlog/:id" element={<SingleBlog/>}/>
      </Routes>
    </BrowserRouter>
  );
}
