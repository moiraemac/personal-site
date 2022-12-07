
import React from 'react'
import '../App.css'

function ListFrame(p: {includeContact: boolean}) {
    return (
        <div className="Frame BioFrame" id="bio">
            <h2>{p.includeContact ? "Moira MacNeil" : "About Me"}</h2>
            {p.includeContact && <>
                <div className="Text-container">
                    <span className="Secondary">PhD Candidate</span>
                    <span className="Tertiary">
                        Department of Mechanical and Industrial Engineering<br/>
                        University of Toronto<br/>
                        m.macneil [at] utoronto [dot] ca<br/>
                    </span>
                </div>
            </>}
            <p>I am a PhD Candidate at the University of Toronto under the supervision of Professor Merve Bodur. Broadly, my research uses theory and computation to solve combinatorial and discrete optimization problems and answer geometric and combinatorial questions about convex polytopes. I am interested in applications in biology, decision-making under uncertainty, and social good. My current research focuses on the theory, methodology, and algorithms used to determine the diameter of lattice polytopes.</p>
            
        </div>
    )
}

export default ListFrame;


