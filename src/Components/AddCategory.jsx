import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
        
        setInputValue('');
        onNewCategory(inputValue.trim())
    }       


  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>    
  )
}
