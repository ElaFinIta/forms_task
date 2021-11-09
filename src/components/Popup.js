import React from 'react';

const closeHandler= () => {
    window.location.reload();
}

const Popup = (props) => {
    return (
        <div className="overlay">
            <div className="popup">
                <h1>Your note:</h1>
                <p>First name: {props.firstname}</p>
                <p>Last name: {props.lastname}</p>
                <p>Phone number: {props.phone}</p>
                <p>Message: {props.message}</p>
                <p>Role: {props.role}</p>
                <div className="button_flex">
                    <button onClick={closeHandler}className="active_button">YES, I AM SURE</button>
                    <button onClick={closeHandler}>NOPE, DON'T WANT TO POST IT</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;