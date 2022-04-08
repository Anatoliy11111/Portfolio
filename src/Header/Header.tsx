import React from 'react';
import style from './Header.module.css'
import {Navigate} from "../Navigate/Navigate";

export const Header = () => {
    return (
        <div className={style.header}>
            <Navigate/>
        </div>
    );
};

