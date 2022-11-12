import React from 'react'
import PropTypes from 'prop-types'
import "./secondary-comps.css"
import { Link } from 'react-router-dom'


export default function Navbar(nav) {

    const navfieldColor = () => {
        if (nav.mode === "info") {
            return "light";
        }
        else if (nav.mode === "primary") {
            return "dark";
        }
        else if (nav.mode === "danger") {
            return "dark";
        }
        else if (nav.mode === "success") {
            return "dark";
        }
        else if (nav.mode === "warning") {
            return "light";
        }
        else if (nav.mode === "light") {
            return "light";
        }
        else if (nav.mode === "dark") {
            return "dark";
        }
      }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${navfieldColor()} bg-${nav.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{nav.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{nav.navigation1}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">{nav.navigation2}</Link>
                        </li>
                    </ul>
                    <div className="d-flex mx-3">
                        <div className="rounded mx-2 bg-info palette" onClick={()=>{nav.toggleMode("info")}}></div>
                        <div className="rounded mx-2 bg-primary palette" onClick={()=>{nav.toggleMode("primary")}}></div>
                        <div className="rounded mx-2 bg-warning palette" onClick={()=>{nav.toggleMode("warning")}}></div>
                        <div className="rounded mx-2 bg-success palette" onClick={()=>{nav.toggleMode("success")}}></div>
                        <div className="rounded mx-2 bg-danger palette" onClick={()=>{nav.toggleMode("danger")}}></div>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={()=>{nav.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label`} style={{color: nav.txtfieldColor(), transition: ".7s"}} htmlFor="flexSwitchCheckDefault">{nav.mode === "dark"? "Disable": "Enable"} Dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    navigation1: PropTypes.string,
    navigation2: PropTypes.string
}

Navbar.defaultProps = {
    title: "set title here",
    navigation1: "link1",
    navigation2: "link 2"
} 