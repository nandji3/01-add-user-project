import React, { useState } from "react";
import './UserInput.css';

const UserInput = (props) => {

    const [nameInput, setNameInput] = useState("");
    const [ageInput, setAgeInput] = useState("");

    const submitDetails = (e) => {
        e.preventDefault();
        var userData = {
            name: nameInput,
            age: ageInput
        }
        props.onSaveData(userData);

        setNameInput("");
        setAgeInput("");
    }

    return (
        <div>
            <form onSubmit={submitDetails}>
                <div className="form-control">
                    <div>
                        <input type="text" value={nameInput} placeholder="Enter user name" onChange={(e) => setNameInput(e.target.value)} />
                    </div>
                    <div>
                        <input type="number" value={ageInput} placeholder="Enter age" onChange={(e) => setAgeInput(e.target.value)} />
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