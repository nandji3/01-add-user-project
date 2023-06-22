import React from "react";


const UserDetails = (props) => {
    console.log(props)
    return (
        <div className="data-display">
            {props.user.map((data) => {
                return (
                    <div className="data-display-in-li" >
                        <li>{data.name}  ---  {data.age}</li>
                    </div>)
            })}
        </div >
    )
}
export default UserDetails;