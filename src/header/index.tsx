import React from 'react';
import FullSizeHeader from './fullSize';
import MobileHeader from './mobile';

type Props = {
    isSmall: boolean
    isMobile: boolean
    links: {
        id: string,
        title: string,
    }[]
}

function Frame(props: Props) {
    const {isMobile, ...passThrough} = props;
    if (isMobile) {
        return <MobileHeader {...passThrough} />;
    }
    return <FullSizeHeader {...passThrough} />;
}

export default Frame;
