import React from 'react';
import {HashLink} from "react-router-hash-link";

const MyDropdown = ({title,array}) => {
    return (
            <ul className={'dropdown'}>
                <p className={'disabled'}>{title}</p>
                {
                    array.map((item,index)=>(
                        <li key={index} className={'dropdown-item'}>
                            <HashLink smooth className={'dropdown-link'} to={`#${item.link}`}>
                                <img className={'icon'} src={item.icon} alt=""/>
                                <span className={'text'}>{item.text}</span>
                            </HashLink>
                        </li>
                    ))
                }
            </ul>
    );
};

export default MyDropdown;