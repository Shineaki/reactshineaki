import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../components/FirebaseApp";
import ImageCmp from "../components/ImageCmp";
import Pagination from '@mui/material/Pagination';
import { IoCameraOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";

function Gallery() {
  const hiddenFileInput = useRef(null);
  const [imagesData, setImagesData] = useState();
  const [pageLimit] = useState(34);
  const [numOfPages, setNumOfPages] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);

  function renderImages(page_num) {
    const start = (page_num - 1) * pageLimit;
    const end = page_num * pageLimit;

    const images_to_render = [];

    for (let i = start; i < end; i++) {
      if (imagesData.images.length > i) {
        images_to_render.push(<ImageCmp data={imagesData.images[i]} key={i} />)
      }
    }
    return images_to_render;
  }

  function cameraClick(){
    hiddenFileInput.current.click();
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getDoc(doc(firestore, "gallery", "images"));
      if (res.exists()) {
        const fdata = res.data();
        console.log(fdata);
        setImagesData(fdata);
        setNumOfPages(Math.floor(fdata.images.length / pageLimit) + 1);
      } else {
        console.log("DB Query failed");
      }
    }
    getData();
  })

  if (imagesData == null) {
    return <div>Loading :3</div>
  }

  // console.log(folderData.images);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center  mb-3 mx-6">
        <div className="md:text-3xl">Galéria</div>
      </div>
      <div className="flex flex-wrap m-3 gap-1 md:gap-3 items-center justify-center">
        <input id="myFileInput" type="file" accept="image/*" capture="environment" style={{display: 'none'}} ref={hiddenFileInput} />
        <div className="flex h-28 w-28 md:w-60 md:h-60 object-cover border rounded-md shadow-md items-center justify-center gap-2 text-xl cursor-pointer"
         onClick={(ev) => cameraClick(ev)}
         >
          <IoCameraOutline size={25} /> <div className="hidden md:inline-block">Feltöltés Kamerával</div>
        </div>
        <Link to={"/upload/"} className="flex h-28 w-28 md:w-60 md:h-60 object-cover border rounded-md shadow-md items-center justify-center gap-2 text-xl">
          <GrGallery size={25} /> <div className="hidden md:inline-block">Feltöltés Galériából</div>
        </Link>
        {renderImages(currentPage).map((obj) => obj)}
      </div>
      <div className="flex justify-center my-5 md:p-5">
        <Pagination count={numOfPages} color="primary" hidePrevButton hideNextButton size="large" onChange={(ev, val) => setCurrentPage(val)} />
      </div>
    </div>
  )
}

export default Gallery