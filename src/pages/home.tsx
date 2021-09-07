import React from "react";
import "../styles/main.css"

import banner from "../assets/banner.svg";

const Home = () => {


    return (


        <div className="row MainWrapper">
            <div className="col-md-6 MainWrapper CenterContent ">
                <div className="col-md-6 mx-auto">
                    <h1 className='primaryColor'>
                        Welcome to Omnipresent
                    </h1>
                    <p>
                        Your Next Employee Could Be In Malawi
                    </p>


                    <p>
                        <a className='btn btn-primary'
                           href="/admin"
                           type="">
                            Admin Log In
                        </a>
                    </p>

                </div>
            </div>
            <div className="col-md-6 CenterContent">
                <img src={banner} alt=""/>

            </div>
        </div>


    )
};


export default Home;