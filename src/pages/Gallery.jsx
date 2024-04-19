import { useEffect, useRef, useState } from "react";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../components/FirebaseApp";
import ImageCmp from "../components/ImageCmp";
import Pagination from '@mui/material/Pagination';
import { IoCameraOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes } from "firebase/storage";
import { HashLoader } from "react-spinners";

function Gallery() {
  const hiddenCameraInput = useRef(null);
  const hiddenGalleryInput = useRef(null);
  const [imagesData, setImagesData] = useState();
  const [uploading, setUploading] = useState(false);
  const [pageLimit] = useState(22);
  const [uploadStatus, setUploadStatus] = useState([]);
  const [numOfPages, setNumOfPages] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const [fileData, setFileData] = useState();
  const [preview, setPreview] = useState();

  function renderImages(page_num) {
    const start = (page_num - 1) * pageLimit;
    const end = page_num * pageLimit;

    const images_to_render = [];

    for (let i = start; i < end; i++) {
      if (imagesData.length > i) {
        images_to_render.push(<ImageCmp data={imagesData[i]} key={i} />)
      }
    }
    return images_to_render;
  }

  async function uploadPhoto() {
    setUploading(true);
    try {
      if (fileData.length > 0) {
        for (let i = 0; i < fileData.length; i++) {
          var tmp_fname = uuidv4().slice(0, 8) + "_" + fileData[i].name;
          console.log(tmp_fname);
          const file_ref = ref(storage, "images/" + tmp_fname);
          console.log("file upload started");
          await uploadBytes(file_ref, fileData[i]);
          console.log("file upload finished");
          const db_obj_ref = doc(firestore, "gallery", "images");
          await updateDoc(db_obj_ref, {
            images: arrayUnion(tmp_fname)
          })
          console.log("db update finished");
          setUploadStatus(uploadStatus => ([...uploadStatus, fileData[i].name]));
        }
      } else {
        var tmp_single_fname = uuidv4().slice(0, 8) + "_" + fileData.name;
        const file_ref = ref(storage, "images/" + tmp_single_fname);
        console.log("file upload started");
        await uploadBytes(file_ref, fileData);
        console.log("file upload finished");
        const db_obj_ref = doc(firestore, "gallery", "images");
        await updateDoc(db_obj_ref, {
          images: arrayUnion(tmp_single_fname)
        })
        console.log("db update finished");
      }
    } catch (e) {
      console.log(e);
    }
    setImagesData(null);
    setPreview(null);
    setFileData(null);
    setUploading(false);
    setUploadStatus([]);
  }

  useEffect(() => {
    const getData = async () => {
      const res = await getDoc(doc(firestore, "gallery", "images"));
      if (res.exists()) {
        const fdata = res.data();
        console.log(fdata);
        setImagesData(fdata.images.reverse());
        setNumOfPages(Math.floor(fdata.images.length / pageLimit) + 1);
      } else {
        console.log("DB Query failed");
      }
    }
    getData();
  }, [pageLimit, preview])

  if (uploading === true) {
    return <div className="flex flex-col mt-10 gap-10 justify-center items-center text-xl montserrat">
      Feltöltés folyamatban 🥰
      <HashLoader size={150} />
      {Array.isArray(preview) &&
        <div>{uploadStatus.length} / {preview.length}</div>
      }


    </div>
  }

  if (imagesData == null) {
    return <div></div>
  }

  if (fileData != null && preview != null) {
    return (
      <div className="flex flex-col items-center py-5 px-5">
        <div className="">
          <div className="text-4xl montserrat">Előnézet</div>
        </div>
        {Array.isArray(preview) && preview.map((obj, idx) => {
          return <img key={idx} src={obj} alt="" className="rounded-xl shadow-md my-3" />
        })
        }
        {!Array.isArray(preview) &&
          <img src={preview} alt="" className="rounded-xl shadow-md my-3" />
        }
        <div className="flex flex-row py-3 gap-3">
          <div className="rounded-xl border py-3 px-5 bg-wed-icon-font/5 border-slate-400 cursor-pointer" onClick={() => {
            setFileData(null);
            setPreview(null);
          }}>Vissza</div>
          <div className="rounded-xl border py-3 px-5 bg-wed-icon-font/20 border-slate-500 cursor-pointer" onClick={() => {
            uploadPhoto();
          }}>Feltöltés</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center  mt-5 mb-2 mx-6">
        <div className="text-4xl montserrat">Galéria</div>
      </div>
      <div className="flex flex-wrap m-3 gap-1 md:gap-3 items-center justify-center">
        <input id="myCameraInput" type="file" accept="image/*" capture="environment" style={{ display: 'none' }} ref={hiddenCameraInput} onChange={(ev) => {
          setFileData(ev.target.files[0]);
          setPreview(URL.createObjectURL(ev.target.files[0]));
        }
        } />
        <input id="myGalleryInput" type="file" multiple={true} accept="image/*" style={{ display: 'none' }} ref={hiddenGalleryInput} onChange={(ev) => {
          setFileData(ev.target.files);
          setPreview(Array.from(ev.target.files).map((obj) => URL.createObjectURL(obj)));
        }
        } />
        <div className="flex h-28 w-28 md:w-60 md:h-60 object-cover border rounded-md shadow-md items-center justify-center gap-2 text-xl cursor-pointer"
          onClick={() => hiddenCameraInput.current.click()}
        >
          <IoCameraOutline size={25} /> <div className="hidden md:inline-block">Feltöltés Kamerával</div>
        </div>
        <div className="flex h-28 w-28 md:w-60 md:h-60 object-cover border rounded-md shadow-md items-center justify-center gap-2 text-xl cursor-pointer"
          onClick={() => hiddenGalleryInput.current.click()}>
          <GrGallery size={25} /> <div className="hidden md:inline-block">Feltöltés Galériából</div>
        </div>
        {renderImages(currentPage).map((obj) => obj)}
      </div>
      <div className="flex justify-center my-5 md:p-5">
        <Pagination count={numOfPages} color="primary" hidePrevButton hideNextButton size="large" onChange={(ev, val) => setCurrentPage(val)} />
      </div>
    </div >
  )
}

export default Gallery