import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Randomizer from "./pages/Randomizer";
import { Routes, Route } from "react-router";
import { lazy } from "react";

const About = lazy(() => import("./pages/About"));

function App() {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Randomizer />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </Wrapper>
        </>
    );
}

export default App;
