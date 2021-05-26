import React from 'react';
import image from '../../images/team/image.svg'
import CountUp from 'react-countup'
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const TeamPage = () => {

    const {ref,inView} = useInView()

    return (
        <div className={'team-page'} id={'team'}>
            <div className="container" ref={ref}>
                <motion.h1
                    initial={{y:'100%',opacity:0}}
                    animate={inView?{y:0,opacity:1}:{}}
                    transition={{duration:0.5, type:'linear', delay:0.2}}
                    className="title">Выделенная команда</motion.h1>
                <div className="body">
                    <div className="left">
                        <motion.div
                            initial={{y:'100%',opacity:0}}
                            animate={inView?{y:0,opacity:1}:{}}
                            transition={{duration:0.5, type:'linear', delay:0.4}}
                            className="desc">
                            Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик,
                            UI/UX дизайнер, DevOps, QA-инженер, бэкенд и фронтенд разработчики
                        </motion.div>
                        <motion.div
                            initial={{y:'100%',opacity:0}}
                            animate={inView?{y:0,opacity:1}:{}}
                            transition={{duration:0.5, type:'linear', delay:0.6}}
                            className={'count-container'}>
                            <span className={'count'}>
                                <CountUp end={inView?40:0} duration={3}/>
                                <motion.span
                                initial={{opacity:0}}
                                animate={inView?{opacity:1}:{}}
                                transition={{duration:0.3, delay:2}}
                                >+</motion.span>
                            </span>
                            <p className="text">
                                Сотрудников
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{scale:0.5,opacity:0}}
                        animate={inView?{scale:1,opacity:1}:{}}
                        transition={{duration:0.3, type:'tween'}}
                        className="right">
                        <img src={image} alt="" className="img"/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;