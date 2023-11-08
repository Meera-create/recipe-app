import React from 'react';

const Alert = ({ message, success }) => {
    if (!message) return null;

    return (
        <div className={`alert alert-${success ? "success" : "error"}`}>
            {message}
        </div>
    )
}

export default Alert;