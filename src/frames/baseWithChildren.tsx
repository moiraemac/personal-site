import React from 'react'
import '../App.css'

type Props = {
    frameName: string
    children: React.ReactNode
}

function FrameWithChildren(props: Props) {
    return (
        <div className="Frame">
            <h2>{props.frameName}</h2>
            {props.children}
        </div>
    )
}

export default FrameWithChildren;
