import { useState } from 'react'
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = ( newCategory ) => {
        // categories.push('Valorant') // No usar push en react, hay que crear un nuevo array
        // setCategories([...categories, 'Valorant']); // Añade al final
        // setCategories( cat => [...cat, 'Valorant']);
        // console.log(newCategory);
        if ( categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]); // Añade al principio
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // onAddCategory={ setCategories }
            onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* Listado de Gifs */}
        { 
            categories.map( category => (
                <GifGrid 
                    key={ category }
                    category = { category }
                />
            ))
        }
    </>
  )
}


// apiKey = '514GpwiRqtGAJ27N6MfxMhGJJ8YIduEl';