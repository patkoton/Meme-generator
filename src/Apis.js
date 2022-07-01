import React, { useEffect, useState } from 'react'

const Apis = () => {
    const [warData, setWarData] = useState({})
    const [count, setCount] = usestate(1)

    //console.log("Components Rendered")

    

    useEffect(() => {
      console.log("Effect Ran")
        fetch(`https://swapi.dev/api/people/1${count}`)
        .then(res => res.json())
        .then(data => setWarData(data))
    }, [count])

  return (
    <div>
      <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(warData, null, 2)}</pre>
    </div>
  )
}

export default Apis

//Making an API request and saving that data through state
