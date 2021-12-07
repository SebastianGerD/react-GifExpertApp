import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );


    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages ) // Podriamos ponerlo como "imgs => setImages(imgs)"; pero ya que se repite el argumento, como en "(imgs) => console.log(imgs)" entonces podemos simplicarlo al solo colocar la función que querramos utilizar ^^. Aplicando esto al ejemplo del clg: ".then( console.log )"
    // }, [ category ] )
    
    return (
        
        <>
            <h3 className="animate__animated animate__fadeInDown">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            // img={ img }
                            {...img}
                            key={ img.id }                    
                        /> 
                    ))

                        
                
                }
                

            </div>
        </>
    )
}
