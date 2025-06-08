import { Link } from "react-router";

const Navbar = () => {
    return (
        <>
            <nav className="w-full bg-black text-white font-orbitron text-lg py-2 sm:py-0 sm:px-4 sm:h-12">
                <ul className="h-full w-full list-none flex flex-col justify-start items-center gap-y-3 sm:flex-row sm:gap-y-0 sm:gap-x-4">
                    <li>
                        <Link to="/" className="hover:bg-orange-400 hover:text-black h-full p-1">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Randomizer" className="hover:bg-orange-400 hover:text-black h-full p-1">
                            Randomizer
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" className="hover:bg-orange-400 hover:text-black h-full p-1">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
