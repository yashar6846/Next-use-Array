"use client"
import { useEffect, useState } from "react"

function createShoppingList(){
    const initialTodos = []

    for(let idValue = 0; idValue < 5; idValue++){
        initialTodos.push(
            {
                id: idValue,
                text: "item" + (idValue + 1) 
            }
        )
    }

    console.log(initialTodos);

    return initialTodos
}

const Example = () => {
    const [shopping, setShopping] = useState(createShoppingList)
    const [text, setText] = useState('')
    const [textError, setTextError] = useState(false)

  
    const showError=()=>{
        if(text.length === 0){
            setTextError(true)
        }
    }
  return (
  <div className="m-4">
    <p>{textError ? <>pless enter a text value</>: <></>}</p>

   <input onChange={(e)=> setText(e.target.value)} type="text"  placeholder="rigth text" className="border h-9 m-1"/>

    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " onClick={()=> {
   if(text.length > 1){
    setText("")
    setShopping([{
        id: shopping.length,
        text: text
    },...shopping])
   }else{
    showError()
   }
   console.log(shopping);
    }}>Adding</button>

     <ui>
     {shopping.map((item)=>(
             <div key={item.id}>
               {item.text}
             </div>
        ))}
     </ui>
  </div>
  
  )
}

export default Example