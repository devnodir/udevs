import React from 'react';
import {NavHashLink} from 'react-router-hash-link'
import logo from '../../images/logo.svg'
import down from '../../images/down.svg'
import MyDropdown from "./MyDropdown";
import {services, portfolio} from './data'
import HiddenMenu from "./HiddenMenu";
import {motion} from 'framer-motion'


const NavBar = () => {


    return (
        <motion.div
            initial={{opacity: 0, y: '-100%'}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}

            className={'navbar'}>
            <div className="container">
                <div className="nav">
                    <div className="logo">
                        <NavHashLink smooth className={'link'} activeClassName={'active'} to="#home">
                            <img className={'logo-icon'} src={logo} alt=""/>
                        </NavHashLink>
                    </div>
                    <ul className="menu">
                        <li className={'item'}>
                            <NavHashLink smooth className={'link'} activeClassName={'active'}
                                         to="#directions">Направления</NavHashLink>
                        </li>
                        <li className={'item'}>
                            <NavHashLink smooth className={'link'} activeClassName={'active'}
                                         to="#team">Команда</NavHashLink>
                        </li>
                        <li className={'item'}>
                            <NavHashLink smooth className={'link'} activeClassName={'active'}
                                         to="#services">Услуги <img className={'link-icon'} src={down}
                                                                    alt=""/></NavHashLink>
                            <MyDropdown title={'Услуги'} array={services}/>
                        </li>
                        <li className={'item'}>
                            <NavHashLink smooth className={'link'} activeClassName={'active'}
                                         to="#instruments">Инструменты</NavHashLink>
                        </li>
                        <li className={'item'}>
                            <NavHashLink smooth className={'link'} activeClassName={'active'}
                                         to="#clients">Клиенты</NavHashLink>
                        </li>
                        <li className={'item'}>
                            <NavHashLink smooth className={'link'} activeClassName={'active'}
                                         to="#portfolio">Портфолио <img className={'link-icon'} src={down}
                                                                        alt=""/></NavHashLink>
                            <MyDropdown title={'Услуги'} array={portfolio}/>
                        </li>
                        <li className={'item'}>
                            <NavHashLink smooth className={'btn-call'} activeClassName={'active'}
                                         to="#contact">Cвязаться</NavHashLink>
                        </li>
                    </ul>
                    <HiddenMenu/>
                </div>
            </div>
        </motion.div>
    );
};

export default NavBar;