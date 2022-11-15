import React from 'react'

import Frame from './paragraphFrame'

const frameName = "About Me"
const grafs = ["I am a PhD Candidate at the University of Toronto under the supervision of Professor Merve Bodur. Broadly, my research uses theory and computation to solve combinatorial and discrete optimization problems and answer geometric and combinatorial questions about convex polytopes. I am interested in applications in biology, decision-making under uncertainty, and social good. My current research focuses on the theory, methodology, and algorithms used to determine the diameter of lattice polytopes."];

const BiographyFrame = () => <Frame frameName={frameName} grafs={grafs} id="bio"/>

export default BiographyFrame