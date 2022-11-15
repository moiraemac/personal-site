import React, { useCallback, useState, useEffect, useMemo } from 'react'
import '../App.css'
import '../burger.css'
import headshot from '../resources/headshot.jpg';

type Props = {
    isSmall: boolean
}

function Component(props: Props) {
    const [showMenu, setShowMenu] = useState(false)
    const [dirtyMenu, setDirtyMenu] = useState(false)
    const [dirty, setDirty] = useState(false)
    const toggle = useCallback(() => {
        setShowMenu(!showMenu)
        setDirtyMenu(true)
    }, [showMenu])
    useEffect(() => {
        if (props.isSmall) {
            setDirty(true)
        }
    }, [dirty || props.isSmall])
    const headerClass = useMemo(() => {
        const arr = ['Mobile-Header']
        if (dirty) arr.push('Dirty')
        if (props.isSmall) arr.push('Small')
        return arr.join(' ')
    }, [props.isSmall, dirty])
    const burgerClass = useMemo(() => {
        const arr = ['hamburger', 'hamburger--arrowalt-r']
        if (showMenu) arr.push('is-active')
        return arr.join(' ')
    }, [showMenu])
    const menuClass = useMemo(() => {
        const arr = ['Links-container']
        if (dirtyMenu) arr.push('Dirty')
        if (showMenu) arr.push('Visible')
        return arr.join(' ')
    }, [showMenu, dirtyMenu])
    return (
        <div className={headerClass}>
            <div className="Headshot-container">
                <img src={headshot} className="Headshot" alt="logo" />
            </div>
            <div className="Top-bar">

                <div className="Text-container">
                    <span className="Primary">Moira MacNeil</span>
                    <span className="Secondary">PhD Student in Operations Research</span>
                </div>
                <div className="Menu-container">
                    <button className={burgerClass} type="button" onClick={toggle}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className={menuClass}>
                <button className="Navigation-link">About Me</button>
                <button className="Navigation-link">News</button>
                <button className="Navigation-link">Research</button>
                <button className="Navigation-link">CV</button>
            </div>
        </div>
    )
}

export default Component;
