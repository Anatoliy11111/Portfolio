import React from 'react';
import style from './Projects.module.css'
import {Project} from "./Project/Project";
import {Title} from "../Common/Components/Title/Title";
import todoImage from "../assets/image/processed-svg-illus-usage-policies1.svg";
import socialNetworks from "../assets/image/social_networking_design_people_and_symbols_in_circle_6826491.jpg";
import cardImage from "../assets/image/card.jpg";
import {Flip, Slide} from "react-awesome-reveal";


export const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialNetworks})`
    }
    const todoList = {
        backgroundImage: `url(${todoImage})`
    }
    const card = {
        backgroundImage: `url(${cardImage})`
    }
    const myProjects = [
        {
            title: 'Social Network',
            description: 'Проект социальная сеть',
            styles: socialNetwork,
            link: "https://Anatoliy11111.github.io/social-Network"
        },
        {
            title: 'TodoList',
            description: 'Проект todolist дает возможность записывать и сохранять те или иные вещи которые не хочется держать в голове, регистрируйся и используй',
            styles: todoList,
            link: "https://Anatoliy11111.github.io/TodoList"
        },
        {
            title: 'Learn on card',
            description: 'Изучение по карточкам, проект содержит в себе стандартное логинизационное флоу и возможность изучать что либо повторяя это в любом месте',
            styles: card,
            link: "https://Anatoliy11111.github.io/lerning-card"
        },
    ]


    return (
        <div className={style.projects} id={'Projects'}>
            <div className={` ${style.containerProject}`}>
                <div className={style.titleContainer}>
                    <Flip direction={'horizontal'} delay={200}>
                        <Title title={'Projects'}/>
                    </Flip>
                </div>

                <div className={style.myProject}>
                    <Slide direction={'left'} delay={200}>
                        {myProjects.map((project) => {
                                return (
                                    <Project key={project.title} styles={project.styles} link={project.link}
                                             description={project.description}
                                             title={project.title}
                                    />)
                            }
                        )
                        }
                    </Slide>
                </div>
            </div>
        </div>
    );
};
