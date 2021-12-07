import React from 'react';

const Notes = ({firstname, lastname, role, phone, message}) => {
    return (
        <div className="notes">
           <p>{firstname} {lastname} - <em>{role}</em> | phone number: {phone} | <strong>{message}</strong></p>
        </div>
    );
};

export default Notes;