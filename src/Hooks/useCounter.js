import { useState, useEffect  } from "react"

export function useCounter(){
    const [count, setCount] = useState(()=> {
      return localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
    })

    useEffect(() =>{
      localStorage.setItem("count", count)
    }, [count])

  const dicreaseCount =() =>{
    if(count >0){
      setCount((count) => count - 1)
    }
  }

  const increaseCount =() =>{
      setCount((count) => count + 1)
    }
    return{count, increaseCount, dicreaseCount}
  }