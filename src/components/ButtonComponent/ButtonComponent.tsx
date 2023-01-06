import React,{useState} from 'react'
import DetailComponent from '../DetailComponent/DetailComponent'
import { Link } from 'react-router-dom'

const INTIAL_STATE = {
    intial: 1
}

export const ButtonComponent = () => {

const [intial, setIntial] = useState(INTIAL_STATE["intial"])

const handlebutton = (value:string) => {

    const valueDefect = 1;

    if (value == "-") {
        setIntial(intial - valueDefect)
    } else if (value === "+") {
        setIntial(intial + valueDefect)
    } if (intial <= 0 || intial >= 10) {
        return alert("no puedes restar o sumar mas")
    }
}

  return (
    <>  
    <div>
        <h3>Titulo</h3>
        <div><button onClick={()=> handlebutton("-")}>-</button>
        <span>{intial}</span>
        <button onClick={()=> handlebutton("+")}>+</button></div>
    </div>
    
    </>
  )
}
