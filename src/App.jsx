import Navbar from "./components/Navbar";
import Randomizer from "./pages/Randomizer";
import { Routes, Route } from "react-router";
import { lazy } from "react";

const About = lazy(() => import("./pages/About"));

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Randomizer />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </>
    );
}

export default App;
