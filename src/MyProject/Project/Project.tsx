import React from 'react';
import style from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description?: string
    styles: { backgroundImage: string }
    link:string
}


export const Project = ({title, description, styles, link}: ProjectPropsType) => {


    return (
        <div className={style.project}>
            <div className={style.image} style={styles}>
                <div className={style.containerLink}>
                    <a target="_blank" href={link}>Start</a>
                </div>

            </div>
            <div className={style.projectInfo}>
                <div className={style.title}>{title}</div>
                <div className={style.description}>{description}</div>
            </div>
        </div>
    );
};
