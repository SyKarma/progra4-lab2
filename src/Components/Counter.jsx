import { useCounter } from "../Hooks/useCounter"

export function Counter(){
    const {count, increaseCount, dicreaseCount} = useCounter()
    const favoriteNumber = 7;
    return(
        <div className="card">
        <button onClick={dicreaseCount}>
          ➖
        </button>
        <p>{count}</p> 
        <button onClick={increaseCount}>
          ➕
        </button>
        {count === favoriteNumber && <p className="favorite-message">Numero fav</p>}
      </div>
      
    )
}