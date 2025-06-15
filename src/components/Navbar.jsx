import { Link } from "react-router";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const Navbar = () => {
    const menuRef = useRef(null);

    const changeMenuVisibility = () =>
        menuRef.current.classList.contains("hidden")
            ? menuRef.current.classList.replace("hidden", "block")
            : menuRef.current.classList.replace("block", "hidden");

    return (
        <>
            <nav className="h-fit w-full bg-black text-white font-orbitron fixed text-lg py-2 z-10 flex flex-wrap items-center justify-between px-4">
                <div className="flex items-center space-x-3 select-none">
                    <GiPerspectiveDiceSixFacesRandom size={40} />
                    <span>PDTH Randomizer</span>
                </div>
                <button
                    type="button"
                    onClick={changeMenuVisibility}
                    className="inline-flex items-center justify-center p-2 h-10 w-10 hover:bg-orange-400 rounded-sm focus:outline-none"
                >
                    <RxHamburgerMenu size={40} />
                </button>
                <div className="hidden w-full origin-top animate-open-menu" ref={menuRef}>
                    <ul className="list-none flex flex-col items-center">
                        <li className="w-full flex justify-end items-center">
                            <Link to="/" className="block py-1 px-2 hover:bg-orange-400 hover:text-black rounded-sm">
                                Randomizer
                            </Link>
                        </li>
                        <li className="w-full flex justify-end items-center">
                            <Link
                                to="/About"
                                className=" block py-1 px-2 hover:bg-orange-400 hover:text-black rounded-sm"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
