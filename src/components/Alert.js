import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong> {props.message}</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert
