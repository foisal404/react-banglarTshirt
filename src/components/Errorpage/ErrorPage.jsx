import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';
import "./ErrorPage.css"

const ErrorPage = () => {
    const {data,status,statusText} =useRouteError();
    
    return (
        <div >
            <Header></Header>
            <div className='error-page'>
                <h1 className='status'>{status}</h1>
                <h1 className='statusText'>Page {statusText}</h1>
            </div>
            
        </div>
    );
};

export default ErrorPage;