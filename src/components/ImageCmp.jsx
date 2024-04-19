import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "./FirebaseApp";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


export default function ImageCmp({ data }) {
    const [img, setImg] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const imagesRef = ref(storage, 'images/' + data);
        getDownloadURL(imagesRef).then((url) => {
            console.log(url);
            setImg(url);
        })
    }, [setImg, data])

    return (
        <div className="rounded-md shadow-md h-28 w-28 md:w-60 md:h-60">
            {img && (
                <Zoom>
                    <img src={img}
                        alt=""
                        className="h-28 w-28 md:w-60 md:h-60 rounded-md object-cover"
                        style={loaded ? {} : { visibility: 'hidden' }}
                        onLoad={() => setLoaded(true)}
                    />
                </Zoom>
            )}
        </div>
    )
}