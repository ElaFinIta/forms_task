import React from 'react';

const closeHandler= () => {
    window.location.reload();
}

const Popup = ({ firstname, lastname, phone, message, role, postit }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <h1>Your note:</h1>
                <p>First name: {firstname}</p>
                <p>Last name: {lastname}</p>
                <p>Phone number: {phone}</p>
                <p>Message: {message}</p>
                <p>Role: {role}</p>
                <div className="button_flex">
                    <button onClick={postit}className="active_button">YES, I AM SURE</button>
                    <button onClick={closeHandler}>NOPE, DON'T WANT TO POST IT</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;