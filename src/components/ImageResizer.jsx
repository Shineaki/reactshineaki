import Resizer from "react-image-file-resizer";

export async function resizeImage(fileToResize) {
    return new Promise((resolve) => {
        Resizer.imageFileResizer(
            fileToResize.file,
            1000,
            1000,
            "JPEG",
            90,
            0,
            (uri) => {
                resolve(uri);
            },
            "file"
        );
    })
}

export async function determineSize(fileToCheck) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = URL.createObjectURL(fileToCheck);
        img.onload = () => {
            resolve({
                "file": fileToCheck,
                "width": img.width,
                "height": img.height
            })
        }
    })
}