import * as React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export const ErrorPage = () => {   
    return (
        <>
            <h1>You have received an error</h1>
            <Link to="/" className="error-button">Return to Home</Link>
        </>
    )
}