import * as React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {   
    const buttonStyle = {
        backgroundColor: 'purple',
        color: 'white',
        padding: '10px 20px',
        textDecoration: 'underline',
        display: 'inline-block',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px'
    }

    return (
        <>
            <h1>You have received an error</h1>
            <Link to="/" style={buttonStyle}>Return to Home</Link>
        </>
    )

}