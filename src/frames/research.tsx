import React from 'react'
import '../App.css'


function ListFrame() {
    return (
        <div className="Frame List-Frame" id={"research"}>
            <h2>Research</h2>
            <h3>Publications</h3>
            <ul>
                <li>M. MacNeil*, and M. Bodur, <a href='https://doi.org/10.1002/net.22068'>"Constraint Programming Approaches to the Discretizable Molecular Distance Geometry Problem"</a>, Networks, 79(4): 515-536, 2022.</li>
                <li>M. MacNeil*, and M. Bodur, <a href='https://doi.org/10.1287/ijoc.2020.1039'>"Integer Programming, Constraint Programming, and Hybrid Decomposition Approaches to Discretizable Distance Geometry Problems"</a>, INFORMS Journal on Computing, 34(1): 297-314, 2022.</li>
            </ul>
            <h3>Preprints</h3>
            <ul>
                <li>M. MacNeil*, and M. Bodur, "Leveraging Decision Diagrams to Solve Two-stage Stochastic Programs with Binary Recourse and Logical Linking Constraints", 2022.</li>
            </ul>
        </div>
    )
}

export default ListFrame;
