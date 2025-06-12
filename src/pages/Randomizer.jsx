/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import jsonData from "../assets/data.json";
import Item from "../components/Item";

const Randomizer = () => {
  const [data, setData] = useState(jsonData);
  const [visibleData, setVisibleData] = useState([]);

  const randomize = () => {
    const selected = Object.keys(data).map(
      (key, index) => data[key][randomIndex()]
    );
    setVisibleData(selected);
  };

  useEffect(() => {
    randomize();
  }, []);

  const randomIndex = () => {
    return Math.floor(Math.random() * 3);
  };

  return (
    <>
      <main className="font-orbitron h-full w-full flex flex-col">
        <header className="w-full text-2xl text-center p-4">Randomizer</header>
        <button type="button" onClick={randomize}>
          XD LOL
        </button>

        <div className="h-fit w-full flex flex-col justify-center items-center gap-y-1">
          {visibleData.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Randomizer;
