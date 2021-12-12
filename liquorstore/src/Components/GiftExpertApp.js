import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

export const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState([]);

    return(
        <>
            <h1>GiftExpert</h1>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ul>
                {
                    categories.map(category =>{
                        return <GiftGrid 
                            key={ category }
                            categoria={ category }
                        />
                    })
                }
            </ul>
        </>
    );
}