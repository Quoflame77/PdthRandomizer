/* eslint-disable no-unused-vars */
import { useState, useEffect, use } from "react";
import jsonData from "../assets/data.json";
import Item from "../components/Item";

const Randomizer = () => {
    const [data, setData] = useState(jsonData);

    // useEffect(() => {
    //     console.log(data);
    //     console.log(data["handgun"]);
    //     console.log(data["handgun"][1]);
    //     console.log(data["handgun"][1].name);
    // }, [])

    useEffect(() => {

    }, []);

    const randomIndex = () => {
        return Math.floor(Math.random() * 3);
    };

    return (
        <>
            <main className="font-orbitron h-full w-full flex flex-col">
                <header className="w-full text-2xl text-center p-4">Randomizer</header>

                <div className="h-fit w-full flex flex-col justify-center items-center gap-y-1">
                    {Object.keys(data).map((key) => (
                        <Item item={data[key][randomIndex()]} />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Randomizer;
