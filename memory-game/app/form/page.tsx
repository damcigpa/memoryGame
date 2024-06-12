'use client'
import React, {useContext} from "react";
import ImageList from "@/Componenst/ImageList";
import Form from "@/Componenst/Form";
import { AppProvider } from "@/Contexts/AppContext";
import { useAppContext } from "@/Contexts/AppContext";
export default function ImagePage() {
    const { fetchContent, data } = useAppContext();
    console.log('itttadat', data)


    return (
        <AppProvider>
            <h1>Image Picker</h1>
            <ImageList handleFetch={fetchContent} data={data}/>
        </AppProvider>

    );
}