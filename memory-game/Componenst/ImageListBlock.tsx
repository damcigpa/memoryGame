import React, { useContext } from "react";
import Form from "./Form";
import ImageList from "./ImageList";
import { useImagePageContext } from "@/Contexts/ImagePageContext";

const ImageListBlock = () => {
    const { data } = useImagePageContext();
    return (
        <div>
            <Form />
            <ImageList data={data} />
        </div>
    )
}

export default ImageListBlock