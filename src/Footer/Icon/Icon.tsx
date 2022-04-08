import React from 'react';
import style from './Icon.module.css'


type propsIconType = {
    name?: string
    styles?: { backgroundImage: string }
}

export const Icon = ({name, styles}: propsIconType) => {
    return (
            <a className={style.icon} style={styles} href={name}> </a>
    );
};

