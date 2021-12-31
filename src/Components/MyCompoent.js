// Import Area

import { useState } from "react"


export default function MyComponent(){ //Always User PascalCase for Component Name
    //1. State/Variables
    //y=20;
    //Use Hook Variables
    const [y, setY] = useState(20)
  
    //2. function/method
  
    //3. Return
    return <h2>The Value of Y is {y}</h2>
  
}
//I have to export this component so that i can use in another file
