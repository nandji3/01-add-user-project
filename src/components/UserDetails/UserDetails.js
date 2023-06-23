import React from "react";
import './UserDetails.css'

const UserDetails = (props) => {

    return (
        <div className="data-display">
            {props.user.map((data, index) => {
                return (
                    <div className="data-display-in-li" key={index} id={Math.random()}>
                        <h5 >{data.name}  ({data.age} year old.)</h5>
                    </div>)
            })}
        </div >
    )
}
export default UserDetails;