import React from 'react'
import '../App.css'

type Props = {
    frameName: string
    grafs: string[]
    id: string
}

function ParagraphFrame(props: Props) {
    return (
        <div className="Frame" id={props.id}>
            <h2>{props.frameName}</h2>
            {props.grafs.map((graf: string) => <p>{graf}</p>)}
        </div>
    )
}

export default ParagraphFrame;
