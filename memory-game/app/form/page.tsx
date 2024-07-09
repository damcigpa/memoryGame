'use client'
import React from "react";
import ImageListBlock from "@/Componenst/ImageListBlock";
import { ImagePageProvider } from "@/Contexts/ImagePageContext";

export default function ImagePage() {
    return (
        <ImagePageProvider>
            <h1>Image Picker</h1>
            <ImageListBlock />
        </ImagePageProvider>
    );
}