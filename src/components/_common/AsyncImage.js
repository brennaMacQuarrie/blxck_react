import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function AsyncImage(props) {
    const [loadedSrc, setLoadedSrc] = useState(null);
    
    useEffect(() => {
        setLoadedSrc(null);

        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);

    if (loadedSrc === props.src) {
        return (
            <img {...props} alt={props.alt || 'background image of space'} />
        );
    }

    return (
        <Loader />
    )
};