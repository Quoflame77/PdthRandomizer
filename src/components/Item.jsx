import { useEffect, useRef } from "react";

const Item = (props) => {
    const imgRef = useRef(0);

    const fetchImg = async (url) => {
        await fetch(url)
            .then((res) => res.blob())
            .then((data) => {
                return data;
            });
    };

    useEffect(() => {
        const data = fetchImg(props.item.image);
        const url = URL.createObjectURL(data);
        console.log(url);
        imgRef.current.src = url;
        console.log(imgRef.current.src);
    }, [props]);

    return (
        <>
            <div className="h-50 w-52 p-3 font-orbitron bg-neutral-900 text-white flex flex-col justify-center items-center gap-1">
                <img
                    ref={imgRef}
                    src={props.item.image}
                    alt={props.item.name}
                    className="h-40 w-40 bg-fixed bg-cover bg-no-repeat"
                />
                <span className="h-10 w-full text-lg text-center p-1">{props.item.name}</span>
            </div>
        </>
    );
};

export default Item;
