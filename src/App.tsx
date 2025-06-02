import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
//import Home from "./components/Home";
//import About from "./components/About";
//import Book from "./components/Book";
//import Gallery from "./components/Gallery";
//import Contact from "./components/Contact";

const Home = lazy(() => import ("./components/Home"))
const About = lazy(() => import ("./components/About"))
const Book = lazy(() => import ("./components/Book"))
const Gallery = lazy(() => import ("./components/Gallery"))
const Contact = lazy(() => import ("./components/Contact"))

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={<Loading/>}><Home/></Suspense>}/>
          <Route path="/load" element={<Loading/>}></Route>
          <Route path="/about" element={<Suspense fallback={<Loading/>}><About/></Suspense>}/>
          <Route path="/book" element={<Suspense fallback={<Loading/>}><Book/></Suspense>}/>
          <Route path="/gallery" element={<Suspense fallback={<Loading/>}><Gallery/></Suspense>}/>
          <Route path="/contact" element={<Suspense fallback={<Loading/>}><Contact/></Suspense>}/>
        </Routes>
      </div>

  );
};

export default App;