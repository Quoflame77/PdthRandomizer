import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { lazy } from "react";

const Randomizer = lazy(() => import("./pages/Randomizer"));
const About = lazy(() => import("./pages/About"));

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Randomizer" element={<Randomizer />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
