import React from 'react'
import '../App.css'

type Props = {
    frameName: string
    children: React.ReactNode
    id: string
}

function FrameWithChildren(props: Props) {
    return (
        <div className="Frame" id={props.id}>
            <h2>{props.frameName}</h2>
            {props.children}
        </div>
    )
}

export default FrameWithChildren;
