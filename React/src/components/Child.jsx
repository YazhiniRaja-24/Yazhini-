// import React from 'react'

// const Child = ({ send }) => {
//   return (
//     <div>
//       <button onClick={()=>send("Hello from child")}>Send Data</button>
//     </div>
//   )
// }

// export default Child

import React from 'react'

const Child = ({ send }) => {
  return (
    <div>
      <button onClick={() => send("Hello from child")}>
        Send Data
      </button>
    </div>
  )
}

export default Child
