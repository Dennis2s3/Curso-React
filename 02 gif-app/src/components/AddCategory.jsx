import { useState } from "react"

export const AddCategory = ( {setcategories} ) => {
    const [inputValue, setInputValue] = useState('Dante')
    const onInputChange = ( event ) =>{
            setInputValue( event.target.value )
    }    
    const onSubmit = ( event ) =>{
        event.preventDefault();
        if( inputValue.trim().length <=1) return;
        setcategories( categories =>[inputValue, ...categories]);
        setInputValue('');
    }
  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text " 
            className="form-control w-50 m-auto" 
            value={ inputValue }
            onChange={ onInputChange }
            placeholder="Buscar Gifs"
        />
    </form>
  )
}
