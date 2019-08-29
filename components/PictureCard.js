import { useState, useEffect } from 'react';

const wait = 1000; 
const transition = 250;

function PictureCard({ name = '', description = '', images = [],  }) {
    const [ rotateImages, setRotateImages ] = useState(false);
    const [ imageIndex, setImageIndex ] = useState(0);
    const [ imageIndexToShow, setImageIndexToShow ] = useState(0);
    const [ timeoutId, setTimeoutId ] = useState(null);
    const [ opacity, setOpacity ] = useState(1);
    
    let nextImageIndex = imageIndex + 1;
    if (nextImageIndex >= images.length) {
        nextImageIndex = 0;
    };

    const setImageWithTransition = () => {
        setOpacity(0);
        
        setTimeout(() => {
            setImageIndex(nextImageIndex)
            setOpacity(1);
        }, transition);

        setTimeout(() => {
            setImageIndexToShow(nextImageIndex);
        }, transition * 2);
    };

    useEffect(() => {
        if (rotateImages) {
            const timeout = setTimeout(setImageWithTransition, wait);
            setTimeoutId(timeout);
        } else {
            clearTimeout(timeoutId);
            setTimeoutId(null);
            setImageIndex(0);
            setOpacity(1);
        }
    }, [rotateImages, imageIndex]);

    return (
        <div 
            className='card' 
            onMouseEnter={() => setRotateImages(true)}
            onMouseLeave={() => setRotateImages(false)}
        >
            <div className="image next"/>
            <div style={{ opacity, transition: transition + 'ms' }}>
                <div className="image"/>
            </div>
            { rotateImages && <img src={images[nextImageIndex]} hidden/> }
            <div className="content">
                <h4>
                    { name }
                </h4>
                <p>
                    { description }
                </p>
            </div>
            <style jsx>{`
                .card {
                    border-radius: 4px;
                    box-shadow: 0px 2px 4px #0004;
                    transition: ${transition}ms;
                    background: white;
                    max-width: 300px;
                }
                .card:hover {
                    cursor: pointer;
                    box-shadow: 0px 4px 8px #0004;
                }
                .image {
                    background-color: #FAFAFA;
                    background-image: url(${images[imageIndex]});
                    background-size: cover;
                    border-radius: 4px 4px 0 0;
                    height: 200px;
                }
                .next {
                    margin-bottom: -200px;
                    background-image: url(${images[imageIndexToShow]});
                }
                .content {
                    padding: 1em;
                }
                h4 {
                    margin: 0 0 0.2em;
                }
                p {
                    margin: 0;
                }
            `}</style>
        </div>
    );
}

export default PictureCard;