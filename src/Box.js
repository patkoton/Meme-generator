import React from 'react'
import './doing.css';

const Box = (props) => {
    // const [on, setOn] = React.useState(props.on)

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

  return (
    <div style={styles} 
        className="boxes" 
        onClick={props.toggle}
        >
    </div>
  )
}

export default Box
