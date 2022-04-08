import React from 'react';
import style from './Skill.module.scss'

type propsSkillType = {
    name?: string
    description?: string
    styles?: { backgroundImage: string }
}


export const Skill = ({name, description, styles}: propsSkillType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={styles}>
            </div>
            <div className={style.ContainerInfo}>
                <h3>{name}</h3>
                <div className={style.description}>{description}</div>
            </div>
        </div>
    );
};

