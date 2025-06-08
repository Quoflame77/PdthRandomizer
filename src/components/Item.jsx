import { useEffect, useRef, useState } from "react";

const Item = (props) => {
    const [imageURL, setImageURL] = useState(null);
    const imgRef = useRef(null);

    const fetchImg = async (url) => {
        const res = await fetch(url);
        const data = await res.blob();
        const objectURL = URL.createObjectURL(data);
        setImageURL(objectURL);
    };

    useEffect(() => {
        fetchImg(props.item.image);
    }, [props]);

    useEffect(() => {
        if (imageURL) 
            imgRef.current.src = imageURL;
        
    }, [imageURL]);

    return (
        <>
            <div className="h-50 w-52 p-3 font-orbitron bg-neutral-900 text-white flex flex-col justify-center items-center gap-1">
                <img
                    ref={imgRef}
                    alt={`${props.item.name} image`}
                    className="h-40 w-40 bg-fixed bg-cover bg-no-repeat"
                />
                <span className="h-10 w-full text-lg text-center p-1">{props.item.name}</span>
            </div>
        </>
    );
};

export default Item;
