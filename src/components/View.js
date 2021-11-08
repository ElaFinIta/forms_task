import React from "react";

const View = (props) => {  // props are placeholders
    return (
        <div className="view">
            <h1>Check your input</h1>
            <div className="viewCard">
                <dev className="empty_item"></dev>
                <div className="grid_item" id="first_field">
                    <p>First name <span>{props.firstname}</span></p>
                </div>

                <dev className="empty_item"></dev>
                <div className="grid_item" id="last_field">
                    <p>Last name <span>{props.lastname}</span></p>
                </div>

                <dev className="empty_item"></dev>
                <div className="grid_item" id="id_field">
                    <p>Phone number <span>{props.phone}</span></p>
                </div>


                <dev className="empty_item"></dev>
                <div className="grid_item" id="role_field">
                    <p>Role <span>{props.role}</span></p>
                </div>

                <dev className="empty_item"></dev>
                <div className="grid_item" id="message_field">
                    <p>Message <span>{props.message}</span></p>
                </div>
            </div>
        </div>
    );
};


export default View;