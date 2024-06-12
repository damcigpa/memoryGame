
'use client'
import React, {useEffect, useState, useContext} from "react";
import { useAppContext } from "@/Contexts/AppContext";

const ImageList: React.FC<ImageListProps> = ({ handleFetch, data}) => {
    console.log(data)
    
    const handleDelete = async (event: React.MouseEvent<HTMLImageElement>) => {
        try {
            const response = await fetch(`api/images/delete/${(event.target as HTMLImageElement).id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Handle successful deletion
                console.log('Item deleted successfully');
                handleFetch('http://localhost:3000/api/images/get');
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
            {data.img.map((image) => (
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



