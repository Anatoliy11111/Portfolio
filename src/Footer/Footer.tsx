import React from 'react';
import style from './Footer.module.css'
import {Icon} from "./Icon/Icon";
import {Title} from "../Common/Components/Title/Title";
import vk from "../assets/image/vk.png";
import inst from "../assets/image/insta.png"
import tg from "../assets/image/tg.png";
import {Bounce, Flip} from "react-awesome-reveal";


export const Footer = () => {

    const vkIcon = {
        backgroundImage: `url(${vk})`
    }
    const InstagramIcon = {
        backgroundImage: `url(${inst})`
    }
    const telegramIcon = {
        backgroundImage: `url(${tg})`
    }


    const MyContacts = [
        {name: 'https://vk.com/id139334880', backColor: vkIcon},
        {name: 'https://www.instagram.com/talib_aka_vadich/', backColor: InstagramIcon},
        {name: 'https://web.telegram.org/#/im?p=u759312507_16473904285110367166', backColor: telegramIcon},

    ]

    return (
        <div className={style.footer} id={'Contacts'}>
            <div className={style.footerContainer}>
                <div className={style.titleContainer}>
                    <Flip direction={'horizontal'} delay={200}>
                        <Title title={'social networks'}/>
                    </Flip>
                </div>
            </div>
            <div className={style.iconContainer}>
                <Bounce>
                    <div className={style.Icons}>
                        {MyContacts.map(N => {
                            return (

                                <Icon
                                    key={N.name}
                                    name={N.name}
                                    styles={N.backColor}
                                />

                            )
                        })}


                    </div>
                </Bounce>
            </div>

        </div>
    );
};

