import React from "react";

const View = ({firstname, lastname, phone, role, message}) => {  // props are placeholders
    return (
        <div className="view">
            {/* <h1>Check your input</h1> */}
            <div className="viewCard">
                <div className="empty_item"></div>
                <div className="grid_item" id="first_field">
                    <p>First name <span>{firstname}</span></p>
                </div>

                <div className="empty_item"></div>
                <div className="grid_item" id="last_field">
                    <p>Last name <span>{lastname}</span></p>
                </div>

                <div className="empty_item"></div>
                <div className="grid_item" id="id_field">
                    <p>Phone number <span>{phone}</span></p>
                </div>


                <div className="empty_item"></div>
                <div className="grid_item" id="role_field">
                    <p>Role <span>{role}</span></p>
                </div>

                <div className="empty_item"></div>
                <div className="grid_item" id="message_field">
                    <p>Message <span>{message}</span></p>
                </div>
            </div>
        </div>
    );
};


export default View;