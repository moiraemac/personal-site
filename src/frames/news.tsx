import React from 'react'

import Frame from './listFrame'
import allSentences from '../fixture/sentences'

const frameName = "News";

const sentences = [
    "September 2022: I have been accepted into the Prospective Professors in Training (PPIT) program at UofT",
    "July 2022: I was awarded the Ontario Graduate Scholarship",
];
const NewsFrame = () => <Frame frameName={frameName} items={sentences} id="news"/>

export default NewsFrame