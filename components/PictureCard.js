import { useState, useEffect } from 'react';

function PictureCard({ name = '', description = '', images = [], wait = 1000 }) {
    const [ rotateImages, setRotateImages ] = useState();
    const [ imageIndex, setImageIndex ] = useState(0);
    const [ timeoutId, setTimeoutId ] = useState();
    
    let nextImageIndex = imageIndex + 1;
    if (nextImageIndex >= images.length) {
        nextImageIndex = 0;
    };

    useEffect(() => {
        if (rotateImages) {
            const timeout = setTimeout(() => {
                setImageIndex(nextImageIndex);
            }, wait);
            setTimeoutId(timeout);
        } else {
            clearTimeout(timeoutId);
            setImageIndex(0);
            setTimeoutId();
        }
    }, [rotateImages, imageIndex]);

    return (
        <div 
            className='card' 
            onMouseEnter={() => setRotateImages(true)}
            onMouseLeave={() => setRotateImages(false)}
        >
            { rotateImages && <div className="image next"/> }
            <div className="image"/>
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
                    transition: 200ms;
                    background: white;
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
                    background-image: url(${images[nextImageIndex]});
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