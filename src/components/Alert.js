import React from 'react'
import "./secondary-comps.css"

export default function Alert(props) {

    return (
        props.alert && <div id='alert' className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong style={{textTransform: "capitalize"}}>{props.alert.type} :</strong> <span>{props.alert.msg}</span>
        </div>
    )
}
