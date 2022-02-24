import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPg.css'

const ErrorPg = () => {
    return (
        <div className='errorPgMain'>
            <div className="container d-flex align-items-center justify-content-center text-center" style={{ height: "calc(100vh - 50px)" }}>
                <div className='w-25'>
                    <div className=" card bg-light mb-3">
                        <div className="card-body">
                            <h5>Opps!</h5>
                            <p className="fs-1 text-danger text-bold mb-4 mt-4" style={{ fontWeight: "bold" }}>404</p>
                            <h5>Page not found</h5>
                        </div>
                    </div>
                    <br />
                    <Link to="/" className='btn btn-primary px-4 btn-sm'>Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPg;