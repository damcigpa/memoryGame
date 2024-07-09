'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { fetchContent } from '@/Helpers/Helpers';

const ImagePageContext = createContext({});

export const ImagePageProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
    const [data, setData] = useState({});

    const init = async () => {
        const responsedata = await fetchContent('/api/images/get');
        setData(responsedata);
    }

    useEffect(() =>{
        init()
    }, []);


    return (
        <ImagePageContext.Provider value={{data, init}}>
            {children}
        </ImagePageContext.Provider>
    )
}

export const useImagePageContext = () => useContext(ImagePageContext);
