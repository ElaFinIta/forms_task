import React from 'react';

const Popup = (props) => {
    return (
        <div className="popup">
            <p>First name: {props.firstname}</p>
            <p>Last name: {props.lastname}</p>
            <p>Phone number: {props.phone}</p>
            <p>Role: {props.role}</p>
            <p>Message: {props.message}</p>
        </div>
    );
};

export default Popup;