import React from 'react'
import Products from './Products';

const Home = () => {
    return (

        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="/assents/lg.jpg" className="card-img" alt="Backgraund" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
                        <p className="card-text lead fs-e">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
}
export default Home;