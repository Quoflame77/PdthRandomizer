import { useEffect, useRef, useState } from "react";

const Item = (props) => {
    const [imageURL, setImageURL] = useState(null);
    const imgRef = useRef(null);
    const spanRef = useRef(null);

    const fetchImg = async (url) => {
        const res = await fetch(url);
        const data = await res.blob();
        const objectURL = URL.createObjectURL(data);
        setImageURL(objectURL);
    };

    const addAnimationsClass = (ref, className) => {
        ref.current.classList.add(className);
        setTimeout(() => {
            ref.current.classList.remove(className);
        }, 2000);
    };

    useEffect(() => {
        fetchImg(props.item.image);
        addAnimationsClass(spanRef, "animate-highlight-text");
        addAnimationsClass(imgRef, "animate-glow-effect");
    }, [props]);

    useEffect(() => {
        if (imageURL) imgRef.current.src = imageURL;
    }, [imageURL]);

    return (
        <div className="h-50 w-68 p-3 font-orbitron bg-item backdrop-blur-xs text-white flex flex-col justify-center items-center gap-1 xl:h-70 xl:w-80">
            <img
                ref={imgRef}
                alt={`${props.item.name} image`}
                className="h-30 w-45 bg-fixed bg-cover bg-no-repeat xl:h-50 xl:w-55 select-none hover:animate-glow-effect"
            />
            <span ref={spanRef} className="h-10 w-full text-lg text-center p-1 xl:text-2xl select-none">
                {props.item.name}
            </span>
        </div>
    );
};

export default Item;
