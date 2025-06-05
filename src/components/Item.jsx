import { useEffect, useRef } from "react";

const Item = (props) => {
    const imgRef = useRef(null);

    //     fetch(
    //   "https://static.wikia.nocookie.net/payday/images/7/77/B9-S_upgrade.png/revision/latest/scale-to-width-down/290?cb=20131016072514"
    // )
    //   .then((res) => res.blob())
    //   .then((data) => {
    //     console.log(data);
    //     const objectURL = URL.createObjectURL(data);
    //     dupa.src = objectURL;
    //   });

    const fetchImg = async (url) => {
        await fetch(url)
            .then((res) => res.blob())
            .then((data) => {
                // console.log(data);
                const objectURL = URL.createObjectURL(data);
                return objectURL;
            });
    };

    useEffect(() => {
        const url = fetchImg(props.item.image);
        imgRef.current.src = url;
        console.log(imgRef.current.src);
    }, [props]);

    return (
        <>
            <div className="h-50 w-52 p-3 font-orbitron bg-neutral-900 text-white flex flex-col justify-center items-center gap-1">
                <img
                    ref={imgRef}
                    // src={props.item.image}
                    alt={props.item.name}
                    className="h-40 w-40 bg-fixed bg-cover bg-no-repeat"
                />
                <span className="h-10 w-full text-lg text-center p-1">{props.item.name}</span>
            </div>
        </>
    );
};

export default Item;
