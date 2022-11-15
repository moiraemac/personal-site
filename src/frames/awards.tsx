import React from 'react'

import BaseFrame from './paragraphFrame'
import allGrafs from '../fixture/grafs'

const frameName = "Awards"
const grafs = [2, 15].map(idx => allGrafs[idx])

const AwardsFrame = () => <BaseFrame frameName={frameName} grafs={grafs} id="awards" />

export default AwardsFrame