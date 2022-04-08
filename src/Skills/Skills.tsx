import React from 'react';
import style from './Skills.module.css'
import container from './../Common/Style/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";
import js from "../assets/image/javascript.png";
import react from "../assets/image/react.jpg";
import css from "../assets/image/css.png";
import ts from "../assets/image/ts.png";
import tdd from "../assets/image/tdd.png";
import StoryBook from "../assets/image/storybook.png";
import redux from "../assets/image/Redux.png";
import axios from "../assets/image/axios.jpg";
import {Flip, Slide} from "react-awesome-reveal";

export const Skills = () => {

    const jsIcon = {
        backgroundImage: `url(${js})`
    }
    const ReactIcon = {
        backgroundImage: `url(${react})`
    }
    const cssIcon = {
        backgroundImage: `url(${css})`
    }
    const TSIcon = {
        backgroundImage: `url(${ts})`
    }
    const TDDIcon = {
        backgroundImage: `url(${tdd})`
    }
    const StoryBookIcon = {
        backgroundImage: `url(${StoryBook})`
    }
    const ReduxIcon = {
        backgroundImage: `url(${redux})`
    }
    const AxiosIcon = {
        backgroundImage: `url(${axios})`
    }


    const mySkills = [
        {name: 'Type Script', description: 'Типизация примитивов, функций, обьектов', styles: TSIcon, time: 600},
        {
            name: 'React',
            description: 'React hooks, функции, колбэки, базовое понимание классовых компонент',
            styles: ReactIcon,
            time: 650
        },
        {name: 'Redux-Thunk', description: 'Хорошее понимание работы Redux', styles: ReduxIcon, time: 700},
        {
            name: 'Java Script',
            description: 'нативный JS, работа с обьектами, массивами, строками',
            styles: jsIcon,
            time: 750
        },
        {name: 'CSS', description: 'модульный css, препроцессоры SASS', styles: cssIcon, time: 800},
        {name: 'Axios', description: 'Работа с сервером', styles: AxiosIcon, time: 850},
        {
            name: 'Unit Tests',
            description: 'Базовое понимание разработки по средствам тестирования',
            styles: TDDIcon,
            time: 900
        },
        {name: 'StoryBook', description: 'опыт работы с StoryBook', styles: StoryBookIcon, time: 950},
    ]


    return (
        <div className={style.skillsBlock} id={'Skills'}>
            <div className={`${container.container} ${style.skillsContainer}`}>
                <Flip direction={'horizontal'} delay={200}>
                    <Title title={'Skills'}/>
                </Flip>
                <div className={style.skills}>

                    {mySkills.map(s => {

                        return (
                            <Slide key={s.name} direction={'right'} duration={s.time}>
                                <Skill
                                    key={s.name}
                                    name={s.name}
                                    description={s.description}
                                    styles={s.styles}
                                />
                            </Slide>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

