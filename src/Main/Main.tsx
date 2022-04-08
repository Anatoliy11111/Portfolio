import React from 'react';
import style from './Main.module.scss'
import MyFoto from "../assets/image/MyFoto.jpg";
import {Slide} from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (

        <div className={style.MainContainer} id={'Main'}>
            <div className={style.text}>f
                <Slide direction={'left'} delay={100}>
                    <h1>Hello <br/>I'm <span>Anatoliy <br/>Cherepanov</span></h1>
                </Slide>
                <Slide direction={'left'} delay={200}>

                        <ReactTypingEffect
                            className={style.education}
                            text={'Frontend Developer'}
                            typingDelay={1000}
                            eraseDelay={3000}
                            speed={200}
                        />


                </Slide>

            </div>
            <Slide direction={'right'} delay={100}>
            <Tilt>
                <div style={{border: "5px solid rgb(187 128 128)"}} >
                    <div className={style.photo} style={{backgroundImage: `url(${MyFoto})`}}> </div>
                </div>
            </Tilt>
            </Slide>
        </div>
    );
};

