import React, { Fragment } from 'react'
import classes from './Modal.module.css'


const Modal = props => {
    return (
        <React.Fragment>

            <div className={classes.overlay} onClick={props.onClick}></div>
            <div className={classes.modal}>
                <button onClick={props.onClick} className={classes.button}>X</button>
                {props.children}
            </div>

        </React.Fragment>
    )
}

export default Modal