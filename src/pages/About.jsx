import { IoMdBulb } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const About = () => {
    return (
        <div className="h-fit w-full px-3 py-5 font-orbitron bg-item backdrop-blur-xs text-white text-center flex flex-col lg:w-9/10 xl:w-8/10 2xl:w-6/10">
            <header className="text-xl font-bold md:text-2xl md:mt-4 lg:mt-5 lg:text-4xl select-none">
                PAYDAY: <span className="text-red-500">THE HEIST</span>
                <br />
                <span className="animate-rgb-text-color-change">LOADOUT RANDOMIZER</span>
            </header>
            <hr className="my-5" />
            <div className="flex flex-col gap-5 text-md md:text-lg md:px-3 lg:px-6 lg:text-2xl">
                <a
                    href="https://dbd-randomizer.com/"
                    target="_blank"
                    className="flex justify-start place-items-center gap-3 text-blue-600 font-extrabold hover:decoration-2 hover:underline"
                >
                    <IoMdBulb />
                    Idea based on
                </a>
                <a
                    href="https://payday.fandom.com/wiki/Upgrades#Gallery"
                    target="_blank"
                    className="flex justify-start place-items-center gap-3 text-blue-600 font-extrabold hover:decoration-2 hover:underline"
                >
                    <FaImage />
                    Loadout images
                </a>
                <a
                    href="https://www.goodfon.com/games/wallpaper-payday-the-heist-bandity.html"
                    target="_blank"
                    className="flex justify-start place-items-center gap-3 text-blue-600 font-extrabold hover:decoration-2 hover:underline"
                >
                    <FaImage />
                    Background image
                </a>

                <a
                    href="https://github.com/Quoflame77"
                    target="_blank"
                    className="flex justify-start place-items-center gap-3 text-blue-600 font-extrabold hover:decoration-2 hover:underline"
                >
                    <FaGithub />
                    Author of the website
                </a>
            </div>
        </div>
    );
};

export default About;
