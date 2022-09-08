import React from 'react';
import './Footer.css';

export default function Footer(){
    let footerStype = {
        width: "100%",
        top: "90vh"
    };
    return (
        <div className="text-light py-3 footerContainer" style={footerStype}>
            <p className="text-center">Copyright &copy; React - Todo</p>
        </div>
    );
}

