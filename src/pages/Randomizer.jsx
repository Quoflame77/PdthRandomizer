/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import jsonData from "../assets/data.json";
import Item from "../components/Item";

const Randomizer = () => {
    const [data, setData] = useState(jsonData);
    const [visibleData, setVisibleData] = useState([]);

    const randomize = () => {
        const selected = Object.keys(data).map((key, index) => data[key][randomIndex()]);
        setVisibleData(selected);
    };

    useEffect(() => {
        randomize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const randomIndex = () => {
        return Math.floor(Math.random() * 3);
    };

    return (
        <>
            <main className="font-orbitron lg:h-screen w-full flex flex-col items-center bg-[url(https://img.goodfon.com/original/1920x1080/8/c3/payday-the-heist-bandity.jpg)] bg-cover bg-center bg-fixed bg-no-repeat md:justify-center">
                <header className="h-20 w-70 text-3xl text-center flex justify-center items-center p-4 text-white font-bolder select-none lg:text-3xl lg:mb-6 hover:animate-ping">
                    Randomizer
                </header>
                <button
                    type="button"
                    onClick={randomize}
                    className="h-12 w-50 bg-orange-400 px-1 py-2 text-lg m-2.5 mb-5 rounded-xs font-medium select-none hover:scale-125 active:bg-black active:text-white active:shadow-orange-400 active:shadow-md duration-300 ease-in-out"
                >
                    Re-Randomize
                </button>
                <div className="h-fit w-full flex flex-col gap-y-2 md:flex-row lg:flex-col lg:gap-y-6">
                    <div className="h-1/2 w-full flex flex-col items-center gap-y-2 md:h-full md:w-1/2 lg:flex-row lg:h-1/2 lg:w-full lg:gap-4 lg:justify-center">
                        {visibleData.map((item, index) => (index < 3 ? <Item key={index} item={item} /> : ""))}
                    </div>
                    <div className="h-1/2 w-full flex flex-col items-center gap-y-2 md:h-full md:w-1/2 lg:flex-row lg:h-1/2 lg:w-full lg:gap-4 lg:justify-center">
                        {visibleData.map((item, index) => (index >= 3 ? <Item key={index} item={item} /> : ""))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Randomizer;
