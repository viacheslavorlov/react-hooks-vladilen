import React from 'react';
import "./Robot.css"

const Robot = () => {
    return (
        <div className="container-fluid background">
            <div className="head">
                <div  className="right-eye" style={{width: 10, height: 10, borderRadius: '50%', backgroundColor: 'orange'}} ></div>
                <div className="left-eye" style={{width: 10, height: 10, borderRadius: '50%', backgroundColor: 'pink'}} ></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-evenly'}}>
                <div className="right-arm rounded-3" style={{width: 25, height: 60,  margin: 2, transform: 'rotate(30deg) translate(-10px, -40%'}}></div>
                <div className="body rounded-3" style={{width: 70, height: 100,  margin: 2}}></div>
                <div className="left-arm rounded-3" ></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-evenly'}}>
                <div className="right-leg rounded-3"></div>
                <div className="left-leg rounded-3"></div>
            </div>

        </div>
    );
};

export default Robot;