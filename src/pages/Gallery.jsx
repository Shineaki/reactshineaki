import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../components/FirebaseApp";
import ImageCmp from "../components/ImageCmp";
import Pagination from '@mui/material/Pagination';
import { LuUploadCloud } from "react-icons/lu";
import { FcCamera } from "react-icons/fc";

function Gallery(){
  const [imagesData, setImagesData] = useState();
  const [pageLimit, setPageLimit] = useState(34);
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

  useEffect(() => {
      const getData = async () => {
          const res = await getDoc(doc(firestore, "gallery", "images"));
          if (res.exists()) {
              const fdata = res.data();
              console.log(fdata);
              setImagesData(fdata);
              // setNumOfPages(Math.floor(fdata.images.length / pageLimit) + 1);
          } else {
              console.log("DB Query failed");
          }
      }
      getData();
  }, [])

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
            <Link to={"/upload/"} className="flex h-28 w-28 md:w-60 md:h-60 object-cover border rounded-md shadow-md items-center justify-center gap-2 text-xl">
                <LuUploadCloud size={25} /> <div className="hidden md:inline-block">Képek Feltöltése</div>
            </Link>
            {renderImages(currentPage).map((obj) => obj)}
        </div>
        <div className="flex justify-center my-5 md:p-5">
            {/* <Pagination count={numOfPages} color="primary" hidePrevButton hideNextButton size="large" onChange={(ev, val) => setCurrentPage(val)} /> */}
        </div>
    </div>
)
}

export default Gallery