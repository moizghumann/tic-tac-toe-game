import { useState } from "react"
import Square from "./components/Square"

const App = () => {
  const [player, setPlayer] = useState(true)
  const handleClick = () => {
    setPlayer(!player);
    return player
  }
  return (
    <>
      <div className="h-screen bg-black flex justify-center items-center">
        <div className="text-white text-center">
          <h2 className="py-2 flex justify-start" >Person {player ? <h2> 1</h2> : <h2> 2</h2>}</h2>
          <div className="bg-red-500 h-80 w-80 rounded grid grid-cols-3 gap-1 p-1.5">
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
            <Square onclick={handleClick} status={player} />
          </div>
        </div>

      </div>
    </>

  )
}

export default App