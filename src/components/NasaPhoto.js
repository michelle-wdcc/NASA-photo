import React, {useState, useEffect} from "react";

export default function NasaPhoto() {
    const[photoData, setPhotoData] = useState(null);
    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto() {
            const res=await fetch(
                // API key
                `https://api.nasa.gov/planetary/apod?api_key=JiCaGU8JPOXKJ5YloQUxzksOafSVTbkbLkCcewYo`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div/>;
    
    return (
        <div className="nasa-photo">
            <img src={photoData.url} alt={photoData.title}
            className="photo"/>
            <div>
            <h1>{photoData.title}</h1>
            <p className="date">{photoData.date}</p>
            <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
    );
}