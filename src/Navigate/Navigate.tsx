import React from 'react';
import style from './Navigate.module.css'
import {Link} from "react-scroll";

export const Navigate = () => {
    const ActiveLink = [
        {name: 'Main'},
        {name: 'Skills'},
        {name: 'Projects'},
        {name: 'Contacts'},
    ]


    return (

        <div className={style.navigate}>
            {ActiveLink.map((l) => {
                return (
                    <Link key={l.name} activeClass={style.active}
                          to={l.name}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={700}>{l.name}</Link>
                )

            })}
        </div>

    );
};

