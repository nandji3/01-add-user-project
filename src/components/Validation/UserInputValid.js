import React from "react";
import './UserInputValid.css'

const UserInputValid = (props) => {
    return (
        <>
            <div className="wrapper" ></div>
            <div className="container">
                {(props.input.name === "" || props.input.age === "") && <h5 >Please Enter Valid Name & Age (non-empty values) !!!</h5>}
                {(props.input.age > 28) && <h5 >Enter valid age</h5>}
                <button onClick={() => (props.setValid(true))}>Okay</button>
            </div>
        </>
    )
}
export default UserInputValid;