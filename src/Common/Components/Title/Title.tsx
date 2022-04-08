import React from 'react';
import style from './Title.module.scss'

type TitlePropsType ={
    title:string
}


export const Title = ({title}:TitlePropsType) => {
    return (
        <h2 className={style.title}>{title}</h2>
    );
};

