import React from 'react';
import styleLinc from './Link.module.css';
const Link = (props) =>  {
    return (
    <li className={styleLinc.li}><a className={styleLinc.link} href = '#3'>{props.text}</a></li>
        );
}
 
export default Link;