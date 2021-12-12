import { useState, useEffect } from 'react';
import { getGift } from '../helpers/getGift';

export const useFetchGifts = ( categoria ) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {
        getGift( categoria ).then( img => {

            setTimeout( () => {
                setstate({
                    data: img,
                    loading: false
                });
                console.log(img)
            }, 3000)

        });
    }, [ categoria ])

    return state;
}