import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from './gallery.module.css';
import { fetchImages } from '../../API/api.js';

function Gallery(props) {
    console.log("Gallery component rendered!");
    console.log(`Filter selection: "${props.filterSelection}" prop passed to gallery`);

    const [currentImages, setCurrentImages] = useState([]);
    const batchNumber = useRef(1);
    const isLoading = useRef(false);
    const prevBatchNumber = useRef(0)
    
    const fetchData = useCallback(async () => {
        if(prevBatchNumber.current==batchNumber.current){return;}
        try {
            isLoading.current=true;
            let data = await fetchImages(props.filterSelection, batchNumber.current);
            setCurrentImages(prevState => [...prevState, ...data.items]);
            isLoading.current = false;
            
        } catch (error) {
            console.error(error);

        }
    }, [props.filterSelection]);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    useEffect(()=>{prevBatchNumber.current=batchNumber.current},[currentImages])

    useEffect(() => {
        setCurrentImages([]);
        batchNumber.current = 1;
        fetchData();
    }, [props.filterSelection, fetchData]);

    const handleScroll = async () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const currentScroll = window.innerHeight + window.scrollY;
        const bottomThreshold = scrollHeight - scrollHeight * 0.1;

        if (currentScroll >= bottomThreshold && !isLoading.current) {
            isLoading.current=true;
            batchNumber.current += 1;
            console.log(batchNumber.current);
            await fetchData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    function addImages() {
        return currentImages.map(imageObj => (
            <div key={imageObj.id} className={styles.galleryImage}>
                {/* <img src={imageObj.url.replace(/\/width=(\d+)/, '/width=$1,quality=20')} alt="" /> */}
                <img src={imageObj.url.replace(/\/width=(\d+)/, '/width=500,quality=90')} alt="" />
            </div>
        ));
    }

    console.log("current number of images: ", currentImages.length);

    return (
        <div className={styles.gallery}>
            {addImages()}
        </div>
    );
}

export default Gallery;



const upperText = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27e77f3a-29c4-4cab-bcde-dd9eab587000/width=768/27e77f3a-29c4-4cab-bcde-dd9eab587000.jpeg';
const lowerText = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27e77f3a-29c4-4cab-bcde-dd9eab587000/width=768,quality=20/27e77f3a-29c4-4cab-bcde-dd9eab587000.jpeg';

const transformedText = upperText.replace(/\/width=(\d+)/, '/width=$1,quality=20');

console.log(transformedText); // Output: https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/27e77f3a-29c4-4cab-bcde-dd9eab587000/width=768,quality=20/27e77f3a-29c4-4cab-bcde-dd9eab587000.jpeg