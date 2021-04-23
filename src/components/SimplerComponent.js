import React from 'react'

export default function SimplerComponent(props) {
    return (
        <div onClick={props.handleClick}>
            <span>I am just happy.</span>
        </div>
    )
}
