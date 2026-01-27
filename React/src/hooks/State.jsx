import React from 'react'
import { useState } from 'react'
const State = () => {
    const [count,setCount] = useState(0)
    const [like,setLike] = useState(0)
    const [dislike,setDislike] = useState(0)
  return (
    <div>
        <h1>useState Example</h1>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=> setLike(like+1)}>❤️likes: {like}</button>
        <button onClick={()=> setDislike(dislike+1)}>😞dislikes: {dislike}</button>
        
        </div>
  )
}
export default State
