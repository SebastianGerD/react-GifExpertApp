import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //     setCategories(cats => [...cats, 'HunterXHunter']);

    //     // setCategories( ['HunterXHunter',...categories] ); tambien puede ser:
    //     // setCategories( [...categories, 'HunterXHunter'] ); :)))
    // } 
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            

            <ol>
                { 
                    categories.map( category => 
                        // <li key = { category }>{ category }</li> 
                        < GifGrid 
                            category={ category } 
                            key = { category }
                        />
                    )
                }
            </ol>

        </>
    )
}

