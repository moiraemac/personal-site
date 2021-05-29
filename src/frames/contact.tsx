import React from 'react'

import BaseFrame from './base'
import allGrafs from '../fixture/text'

const frameName = "Contact"
const grafs = [27].map(idx => allGrafs[idx])

const ContactFrame = () => <BaseFrame frameName={frameName} grafs={grafs} />

export default ContactFrame