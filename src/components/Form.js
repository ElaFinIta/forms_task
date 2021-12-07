import React from "react";

const Form = ({submit, change}) => {
    return (
        <form onSubmit={submit}>
            <div className="lab_input">
                <label htmlFor="firstname">First name</label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    required
                    onChange={change}/>
            </div>
            <div className="lab_input">
                <label htmlFor="lastname">Last name</label>
                <input
                type="text"
                name="lastname"
                id="lastname"
                required
                onChange={change}/>
            </div>
            <div className="lab_input">
                <label htmlFor="phone">Phone number</label>
                <input
                type="phone"
                name="phone"
                id="phone"
                required
                onChange={change}
                />
            </div>
            <div className="lab_input">
                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                required
                onChange={change}/>
            </div>
            <div className="lab_input">
                <label htmlFor="role">Role</label>
                <select name="role" id="role" onChange={change} required>
                    <option value="" disabled selected>Choose a role...</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="lab_input">
                <label htmlFor="send_button"></label>
                <button id="send_button" className="active_button">SEND</button>
            </div>
        </form>
    );
};


export default Form;