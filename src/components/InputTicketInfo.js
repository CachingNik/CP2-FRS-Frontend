import React from "react"
import Gender from "../components/common/Gender"



function TicketInfo(){
    return(
        <div>
            <form className="row">
                <input className="col-4" type="text" name="firstName" placeholder="First Name" />
                <input className="col-4" type="text" name="lastName" placeholder="Last Name"/>
                <input className="col-4" type="text" name="age" placeholder="Age"/>
                <Gender className="col-4" />
                <input className="col-4" type="text" name="phoneNumber" placeholder="Phone Number" />
                <input className="col-4" type="text" name="email" placeholder="Email Address" />
            </form>
        </div>
    )
}

export default TicketInfo;