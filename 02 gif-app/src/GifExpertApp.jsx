import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = (  ) => {

  const [ categories, setcategories ] = useState([ 'Black Clover', 'Dragon ball' ]);
  

  const addCategory =() =>{
    setcategories([...categories]) //utilizamos el ...category para hacer una copia de las categorias y poder agregar una
  }
  return (
    <>
        <h1 className="text-center pt-5">GifExpertApp</h1>
       

        <AddCategory setcategories={ setcategories }/>
        <ol>
              {
                categories.map( category =>{
                  return <li key={ category }> {category} </li>
                })
              }
        </ol>
    </>
  )
}
