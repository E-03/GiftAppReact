import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGift';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ categoria }) => {
    const { data, loading } = useFetchGifts(categoria);
    console.log("Images: " + data);
    
    // //Permite que solo se renderice una sola vez, sino se pone llama la function siempre en un loop....
    // useEffect( () => {
    //     getGift(categoria).then( setImages );
    // }, [ categoria ])
    
    return (
        <>    
            <h3> { categoria }</h3>

            { loading && <p> Cargando... </p> }

            <div className="card-grid">
                { 
                    data.map(img => {
                        return <GiftGridItem
                            key={ img.id } 
                            { ...img }
                        />
                    })
                }

            </div>
        </>
    )
}
