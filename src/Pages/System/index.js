import React from 'react';
import {systems} from "./data";
import bg from '../../images/system/bg.png'
import laptop from '../../images/system/laptop.png'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const SystemPage = () => {

    const {ref, inView} = useInView()

    return (
        <div className={'system-page'} id={'system'} ref={ref}>
            <div className="container">
                <motion.h1
                    initial={{y: '100%', opacity: 0}}
                    animate={inView ? {y: 0, opacity: 1} : {}}
                    transition={{duration: 0.5, type: 'linear', delay:0.2}}
                    className="title">ERP cистемы
                </motion.h1>
                <div className="body">
                    <div className="left">
                        <div className="content">
                            <img className={'bg'} src={bg} alt=""/>
                            <motion.img
                                initial={{scale: 0.5, opacity: 0, y:0}}
                                animate={inView ? {scale: 1, opacity: 1, y:0} : {}}
                                transition={{duration: 0.5, type: 'linear', delay:0.4}}
                                className={'laptop'} src={laptop} alt=""/>
                        </div>
                    </div>
                    <div className="right">
                        <motion.p
                            initial={{y: '100%', opacity: 0}}
                            animate={inView ? {y: 0, opacity: 1} : {}}
                            transition={{duration: 0.5, type: 'linear', delay:0.6}}
                            className="desc">IT Системы любого уровня сложности в удобные для вас сроки.
                        </motion.p>
                        <div className="system-container">
                            {
                                systems.map((item, index) => (
                                    <motion.div
                                        initial={{y: '100%', opacity: 0}}
                                        animate={inView ? {y: 0, opacity: 1} : {}}
                                        transition={{duration: 0.5, type: 'linear', delay: `0.${index}`}}
                                        className={'box'} key={index}>
                                        <img src={item.icon} alt=""/>
                                        <p>{item.text}</p>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemPage;