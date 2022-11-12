import React from 'react';
import "./secondary-comps.css"

export default function About(props) {
    return (
        <div className='about-container'>
            <div className={`card mb-3 about-card border border-${props.mode}`}>
                <img src="https://source.unsplash.com/1000x300?/laptops,programing" className="card-img-top" alt="..." />
                <div className={`card-body bg-${props.mode}`} style={{color: props.txtfieldColor(), transition: ".7s"}}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}
