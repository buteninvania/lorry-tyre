import React, {useState} from "react";
import {SwipeableDrawer} from "@material-ui/core";
import SvgMenu from "../icon/IconComponent/SvgMenu";
import h from "./hooks.module.css";
import {NavLink} from "react-router-dom";
import wheels1 from "../img/modal.wheels.png";
import wheels2 from "../img/modal.whells.2.png";
import tires1 from "../img/modal.tires.1.png";
import tires2 from "../img/modal.tires.2.png";

export const useDrawer = () => {

    const [close, setClose] = useState(false)

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown') {
            return
        }
        setClose(open)
    }

    return (
        <div>
            <SvgMenu active={close} toggleDrawer={toggleDrawer}/>
            <SwipeableDrawer style={{cursor: "alias"}} anchor={"top"} onOpen={toggleDrawer(true)}
                             onClose={toggleDrawer(false)} open={close}>
                <ModalMenu toggleDrawer={toggleDrawer}/>
            </SwipeableDrawer>
        </div>
    )
}

const ModalMenu = (props: any) => {

    const images = [wheels1, wheels2, tires1, tires2]

    const [img, setImg] = useState(0)

    const [opacityWheels, setOpacityWheels] = useState(.4)

    return (
        <div className={h.menu}>
            <div className={h.menu__clm}>
                <NavLink onClick={props.toggleDrawer(false)} to="/collections?filter=wheel-all">Каталог дисков</NavLink>
                <NavLink onClick={props.toggleDrawer(false)} onMouseOut={() => setOpacityWheels(.4)} onMouseOver={() => {setOpacityWheels(1); setImg(0)}} to="/collections?filter=wheel&type=passenger">Для легковых авто</NavLink>
                <NavLink onClick={props.toggleDrawer(false)} onMouseOut={() => setOpacityWheels(.4)} onMouseOver={() => {setOpacityWheels(1); setImg(1)}} to="/collections?filter=wheel&type=cargo">Для грузовых авто</NavLink>

            </div>
            <img style={{opacity: opacityWheels, transition: ".3s"}} className={h.menu__img} src={images[img]} alt="wheels"/>
            <div className={h.menu__clm}>
                <NavLink onClick={props.toggleDrawer(false)} to="/collections?filter=tires-all" >Каталог шин</NavLink>
                <NavLink onClick={props.toggleDrawer(false)} onMouseOut={() => setOpacityWheels(.4)} onMouseOver={() => {setOpacityWheels(1); setImg(2)}} to="/collections?filter=tires&type=passenger">Для легковых авто</NavLink>
                <NavLink onClick={props.toggleDrawer(false)} onMouseOut={() => setOpacityWheels(.4)} onMouseOver={() => {setOpacityWheels(1); setImg(3)}} to="/collections?filter=tires&type=cargo">Для грузовых авто</NavLink>
            </div>
        </div>
    )
}
