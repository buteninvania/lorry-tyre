import React from "react";
import h from "../header/header.module.css";
import SvgPlace from "../../icon/IconComponent/SvgPlace";
import SvgTime from "../../icon/IconComponent/SvgTime";
import SvgPhone from "../../icon/IconComponent/SvgPhone";
import SvgEmail from "../../icon/IconComponent/SvgEmail";
import logo from "../../img/header.center.logo.png";
import SvgAccount from "../../icon/IconComponent/SvgAccount";
import SvgBasket from "../../icon/IconComponent/SvgBasket";
import {NavLink} from "react-router-dom";
import {useDrawer} from "../../hooks/useDrawer";

export const HeaderContainer = () => {
    return (
        <div className={h.header}>
            <HeaderTop/>
            <HeaderCenter/>
            <HeaderNavbar/>
        </div>
    )
}

const HeaderTop = () => {
    return (
        <div className={h.header__top}>
            <div className={h.header__item}><SvgPlace/><p>214032, г. Смоленск, ул. Лавочкина, д. 102</p></div>
            <div className={h.header__item}><SvgTime/><p>работы: c 9-00 до 19-00</p></div>
            <div className={h.header__item}><SvgPhone/><p>тел. +7 (4812) 67-34-44</p></div>
            <div className={h.header__item}><SvgEmail/><p>E-mail: info@lorry-tyre.ru</p></div>
        </div>
    )
}

const HeaderCenter = () => {

    const svgMenu = useDrawer()

    return (
        <div className={h.header__center}>
            <div>{svgMenu}</div>
            <div className={h.header__logo}>
                <img src={logo} alt="logo"/>
                <div className={h.header__description}>
                    <p>LORRY-TYRE</p>
                    <p>ИНТЕРНЕТ-МАГАЗИН ШИН И ДИСКОВ</p>
                </div>
            </div>
            <div className={h.header__account}>
                <SvgAccount/>
                <div>
                    <p>Мой аккаунт</p>
                    <p>Привет! Войдите.</p>
                </div>
            </div>
            <div>
                <SvgBasket/>
            </div>
        </div>
    )
}

const HeaderNavbar = () => {
    return (
        <ul className={h.header__navbar}>
            <li className={h.item}>
                <NavLink activeClassName={h.active} to='/main'>Главная</NavLink>
            </li>
            <li className={h.item}>
                <NavLink activeClassName={h.active} to='/about'>О компании</NavLink>
            </li>
            <li className={h.item}>
                <NavLink activeClassName={h.active} to='/payment'>Доставка и оплата</NavLink>
            </li>
            <li className={h.item}>
                <NavLink activeClassName={h.active} to='/info'>Информация</NavLink>
            </li>
            <li className={h.item}>
                <NavLink activeClassName={h.active} to='/promotions'>Акции</NavLink>
            </li>
            <li className={h.item}>
                <NavLink activeClassName={h.active} to='/contacts'>Контакты</NavLink>
            </li>
        </ul>
    )
}
