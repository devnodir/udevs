import React from 'react';
import {HashLink} from "react-router-hash-link";
import image1 from '../../images/home/image-1.svg'
import logo from '../../images/logo.svg'
import ReactTyped from "react-typed";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";


const HomePage = () => {

    const {ref,inView} = useInView()

    return (
        <div className={'home-page'} id={'home'}>
            <div className="container">
                <div className="body" ref={ref}>
                    <div className={'left'}>
                        <motion.img
                            initial={{y:'100%',opacity:0}}
                            animate={inView?{y:0,opacity:1}:{}}
                            transition={{duration:0.5, type:'linear', delay:0.2}}
                            className={'logo'} src={logo} alt=""/>
                        <motion.h1
                            initial={{y:'100%',opacity:0}}
                            animate={inView?{y:0,opacity:1}:{}}
                            transition={{duration:0.5, type:'linear', delay:0.4}}
                            className={'title'}>IT-Аутсорсинг Компания</motion.h1>
                        <motion.h1
                            initial={{y:'100%',opacity:0}}
                            animate={inView?{y:0,opacity:1}:{}}
                            transition={{duration:0.5, type:'linear', delay:0.6}}
                            className={'typed'}>
                            <ReactTyped strings={[
                                            'Мобильная разработка',
                                            'ERP cистемы',
                                            'UI / UX Дизайн',
                                            'Оптимизация инфраструктуры',
                                            'IT Консалтинг'
                                        ]}
                                        typeSpeed={100}
                                        backSpeed={60}
                                        loop
                            />
                        </motion.h1>
                        <motion.div
                            initial={{y:'100%',opacity:0}}
                            animate={inView?{y:0,opacity:1}:{}}
                            transition={{duration:0.5, type:'linear', delay:0.8}}>
                            <HashLink  smooth className={'btn-call'}>Связаться</HashLink>
                            </motion.div>

                    </div>
                    <div className={'right'}>
                        <motion.img
                            initial={{opacity:0}}
                            animate={inView?{opacity:1}:{}}
                            transition={{duration:0.5, type:'linear'}}
                            alt={''} src={image1} className={'img'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;