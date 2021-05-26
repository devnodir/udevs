import React, {useState} from 'react';
import {FaInstagram, FaTwitter, FaYoutube, MdClose, MdMenu} from "react-icons/all";
import logo from '../../images/logo.svg'
import {HashLink} from "react-router-hash-link";

const HiddenMenu = () => {

    const [show,setShow] = useState(false)

    return (
        <div className={'hidden-menu'}>
            <button className="toggle" onClick={()=>setShow(prev=>!prev)}>
                <MdMenu className={'icon'}/>
            </button>
            <div className={`content ${show?'show':''}`}>
                <div className="content-header">
                    <img className={'logo'} src={logo} alt=""/>
                    <button className={'toggle'} onClick={()=>setShow(prev=>!prev)}>
                        <MdClose className={'icon'}/>
                    </button>
                </div>
                <ul className="content-menu">
                   <li className={'item'} onClick={()=>setShow(false)}>
                        <HashLink smooth to={'#mobile'} className={'link'}>Услуги</HashLink>
                   </li>
                   <li className={'item'} onClick={()=>setShow(false)}>
                        <HashLink smooth to={'#'} className={'link'}>Клиенты</HashLink>
                   </li>
                   <li className={'item'} onClick={()=>setShow(false)}>
                        <HashLink smooth to={'#team'} className={'link'}>Наша команда</HashLink>
                   </li>
                </ul>
                <div className="content-footer">
                    <HashLink to={'#contact'} className="btn-call">Связаться</HashLink>
                    <div className="icons">
                        <span><FaInstagram/></span>
                        <span><FaTwitter/></span>
                        <span><FaYoutube/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HiddenMenu;