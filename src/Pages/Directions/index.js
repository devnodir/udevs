import React from 'react';
import {services} from "./data";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const DirectionsPage = () => {

const {ref,inView} = useInView()

    return (
        <div className={'directions-page'} id={'directions'}>
            <div className="container">
                <div className="body" ref={ref}>
                    <motion.h1
                        initial={{y:'100%',opacity:0}}
                        animate={inView?{y:0,opacity:1}:{}}
                        transition={{duration:0.5, type:'linear'}}
                        className="title">Наши услуги</motion.h1>
                    <div className="services-container">
                        {
                            services.map((item, index) => (
                                <motion.div
                                    initial={{y:'100%',opacity:0}}
                                    animate={inView?{y:0,opacity:1}:{}}
                                    transition={{duration:0.5, type:'linear', delay:`0.${index}`}}
                                    className={'service'} key={index}>
                                    <img className={'img'} src={item.icon} alt=""/>
                                    <h3 className={'text'}>{item.text}</h3>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectionsPage;