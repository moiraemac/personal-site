import React from 'react'
import '../App.css'


function ListFrame() {
    return (
        <div className="Frame List-Frame" id={"education"}>
            <h2>Education</h2>
            <ul>
                <li>Master of Applied Science, Industrial Engineering, University of Toronto, 2019</li>
                <ul>
                    <li>Thesis:	<a href='https://tspace.library.utoronto.ca/bitstream/1807/98151/1/MacNeil_Moira_201911_MAS_thesis.pdf'>Integer and Constraint Programming Approaches to Discretizable Distance Geometry Problems</a></li>
                </ul>
                <li>Bachelor of Science (Honours), Mathematics, Dalhousie University in 2017</li>
            </ul>
        </div>
    )
}

export default ListFrame;
