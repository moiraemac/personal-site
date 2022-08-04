import React from 'react'

import Frame from './listFrame'
import allSentences from '../fixture/sentences'

const frameName = "News"
const sentences = [0, 19, 16, 5].map(idx => allSentences[idx])

const NewsFrame = () => <Frame frameName={frameName} items={sentences} />

export default NewsFrame