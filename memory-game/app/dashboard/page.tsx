import React from "react";
import ImageList from "@/Componenst/ImageList";
async function fetchData() {
    const response = await fetch('http://localhost:3000/api/images/get', { cache: 'no-store' } );
    const data = await response.json();
    return data;
}

export default async function ImagePicker() {
    const data = await fetchData();
    console.log(data)


    return (
        <div>
            <h1>Image Picker</h1>
            <ImageList data={data} />
        </div>
    );
}