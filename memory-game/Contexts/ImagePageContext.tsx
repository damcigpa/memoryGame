'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface ImagePageContextProps {
    img: []
}

const ImagePageContext = createContext<ImagePageContextProps>({img: []})

export const ImagePageProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
    const [images, setImages] = useState([]);

    useEffect(() =>{

    }, []);

    
    return (
        <ImagePageContext.Provider value={{img: []}}>
            {children}
        </ImagePageContext.Provider>
    )
}

export const useImagePageContext = () => useContext(ImagePageContext);
