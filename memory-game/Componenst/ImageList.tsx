
'use client'
import React, {useEffect, useState, useContext} from "react";
import { useImagePageContext } from '@/Contexts/ImagePageContext';

const ImageList = ({data}) => {
    const {init} = useImagePageContext()
    console.log('here', data)


    
    const handleDelete = async (event: React.MouseEvent<HTMLImageElement>) => {
        try {
            const response = await fetch(`api/images/delete/${(event.target as HTMLImageElement).id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Handle successful deletion
                console.log('Item deleted successfully');
                init()
            
            } else {
                // Handle error
                console.error('Failed to delete the item');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };



    return (
        <div>
            {data?.img?.map((image) => (
                <img 
                key={image.id} 
                id={image.id.toString()} 
                src={image.url} 
                alt={image.id.toString()} 
                onClick={(e)=> handleDelete(e)}/>
            ))}
        </div>
    );
};

export default ImageList;



