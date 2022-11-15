import React, { useCallback, useState, useEffect, useMemo } from 'react'
import '../App.css'
import '../burger.css'
import headshot from '../resources/headshot.jpg';

type Props = {
    isSmall: boolean
    links: {
        id: string,
        title: string,
    }[]
}

function Component(props: Props) {
    const {links} = props; 
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
        const arr = ['Header']
        if (dirty) arr.push('Dirty')
        if (props.isSmall) arr.push('Small')
        return arr.join(' ')
    }, [props.isSmall, dirty])
    const onClick = useCallback(evt => {
        const link = links.find(l => "link-to-" + l.id == evt.target.id)
        if (!link) {
            console.warn("can't find link for " + evt.target.id)
            return;
        }
        const target = document.getElementById(link.id)
        if (!target) {
            console.warn("can't find target for " + evt.target.id)
            return;
        }
        const {top} = target.getBoundingClientRect()
        window.scrollTo({
            top: link == links[0] ? 0 : top + window.scrollY - 80,
            behavior: "smooth",
        });
        toggle()
    }, [links, toggle])

    const burgerClass = useMemo(() => {
        const arr = ['hamburger', 'hamburger--arrowalt-r']
        if (showMenu) arr.push('is-active')
        return arr.join(' ')
    }, [showMenu])
    const menuClass = useMemo(() => {
        const arr = ['Background']
        if (dirtyMenu) arr.push('Dirty')
        if (showMenu) arr.push('Visible')
        return arr.join(' ')
    }, [showMenu, dirtyMenu])
    return (
        <div className={headerClass}>
            <div className="Headshot-container">
                <img src={headshot} className="Headshot" alt="logo" />
            </div>
            <div className="Text-container">
                <span className="Primary">Moira MacNeil</span>
                <span className="Secondary">PhD Student in Operations Research</span>
                <span className="Tertiary">University of Toronto<br/>m.macneil [at] utoronto [dot] ca</span>
            </div>
            <div className="Menu-container">
                <button className={burgerClass} type="button" onClick={toggle}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className={menuClass}>
                    <div className="Background-inner">
                        {links.map(l => (
                            <button id={`link-to-${l.id}`} className="Navigation-link" onClick={onClick}>{l.title}</button>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Component;
