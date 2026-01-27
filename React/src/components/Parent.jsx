// import React from 'react'

// const Parent = () => {
//     const getData=(data)=>{
//         console.log("Data from parent to child",data)
//     }
//   return (
//     <div>
//       <child send={getData}/>
//     </div>
//   )
// }

// export default Parent

import React from 'react'
import Child from './Child'
const Parent = () => {
  const getData = (data) => {
    console.log("Data from child to parent:", data)
  }
  return (
    <div>
      <Child send={getData} />
    </div>
  )
}
export default Parent
