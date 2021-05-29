import React from 'react'

import BaseFrame from './base'
import allGrafs from '../fixture/text'

const frameName = "Awards"
const grafs = [2, 15].map(idx => allGrafs[idx])

const AwardsFrame = () => <BaseFrame frameName={frameName} grafs={grafs} />

export default AwardsFrame