import React, { useState } from "react";
import './UserInput.css';
import UserInputValid from "../Validation/UserInputValid";

const UserInput = (props) => {

    const [inputDetails, setInputDetails] = useState({ name: "", age: "", })
    const [isValid, setIsValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputDetails.name.trim().length === 0 || inputDetails.age.trim().length === 0) {
            setIsValid(false);
            return;
        }
        else if (inputDetails.age.trim() > 28) {
            setIsValid(false);
            return;
        }

        props.onSaveData(inputDetails);

        setInputDetails({ name: "", age: "" });
    }

    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // e.target ={ name: e.target.name, value: e.target.value}
        // {name, value} = e.target;

        const { name, value } = e.target; //using object destructuring
        setInputDetails((prev) => {
            return { ...prev, [name]: value }    //object property can access by using square bracket inside it mention property name
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {!isValid && <UserInputValid valid={isValid} setValid={setIsValid} input={inputDetails} />}
                <div className="form-control">
                    <div>
                        <label style={{ fontWeight: "bold" }}>Name: </label>
                        <input type="text" name="name" value={inputDetails.name} placeholder="Enter user name" onChange={handleChange} />
                    </div>
                    <div>
                        <label style={{ fontWeight: "bold" }}>Age: </label>
                        <input type="number" name="age" value={inputDetails.age} placeholder="Enter age" onChange={handleChange} />
                    </div>
                    <div>
                        <button type='submit'>Add User</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default UserInput;
