import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Book from "./components/Book";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/book" element={<Book/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>

  );
};

export default App;