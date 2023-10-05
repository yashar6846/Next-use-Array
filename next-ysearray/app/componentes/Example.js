"use client"
import { useState } from "react"


const Example = () => {
    const [item, setItem] = useState([])
    console.log(item);
  return (
  <>
    <button onClick={()=> setItem("item")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-3">
    Button
  </button>
  {item}
  </>
  
  )
}

export default Example