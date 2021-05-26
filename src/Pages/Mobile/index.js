import React from 'react';
import ios from '../../images/mobile/ios.svg'
import android from '../../images/mobile/android.svg'
import flutter from '../../images/mobile/flutter.svg'
import kotlin from '../../images/mobile/kotlin.svg'
import swift from '../../images/mobile/swift.svg'
import cross from '../../images/mobile/cross.svg'
import bg from '../../images/mobile/bg.png'
import phones from '../../images/mobile/phones.png'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const MobilePage = () => {

    const {ref, inView} = useInView()

    return (
        <div className={'mobile-page'} id={'mobile'} ref={ref}>
            <div className="container">
                <motion.h1
                    initial={{opacity: 0, y:'100%'}}
                    animate={inView ? {opacity: 1, y:0} : {}}
                    transition={{duration: 0.5, delay: 0.2, type: 'linear'}}
                    className="title">Мобильная разработка
                </motion.h1>
                <div className="body">
                    <div className="left">
                        <motion.p
                            initial={{opacity: 0, y:'100%'}}
                            animate={inView ? {opacity: 1, y:0} : {}}
                            transition={{duration: 0.5, delay: 0.4, type: 'linear'}}
                            className="desc">
                            В сотрудничестве со стартапами мы научились создавать творческий и функциональный
                            пользовательский интерфейс для мобильных приложений.
                        </motion.p>
                        <motion.div
                            initial={{opacity: 0, y:'100%'}}
                            animate={inView ? {opacity: 1, y:0} : {}}
                            transition={{duration: 0.5, delay: 0.6, type: 'linear'}}
                            className="platforms">
                            <div className="box">
                                <img src={ios} alt=""/>
                                <p>IOS</p>
                            </div>
                            <div className="box">
                                <img src={android} alt=""/>
                                <p>Android</p>
                            </div>
                            <div className="box">
                                <img src={cross} alt=""/>
                                <p>Crossplatform</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y:'100%'}}
                            animate={inView ? {opacity: 1, y:0} : {}}
                            transition={{duration: 0.5, delay: 0.8, type:'linear'}}
                            className="technologies">
                            <h3 className="title">Технологии</h3>
                            <div className="content">
                                <div className="box">
                                    <img src={swift} alt=""/>
                                    <p>Swift</p>
                                </div>
                                <div className="box">
                                    <img src={kotlin} alt=""/>
                                    <p>Kotlin</p>
                                </div>
                                <div className="box">
                                    <img src={flutter} alt=""/>
                                    <p>Flutter</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="right">
                        <div className="content">
                            <img className={'bg'} src={bg} alt=""/>
                            <motion.img
                                initial={{scale: 0.5, opacity:0}}
                                animate={inView ? {scale: 1, opacity:1} : {}}
                                transition={{duration: 0.3, type:'tween', delay:0.4}}
                                className={'phone'} src={phones} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobilePage;