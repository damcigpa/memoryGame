
'use client'
import React from "react";

interface ImageListProps {
    data: any[]; 
}

const ImageList: React.FC<ImageListProps> = ({ data }) => {

    const handleDelete = async (event) => {
        try {
            const response = await fetch(`api/images/delete/${event.target.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Handle successful deletion
                console.log('Item deleted successfully');
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
                id={image.id} 
                src={image.url} 
                alt={image.alt} 
                onClick={(e)=> handleDelete(e)}/>
            ))}
        </div>
    );
};

export default ImageList;



