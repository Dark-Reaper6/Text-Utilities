import React from 'react';
import "./secondary-comps.css"

export default function About(props) {
    return (
        <div className='about-container'>
            <div className={`card mb-3 about-card border border-${props.mode}`}>
                <img src="https://source.unsplash.com/1000x300?/laptops,programing" className="card-img-top" alt="..." />
                <div className={`card-body bg-${props.mode}`} style={{color: props.txtfieldColor(), transition: ".7s"}}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">My greetings to the visitors! :) . I am Saad and i developed this little react app which would give you some utilities regarding to your whatever text. I hope you liked it. Don't forget to try out the amazing color modes, you can trigger it from the palette in the navigation bar. And try refreshing this "about" page, each time you refresh it, a different image would appear here :D</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    )
}
