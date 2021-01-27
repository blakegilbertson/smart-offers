// ignore file for now, looks like I implemented react-router which contains its own Link component 

import React from 'react'

const Anchor = (props) => {
    const {
        href = '/',
        id = null,
        className = null,
        type = 'primary', // primary, secondary, tertiary
        text,
        onClick = null
    } = props

    const outputChildrenOrText = props.children !== undefined ? props.children : text
    const outputClasses = className === null ? `link link--${type}` : `link link-${type} ${className}`

    return (
        <a href={href} id={id} className={outputClasses} onClick={onClick}>
            {outputChildrenOrText}
        </a>
    );
};

export default Anchor