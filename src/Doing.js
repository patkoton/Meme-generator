// import React from 'react'

// const Doing = () => {

//     const [count, setCount] = React.useState(0);
//     const [warData, setWarData] = useState({})
//     console.log("Component Rendered")

//     React.useEffect(() => {
//     fetch("")
//     .then(res => res.json())
//     .then(data => setWarData(data))

//      console.log("Effect function ran")
//     }, [count])

//     function minus() {
//         setCount(prevCount => prevCount - 1)
//     }

//     function plus() {
//         setCount(prevCount => prevCount + 1)
//     }


//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//       <button onClick={minus}>-</button>
//       <h1>{count}</h1>
//       <button onClick={plus}>+</button>
//     </div>
//   )
// }

// export default Doing


// import React from 'react'
// import boxes from './boxes'
// import Box from './Box';
// import './index.css';

// const Doing = () => {
//     const [square, setSquare] = React.useState(boxes)

//     function toggle(id) {
//         setSquare(prevSquare => {
//             return prevSquare.map((square) => {
//                 return square.id === id ? {...square, on: !square.on}: square
//             })
//         })
//     }

//     const squareElement = square.map(square => (
//         <Box
//         key={square.id} 
//         on={square.on} 
//         toggle={() => toggle(square.id)}
//         />
//     ))

//     // const styles = {
//     //     backgroundColor: "black"
//     // }
    
//   return (
//     <main>
//       {squareElement}
//     </main>
//   )
// }

// export default Doing





// import React, { useState } from  'react'
// import './index.css';

// const Doing = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = () => {
//     const user = {
//       name, email, password
//     }
//     console.log(user)
//   }

//   return (
//     <div>
//       <div>
//         <label>Name</label><br />
//         <input name='name' type='text' value={name} onChange={e => setName(e.target.value)} />
//       </div>
//       <br />
//       <div>
//         <label>Email</label><br />
//         <input name='email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
//       </div>
//       <br />
//       <div>
//         <label>Password</label><br />
//         <input name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
//       </div>
//       <br />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Doing




// import React, {useState} from "react"
// import './doing.css';

// export default function Form() {
//     const [formData, setFormData] = useState(
//         {firstName: "",
//          lastName: "", 
//          email: "", 
//          comments: "",
//          isFriendly: true,
//          employment: "",
//          favColor: ""
//         }
//     )
//     //console.log(formData.favColor)
    
//     function handleChange(event) {
//       const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }

//     function handleSubmit(event) {
//         event.preventDefault()
//         console.log(formData)
//     }
    
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <br />

//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />
//             <br />

//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <br />

//             <textarea 
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//                 value={formData.comments}
//             />
//             <br />

//             <input
//                 type="checkbox"
//                 id="isFriendly"
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly"
//             />
//             <label htmlFor="isFriendly">Are You Friendly</label>
//             <br />

//             <fieldset>
//               <legend>Current Employment Status</legend>
//               <input 
//                   type="radio"
//                   id="unemployed"
//                   value="unemployed"
//                   name="employment"
//                   checked={formData.employment === "unemployed"}
//                   onChange={handleChange}
//               />
//               <label htmlFor="unemployed">Unemployed</label>
//               <br />

//               <input 
//                   type="radio"
//                   id="part-time"
//                   value="part-time"
//                   name="employment"
//                   checked={formData.employment === "part-time"}
//                   onChange={handleChange}
//               />
//               <label htmlFor="part-time">Part-Time</label>
//               <br />

//               <input 
//                   type="radio"
//                   id="full-time"
//                   value="full-time"
//                   name="employment"
//                   checked={formData.employment === "full-time"}
//                   onChange={handleChange}
//               />
//               <label htmlFor="full-time">Full-Time</label>
//             </fieldset>
//             <br />

//             <label htmlFor="favColor">What is your favourite color?</label>
//             <br/>
//             <select 
//                 id="favColor"
//                 value={formData.favColor}
//                 name="favColor"
//                 onChange={handleChange}
//             >
//                 <option value="">--Choose--</option>
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//             <br />
//             <button>Submit</button>
//         </form>
//     )
// }



// import React, { useState } from "react"
// import './doing.css';

// /**
//      * Challenge: Connect the form to local state
//      * 
//      * 1. Create a state object to store the 4 values we need to save.
//      * 2. Create a single handleChange function that can
//      *    manage the state of all the inputs and set it up
//      *    correctly
//      * 3. When the user clicks "Sign up", check if the 
//      *    password & confirmation match each other. If
//      *    so, log "Successfully signed up" to the console.
//      *    If not, log "passwords to not match" to the console.
//      * 4. Also when submitting the form, if the person checked
//      *    the "newsletter" checkbox, log "Thanks for signing
//      *    up for our newsletter!" to the console.
//      */
    

// export default function Doing() {
//     const [formData, setFormData] = useState(
//        {email: "",
//         password: "",
//         confpassword: "",
//         okayToEmail: false
//         }
//     )


//     function handleChange(event) {
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             } 
//         })
//     }
    
//     function handleSubmit(event) {
//         event.preventDefault()
//         if (formData.password === formData.confpassword) {
//             console.log("Successfully signed up")
//         } else {
//             console.log("passwords to not match")
//             return
//         }

//         if (formData.okayToEmail) {
//             console.log("Thanks for signing up for our newsletter")
//         }
//     }
    
//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input 
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     placeholder="Email address"
//                     className="form--input"
//                     onChange={handleChange}
//                 />
//                 <input 
//                     type="password"
//                     name="password"
//                     value={formData.password} 
//                     placeholder="Password"
//                     className="form--input"
//                     onChange={handleChange}
//                 />
//                 <input 
//                     type="password"
//                     name="confpassword"
//                     value={formData.confpassword} 
//                     placeholder="Confirm password"
//                     className="form--input"
//                     onChange={handleChange}
//                 />
                
//                 <div className="form--marketing">
//                     <input
//                         type="checkbox"
//                         id="okayToEmail"
//                         name="okayToEmail"
//                         checked={formData.okayToEmail}
//                         onChange={handleChange} 
//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button 
//                     className="form--submit"
//                 >
//                     Sign up
//                 </button>
//             </form>
//         </div>   
//     )
// }

import React, { useState } from "react"
import WindowTracker from "./WindowTracker"
import "./doing.css";

export default function Doing() {
    const [show, setshow] = useState(true)
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    const toggle = () => {
        setshow(prevShow => !prevShow)
    }
    
    return (
        <div className="containerwt">
            <button className="buttonwt" onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}
