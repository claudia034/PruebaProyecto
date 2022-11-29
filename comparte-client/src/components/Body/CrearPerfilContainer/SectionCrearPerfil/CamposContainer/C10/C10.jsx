import React from "react";
import "../C2/C2.scss";

import { MdPassword } from "react-icons/md";

const C10 = () => {
    return (
    <div className="c2">
        <figure><MdPassword/></figure>
        <div>
            <input 
            title="La contraseña debe de tener entre 8 y 32 chars, y al menos 1 M, 1 m y 1 #"
            type="password" 
            placeholder="Verificar contraseña"
            id="passwordv" 
            name="passwordv" 
            pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/"/>
        </div>
    </div>)
}

export default C10