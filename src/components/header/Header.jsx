import React from 'react';
import style from './Header.module.css';
const Header = () =>  {
    return ( 
        <header className={style.header}>
            <menu className={style.menu}>
                <ul className={style.ul}>
                    <li className={style.li}><a className={style.link} href = '#3'> About </a></li>
                    <li className={style.li}><a className={style.link} href = '#3'>My works</a></li>
                    <li className={style.li}><a className={style.link} href = '#3'>Contact</a></li>
                    <li className={style.li}><a className={style.link} href = '#3'>Prices</a></li>
                </ul>
            </menu>
        </header>
        );
}
 
export default Header;