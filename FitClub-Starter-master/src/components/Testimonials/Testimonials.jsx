import React, { useState } from "react";
import './Testimonials.css';
import {testimonialsData} from '../../data/testimonialsData';

const [selected, setSelected] = "useState" (0);
const tLenght = testimonialsData.length;

const Testimonials = () =>{
    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">what they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                    <span>
                        <span>
                            {testimonialsData[selected].name}MATHEW HENDRICKSON 
                        </span>
                        -ENTREPRENEUR{testimonialsData[selected].status}
                    </span>
            </div>
            <div className="right-t"></div>
        </div>
    )
}
export default Testimonials;